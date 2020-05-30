import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '28ch',
    },
  },
}));

export default function InputField(props) {
  const classes = useStyles();
  const onChange= props.onChange;
  const value= props.value;
  const placeholder="Search blog by title"

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        variant="outlined"
        color="secondary"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </form>
  );
}
