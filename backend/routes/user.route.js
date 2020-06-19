const express = require("express");
const router = express.Router();

//import controller
const User = require("../controllers/user.controller");

router.get("/users", User.getUsers);
router.get("/profile", User.profile);

module.exports = router;
