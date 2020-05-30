import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import BlogTitleAndContent from '../atoms/blog-TitleAndContentList';
import BlogContent from "../atoms/blog-ContentTextArea";
import HeaderTag from '../atoms/HeaderTag';
import CommentTag from './blog-Comment';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(80),
      height: theme.spacing(70),
    },
  },
}));

export default function SimplePaper(props) {
  const classes = useStyles();
  const blog = props.blog;
  const handleOnComment = props.handleOnComment;

  return (
    <div className={classes.root}>
      <Paper elevation={3} >
        <BlogTitleAndContent blogid={blog.blogid} title={blog.title} content={blog.content} user={blog.refuser} creationdate ={blog.creationdate}/>
        {/* <HeaderTag creationdate ={blog.creationdate} refuser={blog.refuser} /> */}
        <CommentTag blog={blog} handleOnComment={handleOnComment}/>
      </Paper>
    </div>
  );
}
