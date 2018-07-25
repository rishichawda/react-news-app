import React from "react";
import { Grid, withStyles } from "@material-ui/core";
import { PropTypes } from "prop-types";
import NewsItem from "./newsitem";
import Spinner from "react-spinkit";
import { connect } from 'react-redux';
import styles from "../../styles/appstyles";

const NewsSection = (props) => {
    const {classes} = props;
    
    function generateList() {
        return props.news.get('news').map( (article,index) => <Grid item xs={4} key={article+index} ><NewsItem article={article}/></Grid> )
    }
    
    return (
        <Grid className={classes.newslist} container justify="center" spacing={24}>
            <Grid item xs={9}>
                {
                    props.news.get('loading') && !props.news.get('errorLoading') && <Spinner name="ball-spin-fade-loader" fadeIn="none"></Spinner>
                }
                        <Grid container spacing={40}>
                    {
                        !props.news.get('loading') && 
                        props.news.get('news').size >=0 && generateList()
                    }
                    {
                        props.news.get('errorLoading') && 'Error fetching news. Please try again.'
                    }
                    </Grid>
            </Grid>
        </Grid>
    )
}

NewsSection.propTypes = {
    classes: PropTypes.object.isRequired
}

function mapstate(state) {
    return {news: state.get('news')};    
}

export default connect(mapstate, null)(withStyles(styles.newssection)(NewsSection));