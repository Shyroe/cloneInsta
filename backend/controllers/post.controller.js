const Post = require("../models/post.model");
const User = require("../models/user.model");

exports.create = async (req, res) => {
  console.log("Post Create req userId: ", req.userId);
  const post = new Post({
    author: req.body.author || "Untitled author",
    place: req.body.place || "Untitled place",
    desc: req.body.desc || "Untitled desc",
    hashtags: req.body.hashtags || "Untitled hashtags",
    image: req.body.image || "Untitled image",
    creator: req.userId,
  });

  try {
    const resPost = await post.save();
    console.log("resPost: ", resPost);
    res.json(resPost);
  } catch {
    (err) => console.log(err);
  }
};

//Utilizando Post Creator
exports.findAll = (req, res) => {
  console.log("Post FindAll req userId: ", req.userId);

  Post.find({ creator: req.userId })
    .then((posts) => {
      // res.send(posts);
      console.log("posts: ", posts);
      res.json(posts);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving posts.",
      });
    });
};

//Find a single employee with a employeeID
exports.findOne = (req, res) => {
  Post.findById(req.params.postId)
    .then((post) => {
      if (!post) {
        return res.status(404).send({
          message: "post not found with id: " + req.params.postId,
        });
      }
      res.send(post);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "post not found with id " + req.params.postId,
        });
      }
      return res.status(500).send({
        message: "Error retrieving post with id " + req.params.postId,
      });
    });
};

//Update a post identified by the postId in the request
exports.update = (req, res) => {
  //Find post and update it
  Post.findByIdAndUpdate(
    req.params.postId,
    {
      author: req.body.author || "Untitled author",
      place: req.body.place || "Untitled place",
      desc: req.body.desc || "Untitled desc",
      hashtags: req.body.hashtags || "Untitled hashtags",
      image: req.body.image || "Untitled image",
      likes: req.body.likes || "Untitled likes",
    },
    { new: true }
  )
    .then((post) => {
      if (!post) {
        return res.status(404).send({
          message: "post not found with id: " + req.params.postId,
        });
      }

      res.send(post);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "post not found with id: " + req.params.postId,
        });
      }

      return res.status(500).send({
        message: "Error updating post with id: " + req.params.postId,
      });
    });
};

//Delete a post with the specified postId in the request
exports.delete = (req, res) => {
  console.log("Id delete: ", req.params.postId);
  Post.findByIdAndRemove(req.params.postId)
    .then((post) => {
      if (!post) {
        return res.status(404).send({
          message: "post not found with id " + req.params.postId,
        });
      }

      res.send({
        message: "post Deleted successfuly!",
      });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "post not found with id " + req.params.postId,
        });
      }
      return res.status(500).send({
        message: "Could not delete post with id " + req.params.postId,
      });
    });
};
