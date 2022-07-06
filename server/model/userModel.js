const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new Schema({
  email: {
    type: String,
    unique: true
  },
  username: {
    type: String,
    unique: true
  },
  bio: String,
  pro_pic: String,
  wallet: {
    type: String,
    unique: true
  },
  
});

var User = mongoose.model("users", userSchema);

module.exports = User;
