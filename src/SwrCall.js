import React from 'react'
import useSWR from 'swr'
import axios from 'axios'
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Grid,
    CircularProgress,
    Box
  } from '@mui/material'
  import './main.scss';
  
  

export const fetcher = async (...args) => {
  const response = await axios.get(...args)
  const products = response.data
  return products
}

const SwrCall = () => {
  const { data, isLoading, error } = useSWR('https://fakestoreapi.com/products', fetcher)
  if (isLoading) return <Box className='progressBarBox'><CircularProgress size={550} /></Box> 
  if (error) return <p>{error}</p>
  return (
    <>
      <Grid container spacing={2}>
        {data && data.map((value) => {
          return (
            <Grid item md={6} lg={3} key={value.id}>
              <Card sx={{height:'100%'}}>
                <CardMedia
                  component='img'
                  image={value.image}
                  alt='green iguana'
                  className='productImg'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    {value.title}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {value.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size='small'>{value.category}</Button>
                  <Button size='small'>Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default SwrCall
