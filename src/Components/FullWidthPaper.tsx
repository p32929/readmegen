import React from 'react'
import { Grid, GridDirection, GridJustification, Paper } from "@material-ui/core";

interface Props {
    direction?: GridDirection,
    justifyContent?: GridJustification,
    style?: React.CSSProperties,
    children: React.ReactNode,
    withoutInnerGrid?: boolean,
    innerPadding?: number
}

const FullWidthPaper: React.FC<Props> = (props) => {
    // Hooks

    // Funcs

    // Vars
    const { children, style, direction, justifyContent, withoutInnerGrid, innerPadding = 16 } = props

    // JSX
    return (
        <Grid container style={style}>
            <Paper style={{ width: "100%", padding: innerPadding }}>
                {
                    withoutInnerGrid === true ? children : <Grid container direction={direction} justifyContent={justifyContent}>
                        {children}
                    </Grid>
                }
            </Paper>
        </Grid >

    )

}

export default FullWidthPaper;