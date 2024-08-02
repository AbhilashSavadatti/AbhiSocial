import { Box, Modal, Typography } from '@mui/material'
import React from 'react'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
   
    boxShadow: 24,
    p: 4,
    borerRadius : ".6rem",
    outline: "none"
  };

const CreatePostModal = ({handleClose,open}) => {
  return (
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      
    </Box>
  </Modal>
  )
}

export default CreatePostModal