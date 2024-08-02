import { Avatar, Box, Button, Card, Tab, Tabs } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import PostCard from "../../components/Post/PostCard";
import UserReelsCard from "../../components/Reels/UserReelsCard";
import { useSelector } from "react-redux";
import ProfileModal from "./ProfileModal";

const tabs = [
  { value: "post", name: "Post" },
  { value: "reels", name: "Reels" },
  { value: "saved", name: "Saved" },
  { value: "repost", name: "Repost" },
];

const posts = [1, 1, 1, 1, 1];
const reels = [1, 1, 1, 1];
const savedPost = [1, 1, 1, 1];

const Profile = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpenProfileModal = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {auth} = useSelector(store=>store);
  const [value, setValue] = React.useState("post");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { id } = useParams();
  return (
    <Card className="my-10 w-[70%]">
      <div className="rounded-md ">
        <div className="h-[15rem]">
          <img
            className="w-full h-full rounded-t-md"
            src="https://cdn.pixabay.com/photo/2024/05/09/08/07/ai-generated-8750163_640.jpg"
            alt=""
          />
        </div>

        <div className="px-5 flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            sx={{ width: "10rem", height: "10rem" }}
            src="https://cdn.pixabay.com/photo/2022/03/12/07/29/dragon-7063555_640.png"
          />

          {true ? (
           
          <Button
          sx={{ borderRadius: "20px" }}
          variant="outlined"
          onClick={handleOpenProfileModal} // Open the modal on click
        >
          Edit profile
        </Button>
          ) : (
            <Button sx={{ borderRadius: "20px" }} variant="outlined">
              Follow
            </Button>
          )}
        </div>

        <div className="p-5">
          {/* <h1 className=""> {auth.user?.firstName+ " " + auth.user.lastname}</h1>
          <p>@`${auth.user?.firstName.toLowerCase()} ${auth.user?.lastname.toLowerCase()}`</p> */}
             <p className='py-1 font-bold text-xl'>{auth.user?.firstName + " " +auth.user?.lastName }</p>
             <p className='opacity-45'>@{auth.user?.firstName.toLowerCase() + " " +auth.user?.lastName.toLowerCase()  }</p>
          <div className="flex gap-5 items-center py-3">
            <span>41 post</span>
            <span>35 followers</span>
            <span>5 followings</span>
          </div>

          <div className="">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              amet velit adipisci esse dolor quod veniam eaque beatae molestiae
              vero a voluptate modi distinctio sunt deserunt consectetur, soluta
              repellendus? Temporibus.
            </p>
          </div>
        </div>

        <section>
          <Box sx={{ width: "100%", borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="wrapped label tabs example"
            >
              {tabs.map((item) => (
                <Tab value={item.value} label={item.name} wrapped />
              ))}
            </Tabs>
          </Box>

          <div className="flex justify-center">
            {value === "post" ? (
              <div className="space-y-5 w-[70%] my-10">
                {posts.map((item) => (
                  <div className="border rounded-md border-slate-100">
                    <PostCard />
                  </div>
                ))}
              </div>
            ) : value === "reels" ? (
              <div className="flex flex-wrap justify-center my-10 gap-2 ">
                {reels.map((item) => (
                  <UserReelsCard />
                ))}
              </div>
            ): value === "saved" ? <div className="space-y-5 w-[70%] my-10">
            {savedPost.map((item) => (
              <div className="border rounded-md border-slate-100">
                <PostCard />
              </div>
            ))}
          </div>  : (
              <div className="">Repost</div>
            )}
          </div>
        </section>
      </div>
      <section>
        <ProfileModal open={open} handleClose={handleClose}/>
      </section>
    </Card>
  );
};

export default Profile;
