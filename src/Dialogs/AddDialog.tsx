import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Dialog, DialogContent, DialogTitle, Grid, List, ListItem, ListItemText } from "@material-ui/core";
import { useSelector } from 'react-redux';
import { controller } from '../Others/StatesController';
import TitleDescriptions from '../Forms/TitleDescriptions';
import { elementTypes } from '../Others/GlobalVars';

interface Props {

}

const useStyles = makeStyles((theme) => ({
    // Define your styles here
}));

const AddDialog: React.FC<Props> = (props) => {
    // Hooks
    const states = useSelector(() => controller.states);
    const classes = useStyles();

    return (
        <Dialog open={states.isAdderDialogShowing} fullWidth onClose={() => {
            controller.setState({
                isAdderDialogShowing: false
            })
        }}>
            <DialogTitle>Add readme element</DialogTitle>
            <DialogContent>
                <List>
                    {
                        elementTypes.map((item, index) => {
                            return <ListItem button onClick={() => {
                                controller.addElement(item)
                                controller.setState({
                                    isAdderDialogShowing: false
                                })
                            }}>
                                <ListItemText primary={item} />
                            </ListItem>
                        })
                    }
                </List>
            </DialogContent>
        </Dialog>
    )

}

export default AddDialog;