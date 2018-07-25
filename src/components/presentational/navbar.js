import React from 'react';
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';
import styles from '../../styles/appstyles';

const Navbar = (props) => {
    const { classes } = props;
    return (
        <AppBar className={classes.root}>
            <Toolbar>
                <Typography variant="title" color="inherit">News API</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default withStyles(styles.appbar)(Navbar);