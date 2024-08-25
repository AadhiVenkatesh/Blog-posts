const express = require("express");
const { addComment } = require("../controllers/commentController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router({ mergeParams: true }); //This option tells the router to merge the parameters from parent routers (like postId) so that the postId from /api/posts/:postId/comments is accessible

router.post("/", authMiddleware, addComment);

module.exports = router;
