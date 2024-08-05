import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useDispatch, useSelector } from "react-redux";
import { createCommentAction, likePostAction } from "../../Redux/Post/post.action";
import { isLikedByReqUser } from "../../utils/isLikedByReqUser";

const PostCard = ({ item }) => {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();
  const [showComments, setShowComments] = useState(false);

  const handleShowComment = () => {
    setShowComments(prev => !prev);
  };

  const handleCreateComment = (content) => {
    if (!item) return;
    const reqData = {
      postId: item.id,
      data: {
        content,
      },
    };
    dispatch(createCommentAction(reqData)); // Ensure this updates the post list correctly
  };

  const handleLikePost = () => {
    if (!item) return;
    dispatch(likePostAction(item.id));
  };

  if (!item) {
    return <div>Loading...</div>;
  }

  const { user = {}, comments = [] } = item;
  const userName = `${user.firstName || 'Anonymous'} ${user.lastName || ''}`;
  const userHandle = `@${(user.firstName || '').toLowerCase()}_${(user.lastName || '').toLowerCase()}`;

  return (
    <Card>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">{user.firstName ? user.firstName[0] : 'U'}</Avatar>}
        action={<IconButton aria-label="settings"><MoreVertIcon /></IconButton>}
        title={userName}
        subheader={userHandle}
      />
      <img src={item.image} className="w-full h-[30rem] object-cover object-top" alt="" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item.caption || 'No caption available'}
        </Typography>
      </CardContent>
      <CardActions className="flex justify-between" disableSpacing>
        <div>
          <IconButton onClick={handleLikePost}>
            {isLikedByReqUser(auth?.user?.id, item) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          <IconButton><ShareIcon /></IconButton>
          <IconButton onClick={handleShowComment}><ChatBubbleIcon /></IconButton>
        </div>
        <div>
          <IconButton>{true ? <BookmarkIcon /> : <BookmarkBorderIcon />}</IconButton>
        </div>
      </CardActions>
      {showComments && (
        <section>
          <div className="flex items-center space-x-5 mx-3 my-5">
            <Avatar />
            <input
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleCreateComment(e.target.value);
                  e.target.value = ''; // Clear the input field after submission
                }
              }}
              className="w-full outline-none bg-transparent border border-[#3b4050] rounded-full px-4 py-2"
              placeholder="Write your comment"
              type="text"
            />
          </div>
          <Divider />
          <div className="mx-3 space-y-2 my-5 text-xs">
            {comments.map((comment, index) => (
              <div key={index} className="flex items-center space-x-5">
                <Avatar sx={{ height: "2rem", width: "2rem", fontSize: ".8rem" }}>{comment.user.firstName[0]}</Avatar>
                <p>{comment.content}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </Card>
  );
};

export default PostCard;
