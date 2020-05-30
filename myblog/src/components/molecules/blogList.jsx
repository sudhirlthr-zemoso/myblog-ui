import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from '../atoms/blog-TitleTextArea';
import Content from '../atoms/blog-ContentTextArea';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Post() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Title />
      <Content />
    </form>
  );
}
