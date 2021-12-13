import React from 'react'
import './post.css';

function Post(props) {
    return (
        <div>
           <h4>{props.mydata}</h4> 
        </div>
    )
}

export default Post