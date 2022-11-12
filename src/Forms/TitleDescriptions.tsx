import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Typography } from "@material-ui/core";
import { useSelector } from 'react-redux';
import { controller } from '../Others/StatesController';
import FullWidthPaper from '../Components/FullWidthPaper';
import CustomTextfield from '../Components/CustomTextfield';

interface Props {
    index: number,
}

const useStyles = makeStyles((theme) => ({
    // Define your styles here
}));

const TitleDescriptions: React.FC<Props> = (props) => {
    // Hooks
    const states = useSelector(() => controller.states);
    const classes = useStyles();
    type OnChangeType = React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>

    const onChange: OnChangeType = (e) => {
        // console.log(e.target.name)
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