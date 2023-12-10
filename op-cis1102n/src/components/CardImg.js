import React from 'react'
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia
} from '@mui/material';
import { Outlet } from "react-router-dom";
const CardImg = (props) => {
  const wid = props.width;
  return (
    <>
      <Box sx={{maxWidth:1000, p:"10px",m:"auto"}}>
        <Card sx={{borderRadius:"20px"}}>
          <CardContent sx={{ fontSize: 20, backgroundColor: '#d9d9d9', display:"flex"}}>
            <Typography variant='h5' sx={{p:1, m:2}}>
              {props.title}
            </Typography>
            <Typography sx={{p:2, width:{wid}}}>
              <CardMedia
                component="img"
                height={300}
                image={props.img}
              />
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Outlet/>
    </>
  )
}

export default CardImg