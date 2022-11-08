import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Grid, Toolbar, Typography } from "@material-ui/core";
import { useSelector } from 'react-redux';
import { controller } from './Others/StatesController';

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
      <AppBar>
        <Toolbar>
          <Typography>ReadmeGen</Typography>
        </Toolbar>
      </AppBar>

      

    </Grid>
  )

}

export default App;