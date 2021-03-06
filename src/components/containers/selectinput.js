import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import SelectBox from '../presentational/selectbox';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Spinner from 'react-spinkit';
import { createSelector } from 'reselect';


class SelectInputs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sel_category: '',
            sel_source: '',
            sel_type: 'top-headlines'
        }
    }

    componentWillMount() {
        this.props.getCategories();
    }

    handleCategoryChange = (category) => {
        this.setState({
            sel_category: category
        })
        this.props.getSources(category);
    }

    handleSourceChange = (value) => {
        this.setState({
            sel_source: value,
            sel_type: 'top-headlines'
        })
        this.props.getNews(value);
    }

    handleTypeChange = (value) => {
        this.setState({
            sel_type: value
        });
        this.props.getNews(this.state.sel_source, value)
    }

    render() {
        console.log(this.props);
        return (
            <Grid container spacing={16} justify="space-around">
                <Grid item>
                    {
                        this.props.category_loading &&
                        <Spinner fadeIn="none" name="ball-clip-rotate"></Spinner>
                    }{
                        !this.props.category_loading &&
                        <SelectBox loadState={this.props.category_loading}
                            options={this.props.categories}
                            onChangeInput={this.handleCategoryChange}
                            label="Category" value={this.state.sel_category}
                            helperText="Please select a category." />
                    }
                </Grid>
                <Grid item>
                    {
                        this.props.sources_loading &&
                        <Spinner fadeIn="none" name="ball-clip-rotate"></Spinner>
                    }{
                        !this.props.sources_loading &&
                        <SelectBox
                            options={this.props.sources}
                            onChangeInput={this.handleSourceChange} value={this.state.sel_source}
                            label="Sources" helperText="Please select a source." />
                    }
                </Grid>

                {
                    this.state.sel_source !== '' &&
                    <Grid item>
                        <SelectBox
                            options={['top-headlines', 'everything']}
                            onChangeInput={this.handleTypeChange} value={this.state.sel_type}
                            label="Type" helperText="Select a type." />
                    </Grid>
                }
            </Grid>
        )
    }
}

const categories = state => state.get('categories');

const sources = state => state.get('sources');

const optionsSelector = createSelector([categories, sources], (categories, sources) => {
    return {
        categories: categories.get('categories'),
        category_loading: categories.get('loading'),
        category_error: categories.get('errorLoading'),
        sources: sources.get('sources'),
        sources_loading: sources.get('loading'),
        sources_error: sources.get('errorLoading')
    }
})

// function mapOptions(state) {
//     return { categories: state.get('categories'), sources: state.get('sources') };
// }

export default connect(optionsSelector, actions)(SelectInputs);