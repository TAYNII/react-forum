import './App.css';
import {Switch, Route} from "react-router-dom"
import StartPage from './pages/StartPage';
import Post from './pages/Post';
import { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])

  function getPosts () {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => setPosts(data))
  }
  function getComments () {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response) => response.json())
    .then((data) => setComments(data))
  }

  useEffect(() => {
    getPosts()
    getComments()
  },[])
  console.log(posts, comments)

  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/" render={(props) => <StartPage posts={posts} {...props}/>}/>
          <Route path="/post/:id" render={(props) => <Post comments={comments} posts={posts} {...props}/>}/>
        </Switch>
      </header>
    </div>
  );
}

export default App;
