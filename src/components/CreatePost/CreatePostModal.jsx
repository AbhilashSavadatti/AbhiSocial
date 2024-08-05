import {
    Avatar,
    Backdrop,
    Box,
    Button,
    CircularProgress,
    IconButton,
    Modal,
    Typography,
  } from "@mui/material";
  import { Formik, useFormik } from "formik";
  import React, { useState } from "react";
  import ImageIcon from "@mui/icons-material/Image";
  import VideocamIcon from '@mui/icons-material/Videocam';
  import VideoCallIcon from "@mui/icons-material/VideoCall";
  import { uploadToCloudinary } from "../../utils/uploadToCloudniry";
import { useDispatch } from "react-redux";
import { createCommentAction, createPostAction } from "../../Redux/Post/post.action";
  
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: ".6rem", 
    outline: "none",
  };
  
  const CreatePostModal = ({ handleClose, open }) => {
    const [selectedImage, setSelectedImage] = useState();
    const [selectedVideo, setSelectedVideo] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch() 
  
    const handleSelectImage = async (event) => {
      setIsLoading(true);
      const imageUrl = await uploadToCloudinary(event.target.files[0], "image");
  
      setSelectedImage(imageUrl);
      setIsLoading(false);
      formik.setFieldValue("image", imageUrl);
    };
  
    const handleSelectVideo = async (event) => {
      setIsLoading(true);
      const videoUrl = await uploadToCloudinary(event.target.files[0], "video");
  
      setSelectedVideo(videoUrl);
      setIsLoading(false);
      formik.setFieldValue("video", videoUrl);
    };
  
    const formik = useFormik({
      initialValues: {
        caption: "",
        image: "",
        video: "",
      },
      onSubmit: (values) => {
        console.log("formik values", values);
        dispatch(createPostAction(values))
        handleClose(); 
      },
    });


   
    return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex space-x-4 items-center">
              <Avatar />
              <div className="">
                <p className="font-bold text-lg">Abhilash</p>
                <p className="text-sm">@Abhilash</p>
              </div>
            </div>
            <textarea
              className="outline-none w-full mt-5 p-2 bg-transparent border border-[#3b4054] rounded-sm"
              placeholder="write caption"
              onChange={formik.handleChange}
              value={formik.values.caption}
              rows="4"
              name="caption"
              id=""
            ></textarea>
            <div className="flex space-x-5 mt-5">
              <div className="flex flex-col items-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleSelectImage}
                  style={{ display: "none" }}
                  id="image-input"
                />
                <label htmlFor="image-input">
                  <IconButton color="primary" component="span">
                    <ImageIcon />
                  </IconButton>
                </label>
                <span>Image</span>
                {selectedImage && (
                  <img
                    className="mt-2 h-[10rem] w-auto object-cover"
                    src={selectedImage}
                    alt="Selected"
                  />
                )}
              </div>
              <div className="flex flex-col mt-0 pt-0 ">
  <input
    type="file"
    accept="video/*"
    onChange={handleSelectVideo}
    style={{ display: "none" }}
    id="video-input"
  />
  <label htmlFor="video-input" className="" >
    <IconButton color="primary" component="span">
      <VideocamIcon /> {/* Increase icon size */}
    </IconButton>
  </label>
  <span>Video</span>
  {selectedVideo && (
    <video
      className="mt-2 h-[10rem] w-auto object-cover"
      src={selectedVideo}
      controls
      alt="Selected"
    />
  )}
</div>

            </div>
            <div className="flex w-full justify-end mt-5">
              <Button
                variant="contained"
                type="submit"
                sx={{ borderRadius: "1.5rem" }}
              >
                Post
              </Button>
            </div>
          </form>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
            onClick={handleClose}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </Box>
      </Modal>
    );
  };
  
  export default CreatePostModal;
  