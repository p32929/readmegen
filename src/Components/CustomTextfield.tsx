import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, TextFieldProps } from "@material-ui/core";
import { useSelector } from 'react-redux';
import { controller } from '../Others/StatesController';

interface Props {

}

const useStyles = makeStyles((theme) => ({
    // Define your styles here
}));

const CustomTextfield: React.FC<TextFieldProps> = (props) => {
    // Hooks
    const states = useSelector(() => controller.states);
    const classes = useStyles();

    return (
        <TextField style={{ marginTop: 12 }} variant='outlined' {...props} name={props.label?.toString().replaceAll(" ", "_").toLocaleLowerCase()} />
    )

}

export default CustomTextfield;