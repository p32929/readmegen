import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Dialog, DialogContent, DialogTitle, Grid, List, ListItem, ListItemText } from "@material-ui/core";
import { useSelector } from 'react-redux';
import { controller } from '../Others/StatesController';

interface Props {

}

const useStyles = makeStyles((theme) => ({
    // Define your styles here
}));

const AddDialog: React.FC<Props> = (props) => {
    // Hooks
    const states = useSelector(() => controller.states);
    const classes = useStyles();

    const elementTypes = [
        "Title and Descriptions",
        "Image or Logo"
    ]

    return (
        <Dialog open={false} fullWidth>
            <DialogTitle>Add readme element</DialogTitle>
            <DialogContent>
                <List>
                    {
                        elementTypes.map((item) => {
                            return <ListItem button>
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