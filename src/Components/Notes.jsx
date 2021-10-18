import React from "react";
import { Button, Typography, Card, CardContent, CardActions } from '@mui/material/';
import { DeleteOutline } from '@mui/icons-material/';

const Notes = (props) => {
    const deleteNote=()=>{
        props.deleteItem(props.id);
    };
    return (
        <>
            <Card className="notes" sx={{ minWidth: 150 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body2">
                        {props.content}
                        <br />
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={deleteNote} size="small" variant="outlined" color="error">
                        <DeleteOutline />
                    </Button>
                </CardActions>
            </Card>

        </>
    )
};

export default Notes;




