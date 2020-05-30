import React from 'react';
import { BehaviorSubject } from 'rxjs';

export default function AboutMe(props){
    const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
    let userEmail;
    if(currentUserSubject.value)
        userEmail = currentUserSubject.value.email;
    
    return(
        <div className="aboutme">
            <div className="card">
                <h2>About Me</h2>
                {/* <p>{currentUser.firstName +" "+currentUser.lastName}</p> */}
                <p>{userEmail}</p>
                {/* <p>Software Engineer at Zemoso Technologies Pvt. Ltd.</p> */}
            </div>
            {/* <div className="card">
                <h3>Follow Me</h3>
                <p>Linkedin: <a href="www.linkedin.com/in/sudhirlthr" color="green">sudhirlthr</a></p>
                <p>Facebook: <a href="www.facebook.com/sudhirltr" color="green">sudhirltr</a></p>
                <p>Twitter: <a href="www.twitter.com/in/sudhirltr" color="green">sudhirltr</a></p>
            </div> */}
        </div>
    );
}