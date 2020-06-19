const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let postSchema = new Schema(
  {
    author: String,
    place: String,
    desc: String,
    hashtags: String,
    image: String,
    likes: {
      type: Number,
      default: 0,
    },
    active: {
      type: Boolean,
      default: false,
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

//Export model
//Entendendo a funciton model('nome que será utilizado para fazer referência a este modelo', schema referente ao modelo)
module.exports = mongoose.model("Post", postSchema);
