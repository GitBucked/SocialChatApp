const express = require("express");
const router = express.Router();
const { Comments } = require("../models");

router.get("/:postId", async (req, res) => {
  const postId = req.params.postId;
  const comment = await Comments.findAll({ where: { PostId: postId } });
  res.json(comment);
});

router.post("/:postId", async (req, res) => {
  const commentBody = req.body.commentBody;
  const PostId = req.params.postId;
  const newComment = await Comments.create({
    commentBody: commentBody,
    PostId: PostId,
  });
  res.json(newComment);
});

module.exports = router;
