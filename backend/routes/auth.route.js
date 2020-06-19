const express = require("express");
const router = express.Router();
const verifyToken = require("../controllers/verifyToken");

//import controller
const User = require("../controllers/user.controller");

router.post("/signup", User.createUser);
router.post("/signin", User.loginUser);
router.get("/user", verifyToken, User.profile);

module.exports = router;
