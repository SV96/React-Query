import React, { useEffect } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";

const CachedQuery = () => {
  const queryClient = useQueryClient();
  const cacheData = queryClient.getQueryData(["products"]);
  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, []);
  return (
    <>
      {" "}
      <p>Fetching data from REACT-QUERY CLINET</p>
      <Grid container spacing={2}>
        {cacheData &&
          cacheData.map((value) => {
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
    </>
  );
};

export default CachedQuery;
