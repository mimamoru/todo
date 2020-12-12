import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    margin: {
        margin: theme.spacing(0),
    },
}));

const Input = (props) => {
    const classes = useStyles();
    const [input, setInput] = useState("");
    const getKey = () => Math.random().toString(32).substring(2);

    const handleSubmit = () => {
        if (!input) { return }
        props.push({
            key: getKey(),
            text: input,
            done: false
        }
        );
        setInput("");
    }
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField label="I'll do..." value={input} onChange={(e) => { setInput(e.target.value) }} />
                <Button onClick={handleSubmit} size="small" variant="outlined" color="primary" className={classes.margin}>
                    Add
        </Button>
            </div>
        </form>

    );
}
export default Input;