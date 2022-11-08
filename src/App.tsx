import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@material-ui/core";
import { useSelector } from 'react-redux';
import { controller } from './Others/StatesController';
import SvgIconRenderer from './Components/SvgIconRenderer';
import { IconPaths } from './Others/IconPaths';
import FullWidthPaper from './Components/FullWidthPaper';
import AddDialog from './Dialogs/AddDialog';

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

  // JSX

  return (
    <Grid container direction='column'>
      <AppBar position='sticky'>
        <Toolbar>
          <Typography variant='body1' style={{ flex: 1 }}>ReadmeGen</Typography>

          <IconButton>
            <SvgIconRenderer path={IconPaths.history} />
          </IconButton>
          <IconButton>
            <SvgIconRenderer path={IconPaths.plus} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <AddDialog />

      <Grid container direction='row'>
        <Grid container item xs style={{ paddingLeft: 16, paddingRight: 8, paddingTop: 16, paddingBottom: 16 }}>
          <FullWidthPaper>
            HELLO
          </FullWidthPaper>
        </Grid>

        <Grid container item xs style={{ paddingLeft: 8, paddingRight: 16, paddingTop: 16, paddingBottom: 16 }}>
          <FullWidthPaper>
            HELLO
          </FullWidthPaper>
        </Grid>
      </Grid>

    </Grid>
  )

}

export default App;