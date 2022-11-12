import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Grid, IconButton, Toolbar, Tooltip, Typography } from "@material-ui/core";
import { useSelector } from 'react-redux';
import { controller } from './Others/StatesController';
import SvgIconRenderer from './Components/SvgIconRenderer';
import { IconPaths } from './Others/IconPaths';
import FullWidthPaper from './Components/FullWidthPaper';
import AddDialog from './Dialogs/AddDialog';
import { IElementTypes } from './Others/GlobalVars';
import TitleDescriptions from './Forms/TitleDescriptions';
import Outputs from './Components/Outputs';
import ImageOrLogo from './Forms/ImageOrLogo';

interface Props {

}

const useStyles = makeStyles((theme) => ({
  // Define your styles here
}));

const App: React.FC<Props> = (props) => {
  // Hooks
  const states = useSelector(() => controller.states);
  const classes = useStyles();

  // Funcs

  // Vars
  const iconButtons = [
    {
      icon: IconPaths.history,
      tooltip: "History",
      onClick: () => {

      }
    },
    {
      icon: IconPaths.plus,
      tooltip: "Add",
      onClick: () => {
        controller.setState({
          isAdderDialogShowing: true
        })
      }
    }
  ]

  const getDividedContentStyle = (type: 'L' | 'R'): React.CSSProperties => {
    const dividedContentStyle = {
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
      paddingBottom: 16,
    }
    if (type === "L") {
      dividedContentStyle.paddingRight = 8
    }
    else {
      dividedContentStyle.paddingLeft = 8
    }

    return {
      ...dividedContentStyle,
      width: (window.innerWidth / 2) - (dividedContentStyle.paddingLeft + dividedContentStyle.paddingRight),
      maxWidth: (window.innerWidth / 2) - (dividedContentStyle.paddingLeft + dividedContentStyle.paddingRight),
      minWidth: (window.innerWidth / 2) - (dividedContentStyle.paddingLeft + dividedContentStyle.paddingRight),
    }
  }

  return (
    <Grid container direction='column'>
      <AppBar position='sticky'>
        <Toolbar>
          <Typography variant='body1' style={{ flex: 1 }}>ReadmeGen</Typography>

          {
            iconButtons.map((item, index) => {
              return <Tooltip arrow title={item.tooltip}>
                <IconButton onClick={item.onClick}>
                  <SvgIconRenderer path={item.icon} />
                </IconButton>
              </Tooltip>
            })
          }

        </Toolbar>
      </AppBar>

      <AddDialog />

      <Grid container direction='row'>
        <Grid item xs={6} style={getDividedContentStyle("L")}>
          {
            states.elements.map((item, index) => {
              if (item.name === 'Title and Descriptions') {
                return <TitleDescriptions index={index} />
              }
              else if (item.name === 'Image or Logo') {
                return <ImageOrLogo index={index} />
              }

              else {
                return "1"
              }
            })
          }
        </Grid>
        <Grid id='outputdiv' item xs={6} style={getDividedContentStyle("R")}>
          <Outputs />
        </Grid>
      </Grid>

    </Grid>
  )

}

export default App;