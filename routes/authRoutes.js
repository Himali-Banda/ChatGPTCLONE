//const express = require("express");
const {
  registerContoller,
  loginController,
  logoutController,
} = require("../controllers/authController");


const express = require('express');

const router = express.Router(); // This should work if Express is installed correctly


//router object
//const router = express.Router();

//routes
// REGISTER
router.post("/register", registerContoller);

//LOGIN
router.post("/login", loginController);

//LOGOUT
router.post("/logout", logoutController);

module.exports = router;
