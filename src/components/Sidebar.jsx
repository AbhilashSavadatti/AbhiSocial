import React from 'react'
import { navigationMenu } from './Sidebar/SidebarNavigation'
import { Avatar, Button, Card, Divider, Menu, MenuItem } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Sidebar() {
  
const {auth} = useSelector(store=>store);
const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate=(item)=>{

    if(item.title=="Profile")
      navigate(`/profile/${auth.user?.id}`)


  }

  return (
    <Card className=' pb-2 pt-3 card h-[690px] flex flex-col justify-between'>

    <div className="space-y-8 pl-5"></div>

    <div className="">

    <span className='logo font-bold text-xl pl-5'>Abhi Social</span>


    </div>

        {/* -------side barr------ */}
    <div className="space-y-8 pl-5 ">

      {navigationMenu.map((item)=>
      <div onClick={()=>handleNavigate(item)} className='cursor-pointer flex space-x-3 items-center'>
        {item.icon}
        <p className='text-xl'>{item.title}</p>
      </div>
      )}
    </div>

      <div className="">

        <Divider/>
        <div className="pl-5 flex items-center justify-between pt-5 ">

        <div className="flex items-center space-x-3">

          <Avatar src="https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295431_640.png" />

          <div className="">
            <p className='font-bold'>{auth.user?.firstName + " " +auth.user?.lastName }</p>
            <p className='opacity-45'>@{auth.user?.firstName.toLowerCase() + " " +auth.user?.lastName.toLowerCase()  }</p>
          </div>
        </div>
        <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon/>
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>Logout</MenuItem>
        
      </Menu>
        </div>
      </div>


    </Card>
  )
}

export default Sidebar