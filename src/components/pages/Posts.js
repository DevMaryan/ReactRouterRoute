import React from 'react';
import PropTypes from 'prop-types';
import '../../css/post.css';

export function Posts({posts}){

    return(
        <div id="posts">
          {posts.length > 0 ? 
            posts.map((post)=>{
                return(
                    <div key={post.id} className="postbox">
                        <h4 className="post-title"><span className="postid">{post.id}</span>{post.title}</h4>
                        <p className="post-body">{post.body}</p>
                    </div>
                    )
            })
        : <div className="lds-hourglass"></div>}
        </div>
    )
}

Posts.propTypes = {
    posts:PropTypes.arrayOf(PropTypes.object)
}