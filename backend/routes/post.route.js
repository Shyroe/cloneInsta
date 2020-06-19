const express = require("express");
const router = express.Router();

//Controller
// const employee_controller = require("../controllers/employee.controller");

const post = require("../controllers/post.controller.js");
const verifyToken = require("../controllers/verifyToken");

// router.get("/test", employee_controller.test);

//Api employee model

router.get("/post", verifyToken, post.findAll);

router.get("/post/:postId", post.findOne);

router.post("/post", verifyToken, post.create);

router.delete("/post/:postId", post.delete);

router.put("/post/:postId", post.update);

module.exports = router;
