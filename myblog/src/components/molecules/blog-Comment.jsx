import React from 'react';
import CommentList from '../atoms/blog-List'

export default function CommentTag(props){
    const blog = props.blog;
    const handleOnComment = props.handleOnComment;
    return(
        <div>
            {blog.comments[1].map(cmt =>
                <>
                    <CommentList content={cmt[1]} commentdate={cmt[2]} user={cmt[4]}/>
                </>
            )}

            <form key={blog.blogid} className="commentcard">
                <textarea rows="1" name="body" onKeyDown={handleOnComment} placeholder="Comment here" id={blog.blogid}/>
                <button type="submit" hidden={true} >Submit</button>
            </form>
        </div>
    );
}