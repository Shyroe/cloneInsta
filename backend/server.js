const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const passport = require("passport");
const app = express();

//Import database
require("./models/db");
const db = mongoose.connection;

//cors options
let corsOptions = {
  origin: "http://localhost:1234",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

require("./models/db"); //Import database connection
const bodyParser = require("body-parser");
const PORT = 3000;

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
// app.use(cors());
app.use(cors(corsOptions));

//Session middleware
app.use(
  session({
    secret: "authcloneinsta12300",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 * 2, // two weeks
    },
    store: new MongoStore({
      mongooseConnection: db,
    }),
  })
);
app.use(passport.initialize());
app.use(passport.session()); //persist login session

//Global vars middlewares
// app.use((req, res, next) => {
//   res.locals.userId = req.userId !== undefined;

//   // console.log("req userId Global: ", req.userId);
//   // console.log("res locals userId Global: ", res.locals.userId);
//   next();
// });

//Import Routes
const postsRoutes = require("./routes/post.route");
const authRoutes = require("./routes/auth.route");
const usersRoutes = require("./routes/user.route");
const commentsRoutes = require("./routes/comment.route");

// Import Routes
app.use("/api", postsRoutes);
app.use("/api", usersRoutes);
app.use("/api", commentsRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log("Servidor em execução na porta: ", PORT);
});
