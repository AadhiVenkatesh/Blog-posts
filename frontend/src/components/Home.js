import { useEffect, useState } from "react";
import axios from "axios";
import PostItem from "./PostItem";
import { Box } from "@mui/material";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/posts`
      );
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <Box mt={4}>
      {posts.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </Box>
  );
};

export default Home;
