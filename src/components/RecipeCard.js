import React from 'react';
import { CssBaseline, Typography, AppBar, Toolbar, Grid, Container, Card, CardActions, CardContent, CardMedia, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    cardGrid:{
        padding: '20px 0'
    },
    card:{
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia:{
      paddingTop: '56.25%'
    },
    cardContent:{
      flexGrow: 1,
    },
    footer:{
        backgroundColor: theme.palette.background.paper,
        padding: '50px'
    }
  
  }));

const RecipeCard = ({name, image, cuisineType, dishType, calories}) => {
    const classes = useStyles();
    const truncateText = name.length
    return (
        <div>
            <Card className={classes.card}>
            <CardMedia className={classes.cardMedia}
            image={image}
            title={name}
            ></CardMedia>
            <CardContent className={classes.cardContent}>
                <Typography variant="h5" gutterBottom style={{
                    display: 'block',
                    width: '200px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}>
                    {name}
                </Typography>
                <Typography >
                    {cuisineType}, {dishType}
                </Typography>
            </CardContent>
            {/* <CardActions>
              <Button size="small" color="primary">View</Button>
              <Button size="small" color="primary">Edit</Button>
            </CardActions> */}
          </Card>
        </div>
    )
}

export default RecipeCard
