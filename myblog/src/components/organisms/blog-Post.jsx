import React from 'react';
import Post from '../molecules/blog-Form';
import GetAllPosts from '../molecules/GetPosts'
import AboutMe from '../molecules/AboutMe';

export default function Posts(){

    
    return(
        <div>
            <GetAllPosts/>
            <AboutMe />
        </div>
        );
}