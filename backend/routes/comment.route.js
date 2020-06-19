const express = require("express");
const router = express.Router();

//Controller
// const employee_controller = require("../controllers/employee.controller");

const comment = require("../controllers/comment.controller.js");
const verifyToken = require("../controllers/verifyToken");

// router.get("/test", employee_controller.test);

//Api employee model

router.get("/comment", verifyToken, comment.findAll);

// router.get("/post/:postId", post.findOne);

router.post("/comment", verifyToken, comment.create);

// router.delete("/post/:postId", post.delete);

// router.put("/post/:postId", post.update);

module.exports = router;
