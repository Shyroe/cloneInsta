const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let commentSchema = new Schema({
  msg: {
    type: String,
    required: true,
  },
  postId: "",
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post",
  },
});

//Export model
//Entendendo a funciton model('nome que será utilizado para fazer referência a este modelo', schema referente ao modelo)
module.exports = mongoose.model("Comment", commentSchema);
