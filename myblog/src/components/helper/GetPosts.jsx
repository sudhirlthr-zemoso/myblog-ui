import React,{ useState, useEffect } from 'react';
import '../molecules/css/Molecules.css'
import { Logincms, Blog, DeletePost, Commentlist, Comment } from '../../cms_pb';
import { CmsBlogClient, Metadata } from '../../cms_grpc_web_pb'
import BlogTitle from '../atoms/blog-TitleAndContentList';
import BlogContent from "../atoms/blog-ContentTextArea";



const useBlog = blogs => {
   
};

export default function GetAllPosts(){
    const [blogs, setBlogs] = useState([]);
    const [count, setCount] = useState(0);
    //useBlog(blogs);

    useEffect(() =>{
        const fetchData = async () => {
            var client = new CmsBlogClient('http://localhost:51053');
            var request = new Logincms();
            request.setResponsecode(420);
            request.setResponsemessage("Hello");
            var header = new Headers();
            var token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0b2tlbiIsImZpcnN0TmFtZSI6IkFhc2h1dG9zaCIsImxhc3ROYW1lXyI6Ikt1bWFyIiwidXNlcmlkIjoiMyIsImVtYWlsIjoic3VkaGlyLmt1bWFyQHplbW9zb2xhYnMuY29tIn0.WWx7j-Tx0xBkRj_VLA0Wpb3_DhhBPSIhmc24t5g0gZc";
            await client.post(request, {"Authorization": token}, (err, response) => {
                const outerArray = response;
                {outerArray["array"][1].map((dataitem) => {
                    var data = {
                        blogid: dataitem[0],
                        title: dataitem[4],
                        content: dataitem[1],
                        creationdate: dataitem[5],
                        refuser: dataitem[2],
                        comments: dataitem[3]
                    };
                    
                    if(blogs.some(blg => blg.blogid !== data.blogid)){
                        setBlogs([...blogs, data]);
                    }
                    blogs.push(data);
                })}
            });
           };
           fetchData();          
    }, [setBlogs]);

    return(
        <div className="page">
            <div className="row" >
                <div className="leftcolumn">
                    {
                        blogs.map((blog,index) =>
                                <div key={blog.blogid} className="card">
                                    <BlogTitle title={blog.title} blogid={blog.blogid} />
                                    <h5>{blog.creationdate}, {blog.refuser}</h5>
                                    <BlogContent content={blog.content} blogid={blog.blogid} />
                                </div>
                        )
                    }
                </div>
        </div> 
        </div>   
    );
}