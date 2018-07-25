import React from 'react';
import { Grid, withStyles } from '@material-ui/core';
import SelectInputs from '../containers/selectinput';
import styles from '../../styles/appstyles';
import NewsSection from './newssection';

const NewsContainer = (props) => {

    const { classes } = props;
    return (
        <Grid container spacing={16} justify="center" className={classes.newscontainer}>
            <Grid item xs={12}>
                <SelectInputs />
            </Grid>
            <Grid item>
                <NewsSection />
            </Grid>
        </Grid>
    )
}

export default withStyles(styles.newscontainer)(NewsContainer);