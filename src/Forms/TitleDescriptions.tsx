import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Typography } from "@material-ui/core";
import { useSelector } from 'react-redux';
import { controller } from '../Others/StatesController';
import FullWidthPaper from '../Components/FullWidthPaper';
import CustomTextfield from '../Components/CustomTextfield';
import { IInputElemProps, OnChangeType } from '../Others/GlobalVars';

const useStyles = makeStyles((theme) => ({
    // Define your styles here
}));

const TitleDescriptions: React.FC<IInputElemProps> = (props) => {
    // Hooks
    const states = useSelector(() => controller.states);
    const classes = useStyles();

    const onChange: OnChangeType = (e) => {
        controller.setElementValue(props.index, e.target.name, e.target.value)
    }

    return (
        <FullWidthPaper direction='column'>
            <Typography variant='h6'>{states.elements[props.index].name}</Typography>

            <CustomTextfield onChange={onChange} label="Title" />
            <CustomTextfield onChange={onChange} label="Descriptions" />
        </FullWidthPaper>
    )

}

export default TitleDescriptions;