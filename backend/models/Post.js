const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    comments: [{ text: String, date: { type: Date, default: Date.now } }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
