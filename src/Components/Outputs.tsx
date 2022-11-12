import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import { useSelector } from 'react-redux';
import FullWidthPaper from './FullWidthPaper';
import { controller, IElement } from '../Others/StatesController';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'

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
        let finalStrs = []
        if (elem.data['title']) {
            finalStrs.push(`## ${elem.data['title']}`)
        }
        if (elem.data['descriptions']) {
            finalStrs.push(`${elem.data['descriptions']}`)
        }
        return finalStrs.join("\n")
    }

    const getImageOrLogo = (elem: IElement) => {
        let finalStrs = []
        if (elem.data['image']) {
            finalStrs.push(`![LOGO](${elem.data['image']})`)
            // finalStrs.push(`
            // <img src="${elem.data['image']}"/>
            // `)
        }
        return finalStrs.join("\n")
    }

    const getMdTexts = () => {
        let finalStrs = []
        for (var i = 0; i < states.elements.length; i++) {
            switch (states.elements[i].name) {
                case "Title and Descriptions":
                    finalStrs.push(getTitleDescriptions(states.elements[i]))
                    break

                case 'Image or Logo':
                    finalStrs.push(getImageOrLogo(states.elements[i]))
                    break
            }
        }

        return finalStrs.join("\n")
    }

    return (
        <FullWidthPaper direction='column'>
            <ReactMarkdown className='idk'>{getMdTexts()}</ReactMarkdown>
        </FullWidthPaper>
    )

}

export default Outputs;