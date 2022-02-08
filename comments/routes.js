var express = require("express");
const { randomBytes } = require("crypto");

var router = express.Router();

// posts data
const commentsByPostId = {};
router.get("/", (req, res) => {
  res.send("hello");
});

// GET request for the posts data
router.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

// POST request for the posts data
router.post("/posts/:id/comments", (req, res) => {
  // generate the random id with the hexa-decimal characters
  const commentId = randomBytes(4).toString("hex");

  // get the request body from the client (what users has been posted the value)
  // destructure the object & grab the content
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];

  comments.push({ id: commentId, content });

  commentsByPostId[req.params.id] = comments;

  res.status(201).send(comments);
});

module.exports = router;
