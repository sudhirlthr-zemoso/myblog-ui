import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 'auto',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function CommentList(props) {
  const classes = useStyles();
  const content = props.content;
  const commentdate = props.commentdate;
  const user = props.user;

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemText primary={content} />
        </ListItem>
        <ListItemLink href="#">
          <ListItemText primary={user} />
          
        </ListItemLink>
        <Divider />
      </List>
    </div>
  );
}