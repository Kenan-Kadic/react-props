import React from 'react'
import './posts.css'
import Post from '../post/Post'

function Posts(props) {

    const thedata = "Testing out data"

    return (
        <section>
           <h2>{props.title}</h2>
           <Post mydata={thedata}/>
           </section>
    )
}

export default Posts
