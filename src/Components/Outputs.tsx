import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import { useSelector } from 'react-redux';
import FullWidthPaper from './FullWidthPaper';
import { controller } from '../Others/StatesController';
import ReactMarkdown from 'react-markdown';

interface Props {

}

const useStyles = makeStyles((theme) => ({
    // Define your styles here
}));

const Outputs: React.FC<Props> = (props) => {
    // Hooks
    const states = useSelector(() => controller.states);
    const classes = useStyles();

    const getMdTexts = () => {
        const finalStr = ""
        for (var i = 0; i < states.elements.length; i++) {
            switch(states.elements[i].name) {
                case "Title and Descriptions":
                    return "# HH"
            }
        }

        return finalStr
    }

    return (
        <FullWidthPaper direction='column'>
            <ReactMarkdown>{getMdTexts()}</ReactMarkdown>
        </FullWidthPaper>
    )

}

export default Outputs;