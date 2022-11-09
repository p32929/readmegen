import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField } from "@material-ui/core";
import { useSelector } from 'react-redux';
import { controller } from '../Others/StatesController';

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

    return (
        <Grid container direction='column'>
            <TextField label="Title" />
            <TextField label="Descriptions" />
        </Grid>
    )

}

export default TitleDescriptions;