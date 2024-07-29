import React from 'react'
import Grid from '@mui/material/Grid';
import { Card } from '@mui/material';
import Login from './Login';
import Register from './Register';

const Authentication = () => {
  return (
    <div>
        <Grid container>
    <Grid className='h-screen  overflow-hidden' item xs={7}>
    <img className='w-full h-full' src="https://cdn.pixabay.com/photo/2023/07/12/19/01/ai-generated-8123097_640.png" alt="" />


    </Grid>
    <Grid item xs={5}>
    <div className="px-20 flex flex-col justify-center h-full">
    <Card className="cart p-8">

        <div className=" flex flex-col items-center mb-5 space-y-1">
        <h1 className='logo text-center'>Abhi Social</h1>
        <p className=' text-center text-sm w-[70%]'>Connecting Lives, Sharing stories : your socis world</p>

        </div>

        {/* <Login/> */}
        <Register/>
 



    </Card>


    </div>
        
    
    </Grid>


        </Grid>



    </div>
  )
}

export default Authentication