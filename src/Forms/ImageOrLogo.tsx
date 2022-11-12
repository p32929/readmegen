import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from "@material-ui/core";
import { useSelector } from 'react-redux';
import CustomTextfield from '../Components/CustomTextfield';
import FullWidthPaper from '../Components/FullWidthPaper';
import { IInputElemProps, OnChangeType } from '../Others/GlobalVars';
import { controller } from '../Others/StatesController';

interface Props {

}

const useStyles = makeStyles((theme) => ({
    // Define your styles here
}));

const ImageOrLogo: React.FC<IInputElemProps> = (props) => {
    // Hooks
    const states = useSelector(() => controller.states);
    const classes = useStyles();

    const onChange: OnChangeType = (e) => {
        controller.setElementValue(props.index, e.target.name, e.target.value)
    }

    return (
        <FullWidthPaper direction='column'>
            <Typography variant='h6'>Enter an {states.elements[props.index].name} URL</Typography>
            <CustomTextfield onChange={onChange} label="Image" />
        </FullWidthPaper>
    )

}

export default ImageOrLogo;