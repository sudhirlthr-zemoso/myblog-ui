import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Post() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
    
     </form>
  );
}