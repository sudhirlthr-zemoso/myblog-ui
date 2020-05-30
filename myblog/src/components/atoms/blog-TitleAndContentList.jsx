import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: "70ch",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}));

export default function BlogTitleAndContent(props) {
  const classes = useStyles();
  const blogid = props.blogid;
  const title = props.title;
  const content = props.content;
  const email = props.user;
  const creationdate = props.creationdate

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar />
        <ListItemText
          primary={title}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
               {email} {creationdate}<br/><br />
              </Typography>
              {content}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}