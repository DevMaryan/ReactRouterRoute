import React,{useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import {Header} from './Header';
import { Albums } from './pages/Albums';
import { Posts } from './pages/Posts';
import axios from 'axios';
import '../css/app.css';


export function App(){

  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(result => {setPosts(result.data)})
    .catch(err => alert(err))
  },[])

  return(
    <div id = "app">
      <Header/>
        <Switch>
            <Route path = "/albums" component={Albums}/>
            <Route path = "/posts" render={()=>{return <Posts posts={posts}/>}}/>
        </Switch>
        <h3 style={{textAlign:'center',fontFamily:"Roboto", padding:"1rem 0rem"}}>Homework 5</h3>
    </div>
  )
}
