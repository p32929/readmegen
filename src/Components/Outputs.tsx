import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import { useSelector } from 'react-redux';
import FullWidthPaper from './FullWidthPaper';
import { controller } from '../Others/StatesController';

interface Props {

}

const useStyles = makeStyles((theme) => ({
    // Define your styles here
}));

const Outputs: React.FC<Props> = (props) => {
    // Hooks
    const states = useSelector(() => controller.states);
    const classes = useStyles();

    // Funcs

    // Vars

    // JSX

    return (
        <FullWidthPaper direction='column'>
            
        </FullWidthPaper>
    )

}

export default Outputs;