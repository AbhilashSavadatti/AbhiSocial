import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar, Card, CardHeader, IconButton } from '@mui/material'
import React from 'react'

const UserChatCard = () => {
  return (
    <Card>
        <CardHeader 
    avatar  = {
        <Avatar sx={{width:"3.5rem" , height:"3.5rem", fontSize:"1.5rem", bgcolor:"#191C29", color:"rgb(88,199,250)" }} src='https://cdn.pixabay.com/photo/2024/08/01/14/40/animal-8937356_640.jpg'/>
    }
    action={
        <IconButton>
            <MoreHorizIcon/>
        </IconButton>
    }
    title="Abhilash"
    subheader={"new message"}
    >
        
    </CardHeader>
        </Card>
    
  )
}

export default UserChatCard