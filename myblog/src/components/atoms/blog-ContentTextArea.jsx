import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  },
}));

export default function BlogContentTextArea(props) {
  const classes = useStyles();
  const blogid = props.blogid;
  const content = props.content;
  
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id={blogid}
          variant="outlined"
          id="outlined-multiline-static"
          multiline
          rows={4}
          columns={10}
          value={content}
          disabled
         />
      </div>
    </form>
  );
}