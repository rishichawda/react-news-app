import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, Input, withStyles, FormHelperText } from '@material-ui/core';
import styles from '../../styles/appstyles';

const SelectBox = (props) => {

    function handleChange (e) {
        props.onChangeInput(e.target.value);
    }

    const { classes } = props;

    return (
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor="cat-helper">{props.label}</InputLabel>
            <Select
            value={props.value}
            onChange={handleChange}
            input={<Input name={props.label} id="cat-helper" />}
            >
            { props.options.map( item => <MenuItem key={item} value={item}>{item}</MenuItem>)}
            </Select>
            <FormHelperText>{props.helperText}</FormHelperText>
        </FormControl>
    )
}


export default withStyles(styles.selectbox)(SelectBox);