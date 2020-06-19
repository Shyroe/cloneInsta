const config = require("../config");
const jwt = require("jsonwebtoken");

// Jeito 1
// function verifyToken(req, res, next) {
//   const token = req.header("x-auth-token");
//   console.log("Token: ", token);
//   // console.log("req Header: ", req.header);

//   //Check for token
//   if (!token)
//     return res.status(401).json({
//       msg: "No token, authorization denied",
//     });

//   try {
//     //Verify token
//     const decoded = jwt.verify(token, config.secret);

//     console.log("User Decoded verifyToken: ", decoded);
//     //Add user from payload
//     req.user = decoded;
//     console.log("Verify Token req user: ", req.user);
//     next();
//   } catch (e) {
//     res.status(400).json({
//       msg: "Token is not valid",
//     });
//   }
// }

function verifyToken(req, res, next) {
  // const token = req.headers.authorization; //Funciona
  //Get Auth bearer value
  const bearerHeader = req.headers["authorization"]; //Funciona
  console.log("Bearer Header: ", bearerHeader);
  //Spit at the space. Metodo split forma um array com as palavras que forem dividas no espaço vazio.
  const bearer = bearerHeader.split(" ");
  const token = bearer[1];
  console.log("VerifyToken Token: ", token);
  // console.log("req Header: ", req.header);

  //Check for token
  if (!token)
    return res.status(401).json({
      msg: "No token, authorization denied",
    });

  try {
    //Verify token
    const decoded = jwt.verify(token, config.secret);

    console.log("User Decoded verifyToken: ", decoded);
    //Add user from payload
    req.userId = decoded.sub;
    console.log("Verify Token req user: ", req.userId);
    next();
  } catch (e) {
    res.status(400).json({
      msg: "Token is not valid",
    });
  }
}

module.exports = verifyToken;
