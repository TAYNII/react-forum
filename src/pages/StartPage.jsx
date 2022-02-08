import React from 'react';
import PostList from '../components/PostList';
import { useEffect, useState } from 'react';


const StartPage = () => {
  const [posts, setPosts] = useState([])

  
    // function getPosts () {
    //   fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then((response) => response.json())
    //   .then((data) => setPosts(data))
    // }

    const fetchdata = async () => {
        const url =`https://jsonplaceholder.typicode.com/posts`
        const response = await fetch(url)
        const data = await response.json()
        setPosts(data)
     
    }
    
    useEffect(() => {
      // getPosts()
      fetchdata()
    },[])
  return <div>
      <h1>Startpage</h1>
      <PostList posts={posts}/>

  </div>;
};

export default StartPage;
