const Comment = require("../models/comment.model");

exports.create = async (req, res) => {
  const { msg, postId } = req.body;

  console.log("req body Comment: ", req.body);
  console.log("req userId comment: ", req.userId);

  try {
    const comment = new Comment({
      msg: msg,
      postId: postId,
      creator: req.userId,
    });

    console.log("Comment Create: ", comment);

    await comment.save();
  } catch {
    (err) => console.log(err);
  }
};

exports.findAll = (req, res) => {
  // console.log("Post FindAll locals session: ", res.locals.userId);
  console.log("Comment FindAll req userId: ", req.userId);

  Comment.find({ creator: req.userId })
    .then((comment) => {
      // res.send(posts);
      console.log("Comment FindAll: ", comment);
      res.json(comment);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving comments.",
      });
    });
};
