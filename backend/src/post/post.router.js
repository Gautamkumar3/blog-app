const express = require("express");
const Post = require("./post.schema");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.SECRET_KEY;
const Authmiddleware = require("../middleware/Authentication");
const WriterAutMiddleware = require("../middleware/Authorization");
const app = express.Router();

// ############## Home page post ###################

app.get("/all", async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const allPost = await Post.find().populate("userId", "-password");
    const filterPost = await Post.find()
      .populate("userId", "-password")
      .skip((page - 1) * limit)
      .limit(limit);
    return res.status(200).send({ filterPost, allPost });
  } catch (er) {
    return res.status(404).send("Something went wrong");
  }
});

// ###################  Post related by selected writer ###################

app.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let post = await Post.find({ userId: id }).populate("userId", "-password");
    return res.status(200).send(post);
  } catch (er) {
    return res.status(404).send({ msg: er });
  }
});

// ########################### search post by title ##############

app.get("/api/search", async (req, res) => {
  let keyword = {};
  if (req.query.q) {
    keyword = req.query.q;
  }
  console.log(keyword);
  try {
    const AllPost = await Post.find({
      title: { $regex: keyword, $options: "i" },
    });
    console.log(AllPost);
    return res.status(200).send(AllPost);
  } catch (er) {
    return res.status(403).send(er.message);
  }
});

// ################### Get Post when user click on any particular post ##############

app.get("/single/:id", async (req, res) => {
  const { id } = req.params;

  try {
    let post = await Post.findById(id).populate("userId", "-password");
    res.status(200).send(post);
  } catch (er) {
    return res.status(404).send({ msg: er });
  }
});

// ###################### Create post by Creator ################

app.post("/", Authmiddleware, WriterAutMiddleware, async (req, res) => {
  const token = req.headers.authorization;
  const data = jwt.decode(token, secretKey);

  try {
    const post = new Post({ ...req.body, userId: data.id });
    await post.save();
    res.status(200).send(post);
  } catch (er) {
    res.status(400).send({ msg: er });
  }
});

// #################### Delete particular post by Creator #######################

app.delete("/:id", Authmiddleware, WriterAutMiddleware, async (req, res) => {
  let { id } = req.params;

  // unique means userId who created post and it is in every post that created because I write userId in post schema
  let unique = req.headers.unique;

  const token = req.headers.authorization;

  const data = jwt.decode(token, secretKey);

  try {
    if (data.id === unique || data.role === "Admin") {
      let data = await Post.find({ _id: id });
      if (data.length == 0) {
        return res.status(500).send("This data doesn't exist in database");
      }

      let afterDelete = await Post.findByIdAndDelete(id);
      res
        .status(200)
        .send({ message: "Delete successfully", data: afterDelete });
    } else {
      res.status(401).send("You are not the owner of this blog");
    }
  } catch (e) {
    res.status(401).send(e.message);
  }
});

// ################## Edit only by creator ###################

app.patch("/:id", Authmiddleware, WriterAutMiddleware, async (req, res) => {
  let { id } = req.params;
  let unique = req.headers.unique;

  const token = req.headers.authorization;

  const data = jwt.decode(token, secretKey);

  try {
    if (data.id === unique || data.role === "Admin") {
      let data = await Post.find({ _id: id });
      if (data.length == 0) {
        return res.status(500).send("This data doesn't exist in database");
      }

      let afterUpdate = await Post.findByIdAndUpdate(
        id,
        { ...req.body },
        { new: true }
      );
      res.status(200).send(afterUpdate);
    } else {
      res
        .status(401)
        .send("You are not the owner of this blog so you can't update");
    }
  } catch (e) {
    res.status(401).send(e.message);
  }
});

// #################### admin can delete any blog #######################

app.delete("admin/:id", async (req, res) => {
  const token = req.headers.authorization;
  let data = jwt.decode(token, secretKey);
  if (data.role === "Admin") {
    try {
      const id = req.params.id;
      let afterDelete = await Post.findByIdAndDelete(id);
      return res
        .status(200)
        .send({ message: "Delete successfully", data: afterUpdate });
    } catch (e) {
      res.status(401).send(e.message);
    }
  } else {
    return res
      .status(403)
      .send("You can't perform this operation only admin can perform it.");
  }
});

// #################### admin can update any blog #######################

app.delete("admin/:id", async (req, res) => {
  const token = req.headers.authorization;
  let data = jwt.decode(token, secretKey);
  if (data.role === "Admin") {
    try {
      const id = req.params.id;
      let updatedPost = await Post.findByIdAndUpdate(
        id,
        { ...req.body },
        { new: true }
      );
      return res.status(200).send(updatedPost);
    } catch (e) {
      res.status(401).send(e.message);
    }
  } else {
    return res
      .status(403)
      .send("You can't perform this operation only admin can perform it.");
  }
});

module.exports = app;
