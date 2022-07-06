const { Router } = require("express");
const userController = require("../controller/userController");

const route = Router();

route.post("/saveProfile", userController.userRegister);
route.post("/checkUser", userController.checkUser);
route.post("/updateProfile", userController.userUpdateAccount);

module.exports = route;