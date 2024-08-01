import { Avatar } from '@mui/material'
import React from 'react'
import AddIcon from "@mui/icons-material/Add";

const StoryCircle = () => {
  return (
    <div>
        <div  className="flex flex-col items-center mr-4 cursor-pointer">
        <Avatar
          sx={{ width: "5rem", height: "5rem" }}
          src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295395_640.png"
          
        >
          <AddIcon sx={{ fontSize: "3rem" }} />
        </Avatar>
        <p>Abhilash</p>

        </div>




    </div>
  )
}

export default StoryCircle