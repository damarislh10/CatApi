import { Card, CardActionArea, CardMedia, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  })

export const CatCard = ({ cat }) => {
    const classes = useStyles();
  console.log(cat);
  return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={cat.url}
            title="Contemplative Reptile"
          />
        </CardActionArea>
      </Card>
  );
};
