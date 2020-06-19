const jwt = require("jsonwebtoken");
const helpers = require("../lib/helpers");
const config = require("../config");

const User = require("../models/user.model");

const verifyToken = require("../controllers/verifyToken");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (!users) throw Error("No users exist");
    res.json(users);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
};

exports.createUser = async (req, res) => {
  const { name, email, username, password, bio, avatar } = req.body;
  const body = {
    name,
    email,
    password,
    username,
    bio,
    avatar,
  };
  console.log("Req Body: ", body);

  // console.log("bodyData: ", name, email, password);

  // Simple Validation
  // if (!name || !email || !password) {
  //   return res.status(400).json({
  //     msg: "Please enter all fields"
  //   });
  // }

  try {
    const user = await User.findOne({ email: email });
    console.log("User: ", user);

    if (user) throw Error("User already exists");

    //Encrypt Password
    const encryptPassword = await helpers.encryptPassword(password);

    const newUser = new User({
      name,
      email,
      bio,
      avatar,
      username,
      password: encryptPassword,
    });

    console.log("newUser Controller: ", newUser);

    //Salvar usuário no banco de dados
    const savedUser = await newUser.save();
    if (!savedUser) throw Error("Something went wrong saving the user");

    // criando token
    const token = jwt.sign({ sub: savedUser._id }, config.secret, {
      expiresIn: 3600,
    });

    res.status(200).json({
      token: token,
      user: {
        id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email,
        avatar: savedUser.avatar,
        bio: savedUser.bio,
        username: savedUser.username,
      },
    });
  } catch (e) {
    res.status(400).json({
      error: e.message,
    });

    console.log("Error: ", e);
  }
};

//LoginUser
exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  //Simple validation
  if (!email || !password) {
    res.status(400).json({
      msg: "Please enter all fields",
    });
  }

  try {
    //Check for existing user
    const user = await User.findOne({ email: email });
    if (!user) throw Error("User does not exist");

    const isMatch = helpers.validatePassword(password, user.password);
    if (!isMatch) throw Error("Invalid credentials");

    const token = jwt.sign({ sub: user._id }, config.secret, {
      expiresIn: 3600,
    });
    if (!token) throw Error("Couldnt sign the token");

    res.status(200).json({
      token: token,
      user: {
        id: user._id,
        name: user.name,
        username: user.username,
        bio: user.bio,
        avatar: user.avatar,
        email: user.email,
      },
    });
    // next();
  } catch (e) {
    res.status(400).json({
      msg: e.message,
    });
  }
};

exports.profile = async (req, res) => {
  console.log("Profile req user: ", req.userId);

  try {
    const resData = await User.find({ _id: req.userId });
    console.log("resData: ", resData);
    res.json(resData[0]);
  } catch {
    (err) => console.log(err);
  }
};
