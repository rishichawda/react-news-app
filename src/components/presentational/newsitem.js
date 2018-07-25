import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import classNames from "classnames";
import defaultImage from '../../resources/default.png';
import styles from '../../styles/appstyles';

const NewsItem = (props) => {
  const { classes } = props;
  return (
    <Card className={classNames(classes.card, 'animated zoomIn')}>
      <CardMedia
        className={classes.media}
        image={props.article.urlToImage || defaultImage}
        title={props.article.title}
      />
      <CardContent>
        <Typography variant="caption" gutterBottom noWrap>
          <a href={props.article.url}>{props.article.url}</a>
        </Typography>
        <Typography className={classes.title} variant="subheading">
          {props.article.title}
        </Typography>
        <Typography className={classes.description}>
          {props.article.description || "No description provided"}
        </Typography>
      </CardContent>
    </Card>
  );
}

NewsItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles.newsitem)(NewsItem);
