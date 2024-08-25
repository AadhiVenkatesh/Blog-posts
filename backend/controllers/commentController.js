const Post = require("../models/Post");

const addComment = async (req, res) => {
  const { text } = req.body;
  const { postId } = req.params;

  console.log("Received postId:", postId); // Debugging log

  try {
    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ message: "Post not found" });

    post.comments.push({ text });
    await post.save();
    res.json(post);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error adding comment", error: err.message });
  }
};

module.exports = { addComment };
