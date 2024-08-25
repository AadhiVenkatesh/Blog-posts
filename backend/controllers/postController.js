const Post = require("../models/Post");

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("owner", "username");
    res.json(posts);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching posts", error: err.message });
  }
};

const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate(
      "owner",
      "username"
    );
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching post", error: err.message });
  }
};

const createPost = async (req, res) => {
  const { title, excerpt, content } = req.body;
  const owner = req.user.id;
  try {
    const post = new Post({ title, excerpt, content, owner });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error creating post", error: err.message });
  }
};

const updatePost = async (req, res) => {
  const { title, excerpt, content } = req.body;
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    if (post.owner.toString() !== req.user.id)
      return res.status(403).json({ message: "Not authorized" });

    post.title = title;
    post.excerpt = excerpt;
    post.content = content;
    await post.save();
    res.json(post);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error updating post", error: err.message });
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    if (post.owner.toString() !== req.user.id)
      return res.status(403).json({ message: "Not authorized" });

    await post.deleteOne();
    res.json({ message: "Post deleted" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting post", error: err.message });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
