import React, { useState } from "react";
import { Button, Card, CardContent, CardActions, Input, TextField } from '@mui/material/';
import { AddCircle } from '@mui/icons-material/';
const CreateNote = (props) => {
    const [expand, setexpand] = useState(false);
    const [note, setnote] = useState({
        title: '',
        content: ''
    });
    const InputEvent = (event) => {
        const { name, value } = event.target;
        setnote((predata) => {
            return {
                ...predata,
                [name]: value
            };
        });
    };
    const addEvent = () => {
        props.passnote(note);
        setnote({
            title: '',
            content: ''
        });
    };
    const expandIt = () => {
        setexpand(true);
    };
    const shrinkIt =()=>{
        setexpand(false);
    };
    return (
        <>
            <Card onDoubleClick={shrinkIt} className="card" sx={{ minWidth: 275 }}>
                <CardContent>
                    <form>
                        {expand ? (
                            <Input name="title" type="text" value={note.title} onChange={InputEvent} placeholder="Title" autoComplete="off" />
                        ) : null}
                        <br />
                        <TextField name="content" placeholder="Write a Note" value={note.content} onClick={expandIt} onChange={InputEvent} rows="30" columns="50" variant="standard" autoComplete="off" />
                    </form>
                </CardContent>
                {expand ? (
                    <CardActions>
                        <Button onClick={addEvent} size="small" variant="outlined" color="success">
                            <AddCircle />
                        </Button>
                    </CardActions>) : null}
            </Card>

        </>
    )
};

export default CreateNote;




