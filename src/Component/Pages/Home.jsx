import React from 'react'
import Sidenav from '../Sidenav'
import Navbar from '../Navbar'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import "./Css/Home.css"
import StoreIcon from '@mui/icons-material/Store';

export const Home = () => {
  return (
    <>
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack spacing={2} direction="row" >
                <Card sx={{ minWidth: 49 + "%" , height: 140 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      $ 400.00
                    </Typography>
                  </CardContent>
                </Card>
               <Card sx={{ minWidth: 49 + "%" , height: 140 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      $ 700.00
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
              <Card sx={{ maxWidth: 345 }}>
                  <Stack spacing={2} direction="row">
                  <div className="iconstyle">
                  <StoreIcon />
                  </div>
                    <div className="padding">
                      <span className='pricetitle'>$: 200k</span> 
                      <br />
                      <span className='pricesubtitle'>Total Income</span>
                    </div>
                    </Stack> 
                </Card>
                <Card sx={{ maxWidth: 345 }}>  
                  <Stack spacing={2} direction="row">
                  <div className="iconstyle">
                  <StoreIcon />
                  </div>
                    <div className="padding">
                      <span className='pricetitle'>$: 200k</span> 
                      <br />
                      <span className='pricesubtitle'>Total Income</span>
                    </div>
                    </Stack>
                </Card>
              </Stack>
            </Grid>
          </Grid>
          <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
               <Card sx={{ height:60 + "vh" }}>
                  <CardContent></CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
               <Card sx={{ height:60 + "vh" }}>
                  <CardContent></CardContent>
                 </Card>
            </Grid>
          </Grid> 
        </Box>
      </Box>
    </>
  )
}
