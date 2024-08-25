import { Card, CardContent, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const PostItem = ({ post }) => {
  const isOwner = localStorage.getItem("token"); // Simplified check

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h5">{post.title}</Typography>
        <Typography variant="body2">{post.excerpt}</Typography>
        <Button component={Link} to={`/posts/${post._id}`}>
          View
        </Button>
        {isOwner && (
          <Button
            component={Link}
            to={`/posts/${post._id}/edit`}
            color="primary"
          >
            Edit
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default PostItem;
