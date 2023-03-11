const accessFile = require("../access.json");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.SECRET_KEY;

const WriterAutMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  let decoded = jwt.decode(token, secretKey);
  let method;
  if (req.method === "POST") {
     method="Create"
  } else if (req.method == "PATCH") {
    method="Update"
  } else if (req.method == "DELETE"){
     method="Delete"
  } else {
    method="get"
  }
  

  const role = accessFile.find((e) => e.role === decoded.role);

  if (
    role.access.post.includes("R") &&
    role.access.post.includes("C") &&
    role.access.post.includes("U") &&
    role.access.post.includes("D")
  ) {
    if (role.role === "Writer") {
      next();
    } else {
      return res
        .status(403)
        .send(`You are not allowed for performing the ${method} operation.`);
    }
  } else if (
    role.access.post.includes("R") &&
    role.access.post.includes("D") &&
    role.access.post.includes("U")
  ) {
    if (role.role === "Admin") {
      next();
    } else {
      return res
        .status(403)
        .send(`You are not allowed for performing the ${method} operation.`);
    }
  } else {
    return res
      .status(400)
      .send(`You are not allowed for performing the ${method} operation.`);
  }
};

module.exports = WriterAutMiddleware;
