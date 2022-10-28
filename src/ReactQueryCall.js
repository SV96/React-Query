import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  CircularProgress,
  Box,
} from "@mui/material";
import "./main.scss";
import { useNavigate } from "react-router-dom";
// ***************** USING REACT QUERY ********************** //
export const fetchProducts = async () => {
  //   console.log('Fetching products')
  const response = await axios.get("https://fakestoreapi.com/products");
  const products = response.data;
  //   console.log('Products: ', products)
  return products;
};

const ReactQueryCall = () => {
  const { isError, isSuccess, isLoading, data, error } = useQuery(
    ["products"],
    fetchProducts,
    { staleTime: 3000 }
  );
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Component mount");
    return console.log("Component unmounted");
  }, []);

  if (isLoading)
    return (
      <Box className="progressBarBox">
        <CircularProgress size={550} />
      </Box>
    );
  if (isError) return <p>{error}</p>;

  if (isSuccess)
    return (
      <>
        <Grid container spacing={2}>
          {data &&
            data.map((value) => {
              return (
                <Grid item md={6} lg={3}>
                  <Card sx={{ height: "100%" }}>
                    <CardMedia
                      component="img"
                      image={value.image}
                      alt="green iguana"
                      className="productImg"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {value.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {value.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">{value.category}</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
        <div>
          <p>Data taken from cache to display</p>
          <Button onClick={() => navigate("/react-query-cache")}>
            Cached Data
          </Button>
        </div>
      </>
    );
};

export default ReactQueryCall;
