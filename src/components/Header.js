import React from 'react';
import {Link} from 'react-router-dom';
import '../css/header.css';

export function Header(){

    return(
        <div className = "header">
            <ul>
                <li><Link to = "/">Home</Link></li>
                <li><Link to = "/albums">Albums</Link></li>
                <li><Link to = "/posts">Posts</Link></li>
            </ul>
        </div>
    )
}