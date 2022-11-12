import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import { useSelector } from 'react-redux';
import FullWidthPaper from './FullWidthPaper';
import { controller, IElement } from '../Others/StatesController';
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

    const getTitleDescriptions = (elem: IElement) => {
        return `## ${elem.data['title']}\n ${elem.data['descriptions']}`
    }

    const getMdTexts = () => {
        let finalStr = ""
        for (var i = 0; i < states.elements.length; i++) {
            switch (states.elements[i].name) {
                case "Title and Descriptions":
                    finalStr += getTitleDescriptions(states.elements[i])
            }
        }

        return finalStr
    }

    return (
        <FullWidthPaper direction='column' style={{
            marginBlockStart: "0px",
            marginBlockEnd: "0px",
            marginInlineStart: "0px",
            marginInlineEnd: "0px"
        }}>
            <ReactMarkdown className='idk'>{getMdTexts()}</ReactMarkdown>
        </FullWidthPaper>
    )

}

export default Outputs;