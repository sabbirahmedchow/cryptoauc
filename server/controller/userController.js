const user = require("../model/userModel");

module.exports.userRegister = (req, res) => {
  
  const newUser = new user({
    email: req.body.email,
    username: req.body.username,
    pro_pic: '',
    bio: req.body.bio,
    wallet: req.body.walletId,
  });
   newUser.save((err, saveduser) => {
    if (err)
    {
      console.log(err)
      return res.send({
        msgError: err.message,
      });
    }
    else
    {
      const userInfo = { uId: saveduser._id, wallet: saveduser.wallet };
      
      return res.status(200).json({
        msgSuccess: "Your profile has been created successfully.",
        userInfo
      });
    }
  });

};

module.exports.checkUser = (req, res) =>{
   user.findOne({ wallet: req.body.walletAddr }, function(err, userRes) {
    if(err){console.log(err);}
    console.log(userRes);
    if(userRes == null)
    res.json(JSON.stringify(userRes));
    else{
      const userInfo = { uId: userRes._id, wallet: userRes.wallet };
      
      return res.status(200).json({
        userInfo
      });
    }
  });
};

module.exports.userUpdateAccount = async (req, res) =>{
  
  if(req.body.password == "")
  {
    await user.findOne({ _id: req.user }, function(err, userRes) {
      if(err){console.log(err);}
      req.body.password = userRes.password;
   });
  }
  else
  {
    const hashP = await bcrypt.hash(req.body.password, saltRounds);
    req.body.password = hashP;
  }
  const data = req.body;
  //console.log(data);
  const id = {_id: req.user };
  user.findByIdAndUpdate(id, data, function(err, userRes) {
    if(err)
    {
      return res.send({
        msgError: "Cannot update profile. Try again"
      });
    }
    else
    {
      res.send({
        msgSuccess: "Profile updated successfully."
      });
    }
  });
};




