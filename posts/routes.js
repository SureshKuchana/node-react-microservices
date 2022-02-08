var express = require("express");
const { randomBytes } = require("crypto");

var router = express.Router();

// posts data
const posts = {};
// GET request for the posts data
router.get("/", (req, res) => {
  //
  console.log(" req ", req);
});

// POST request for the posts data
router.post("/posts", (req, res) => {
  // generate the random id with the hexa-decimal characters
  const id = randomBytes(4).toString("hex");

  // get the request body from the client (what users has been posted the value)
  // destructure the object & grab the title
  const { title } = req.body;

  // assign values to posts
  posts[id] = {
    id,
    title,
  };

  // send the response
  res.status(201).send(JSON.stringify(posts[id]));
});

module.exports = router;
