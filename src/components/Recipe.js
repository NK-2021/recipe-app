import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

const RecipeReviewCard = ({key, name, image, cuisineType, dishType, calories}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title={name}
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {cuisineType}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default RecipeReviewCard;
