import React, { Component } from 'react';
// import logo from './logo.svg';
import '../styles/App.css';
import { Grid } from '@material-ui/core';
import Navbar from './presentational/navbar';
import NewsContainer from './presentational/newscontainer';

class App extends Component {
  render() {
    return (
      <Grid container>
        <Navbar />
        <NewsContainer />
      </Grid>
    );
  }
}

export default App;
