import { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button, Typography, Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/posts/${id}`
        );
        setTitle(data.title);
        setContent(data.content);
        setExcerpt(data.excerpt);
        setIsEdit(true);
      };
      fetchPost();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const postData = { title, content, excerpt };

    if (isEdit) {
      await axios.put(
        `${process.env.REACT_APP_API_URL}/posts/${id}`,
        postData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } else {
      await axios.post(`${process.env.REACT_APP_API_URL}/posts`, postData, {
        headers: { Authorization: `Bearer ${token}` },
      });
    }
    navigate("/");
  };

  return (
    <Box mt={4}>
      <Typography variant="h4">
        {isEdit ? "Edit Post" : "Create New Post"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Excerpt"
          variant="outlined"
          fullWidth
          margin="normal"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
        />
        <TextField
          label="Content"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={6}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "20px" }}
        >
          {isEdit ? "Update Post" : "Create Post"}
        </Button>
      </form>
    </Box>
  );
};

export default PostForm;
