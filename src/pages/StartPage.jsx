import React from 'react';
import PostList from '../components/PostList';

const StartPage = (props) => {
  return <div>
      <h1>Startpage</h1>
      <PostList posts={props.posts}/>
  </div>;
};

export default StartPage;
