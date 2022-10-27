import React, { useEffect, useState } from "react";
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

const ReactCall = () => {
  const [productData, setProductData] = useState({});
  const [pageLoad, setPageLoad] = useState(true);
  const [error, setError] = useState("");
  console.log("Render");

  const fetchProductData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProductData(res.data);
        setPageLoad(false);
      })
      .catch((err) => {
        setError(err.toString());
        setPageLoad(false);
      });
  };
  console.log("component rended");
  useEffect(() => {
    console.log("Component mount");
    fetchProductData();
    return console.log("Component unmounted");
  }, []);

  if (pageLoad)
    return (
      <Box className="progressBarBox">
        <CircularProgress size={550} />
      </Box>
    );
  if (error !== "") return <p>{error}</p>;

  return (
    <>
      <Grid container spacing={2}>
        {productData.map((value) => {
          return (
            <Grid item md={6} lg={3} key={value.id}>
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
    </>
  );
};

export default ReactCall;
