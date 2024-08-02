import { Avatar, Card, IconButton } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import StoryCircle from "./StoryCircle";
import ImageIcon from "@mui/icons-material/Image";
import VideocamIcon from '@mui/icons-material/Videocam';
import ArticleIcon from '@mui/icons-material/Article';
import PostCard from "../Post/PostCard";
import CreatePostModal from "../CreatePost/CreatePostModal";

const story = [11, 1, 1, 1, 1];
const posts = [1,1,1,1,1]
const MiddlePart = () => {
const [OpenCreatePostModel,setOpenCreatePostModel] = useState(false)

const handleCloseCreatePostModal=()=>{
  setOpenCreatePostModel(false)
}

  const handleOpenCreatePostModel = () => {
    setOpenCreatePostModel(true);

    console.log("open post model");
  };

  return (
    <div className="px-20">
      {/* ----------story ------- */}
      <section className="py-5 flex items-center p-5 rounded-b-md">
        <div className="flex flex-col items-center mr-4 cursor-pointer">
          <Avatar
            sx={{ width: "5rem", height: "5rem" }}
            //src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295395_640.png"
          >
            <AddIcon sx={{ fontSize: "3rem" }} />
          </Avatar>
          <p>new</p>
        </div>
        {story.map((item) => (
          <StoryCircle />
        ))}
      </section>

      {/* ----------add post---- */}
      <Card className="p-5 mt-5">
        <div className="flex justify-between">
          <Avatar />
          <input
          onClick={handleOpenCreatePostModel}
            readOnly
            className="outline-none w-[90%] rounded-full px-5 bg-transparent border-[#3b4054] border"
            type="text"
          />
          </div>
          <div className="flex justify-center space-x-9 mt-5">
            <div className="flex items-center">
              <IconButton color="primary" onClick={handleOpenCreatePostModel}>
                <ImageIcon />
              </IconButton>

              <span>media</span>
            </div>

            <div className="flex items-center">
              <IconButton color="primary" onClick={handleOpenCreatePostModel}>
                <VideocamIcon />
              </IconButton>

              <span>video</span>
            </div>
            <div className="flex items-center">
              <IconButton color="primary" onClick={handleOpenCreatePostModel}>
                <ArticleIcon />
              </IconButton>

              <span>Article</span>
            </div>
        </div>
      </Card>

      <div className="pt-5 space-y-5">

        {posts.map((item)=> <PostCard/>)}
         
      </div>

      <div className="">
        <CreatePostModal handleClose={handleCloseCreatePostModal} open={OpenCreatePostModel}/>

      </div>
    </div>
  );
};

export default MiddlePart;
