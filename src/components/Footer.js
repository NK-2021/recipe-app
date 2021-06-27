import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    footer:{
        backgroundColor: theme.palette.background.paper,
        padding: '50px'
    }
  
  }));

const Footer = () => {
    const classes = useStyles();
    return (
        <div>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>Demo Recipie Site</Typography>
                <Typography variant="subtitle1" align="center" gutterBottom>Work In Progress</Typography>
            </footer>
        </div>
    )
}

export default Footer
