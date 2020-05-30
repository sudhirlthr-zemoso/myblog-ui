import React from 'react';

export default function SubmitPost(props){
    const handleOnSubmit = props.handleOnSubmit;
    const title = props.title;
    const content = props.content;
    return(
        <>
        <form onSubmit={handleOnSubmit} className="row">
            <div className="row">
                <input type="text" ref={title} placeholder="Blog Title"  required/><br/>
                <textarea ref={content} placeholder="Blog description" rows="5" cols="40" required/>
                <button className="button2" type="submit" >Submit</button>
            </div>
        </form><br/>
        </>
    );
}