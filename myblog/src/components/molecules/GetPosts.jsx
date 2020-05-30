import React from 'react';

import { Logincms, Blog, Commentlist, Comment } from '../../cms_pb';
import { CmsBlogClient } from '../../cms_grpc_web_pb'

import '../molecules/css/Molecules.css'
import Search from './Search'
import PostForm from './SubmitPostForm'
import Blogrenderer from './Blogrenderer'

class GetPosts extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            users: null,
            blogs: [],
            newdata: [],
            searchTerm: '',
            commentBlogId: 123,
            blogCreated: false,
        };
        this.title = React.createRef();
        this.content = React.createRef();
        this.commentBlogId = React.createRef();
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleOnComment = this.handleOnComment.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
    }

    componentDidMount() {
        //userService.getAll().then(users => this.setState({ users }));

        const { searchTerm } = this.state;
        var client = new CmsBlogClient('http://localhost:51053');
        var request = new Logincms();

        request.setResponsecode(420);
        request.setResponsemessage("Hello");
        var header = new Headers();
        //var token = "Bearer "+this.state.currentUser.token;
        var token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0b2tlbiIsImZpcnN0TmFtZSI6IkFhc2h1dG9zaCIsImxhc3ROYW1lXyI6Ikt1bWFyIiwidXNlcmlkIjoiMyIsImVtYWlsIjoic3VkaGlyLmt1bWFyQHplbW9zb2xhYnMuY29tIn0.WWx7j-Tx0xBkRj_VLA0Wpb3_DhhBPSIhmc24t5g0gZc";
        console.log(token);


        client.post(request, {"Authorization": token}, (err, response) => {
            const outerArray = response;
            console.log(response);
            {outerArray["array"][1].map((dataitem) => {

                var updateddata = this.state.blogs.concat({
                    blogid: dataitem[0],
                    title: dataitem[4],
                    content: dataitem[1],
                    creationdate: dataitem[5],
                    refuser: dataitem[2],
                    comments: dataitem[3]
                });
                this.setState({blogs: updateddata})

            })}
        });
    }

    onDismiss(id){
        const isNotId = blog => blog.blogid !== id;
        const updatedList = this.state.blogs.filter(isNotId);
        this.setState({blogs: updatedList});
    }

    onSearchChange(event){
        this.setState({ searchTerm: event.target.value })
    }

    handleOnSubmit(event){
        event.preventDefault();

        var client = new CmsBlogClient('http://localhost:51053');

        var request = new Blog();

        request.setBlogid(123);
        request.setTitle(this.title.current.value);
        request.setContent(this.content.current.value);
        //request.setRefuser(this.state.currentUser.username);
        request.setRefuser("sudhirlthr@gmail.com");
        let commentList = new Commentlist();
        request.setComments(commentList);
        request.setCreationdate("2020-03-06");

        // for setting token
        //var token = "Bearer "+this.state.currentUser.token;
        var token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0b2tlbiIsImZpcnN0TmFtZSI6IkFhc2h1dG9zaCIsImxhc3ROYW1lXyI6Ikt1bWFyIiwidXNlcmlkIjoiMyIsImVtYWlsIjoic3VkaGlyLmt1bWFyQHplbW9zb2xhYnMuY29tIn0.WWx7j-Tx0xBkRj_VLA0Wpb3_DhhBPSIhmc24t5g0gZc";


        //let updatedData = [];
        client.create(request, {"Authorization": token}, (err, response) => {
            console.log(response);
        });
        if(!alert('New blog post has been saved!')){window.location.reload();}

    }


    handleOnComment(event){

        if (event.keyCode == 13 && event.shiftKey == false){
            const userCommentContent = event.target.value.trim();
            const blogid = event.target.id;

            event.preventDefault();

            let userComment = new Comment();
            userComment.setCommentsid(123);
            userComment.setContent(userCommentContent);
            userComment.setCommentsdate(Date.now());
            userComment.setBlogid(blogid);
            //userComment.setRefuser(this.state.currentUser.username);
            userComment.setRefuser("sudhirlthr@gmail.com");

            var client = new CmsBlogClient('http://localhost:51053');
            // for setting token
            //var token = "Bearer "+this.state.currentUser.token;
            var token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0b2tlbiIsImZpcnN0TmFtZSI6IkFhc2h1dG9zaCIsImxhc3ROYW1lXyI6Ikt1bWFyIiwidXNlcmlkIjoiMyIsImVtYWlsIjoic3VkaGlyLmt1bWFyQHplbW9zb2xhYnMuY29tIn0.WWx7j-Tx0xBkRj_VLA0Wpb3_DhhBPSIhmc24t5g0gZc";


            //let updatedData = [];
            client.postcomment(userComment, {"Authorization": token}, (err, response) => {
                console.log(response);
            });
            if(!alert('Comments saved!')){window.location.reload();}
            //this.setState({blogCreated: true})
        }

    }

    render(){
        const { currentUser, users, searchTerm, blogs, blogCreated } = this.state;
        return(
            <div className="page">
                <PostForm title={this.title} content={this.content} handleOnSubmit={this.handleOnSubmit} />
                <div className="interactions">
                    <Search
                        value = {searchTerm}
                        onChange = {this.onSearchChange}
                    >
                    </Search>
                </div>
                <div>
                    <div>
                        {
                            blogs.filter(isSearched(searchTerm)).map(blog =>
                                    <div key={blog.blogid} >
                                        <Blogrenderer blog={blog} handleOnComment={this.handleOnComment}/>
                                    </div>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

function isSearched(searchTerm) {
    return function (blog) {
        return !searchTerm || blog.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
}

export default GetPosts;