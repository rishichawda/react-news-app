import React from "react";
import { Grid, withStyles } from "@material-ui/core";
import { PropTypes } from "prop-types";
import NewsItem from "./newsitem";
import Spinner from "react-spinkit";
import { connect } from 'react-redux';
import styles from "../../styles/appstyles"; import { createSelector } from "reselect";
import { Map } from "immutable";

const NewsSection = (props) => {
    const { classes } = props;

    function generateList() {
        return props.news.map((article, index) => <Grid item xs={4} key={article + index} ><NewsItem article={article} /></Grid>)
    }

    return (
        <Grid className={classes.newslist} container justify="center" spacing={24}>
            <Grid item xs={9}>
                {
                    props.loading && !props.errorLoading && <Spinner name="ball-spin-fade-loader" fadeIn="none"></Spinner>
                }
                <Grid container spacing={40}>
                    {
                        !props.loading &&
                        props.news.size >= 0 && generateList()
                    }
                    {
                        props.errorLoading && 'Error fetching news. Please try again.'
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}

NewsSection.propTypes = {
    classes: PropTypes.object.isRequired
}

const news = (state) => state.get('news').get('news');

const loading = (state) => state.get('news').get('loading');

const errorLoading = (state) => state.get('news').get('errorLoading');

const newsSelector = createSelector([news, loading, errorLoading], (news, loading, errorLoading) => {
    return {
        news,
        loading,
        errorLoading
    }
})

// function mapstate(state) {
//     return { news: state.get('news') };
// }

export default connect(newsSelector, null)(withStyles(styles.newssection)(NewsSection));