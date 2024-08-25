import { useState, useEffect } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Typography,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const PostDetail = () => {
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/posts/${id}`
      );
      setPost(data);
    };
    fetchPost();
  }, [id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    await axios.post(
      `${process.env.REACT_APP_API_URL}/posts/${id}/comments`,
      { text: comment },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setComment("");
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/posts/${id}`
    );
    setPost(data);
  };

  const handleDelete = async () => {
    const token = localStorage.getItem("token");
    await axios.delete(`${process.env.REACT_APP_API_URL}/posts/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    navigate("/");
  };

  if (!post) return <Typography>Loading...</Typography>;

  return (
    <Box mt={4}>
      <Card>
        <CardContent>
          <Typography variant="h4">{post.title}</Typography>
          <Typography variant="body1" mt={2}>
            {post.content}
          </Typography>
          <Typography variant="h6" mt={2}>
            Comments
          </Typography>
          {post.comments.map((comment, index) => (
            <Typography key={index} variant="body2">
              {comment.text}
            </Typography>
          ))}
          <form onSubmit={handleCommentSubmit}>
            <TextField
              label="Add a comment"
              variant="outlined"
              fullWidth
              margin="normal"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: "20px" }}
            >
              Add Comment
            </Button>
          </form>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleDelete}
            style={{ marginTop: "20px" }}
          >
            Delete Post
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PostDetail;
