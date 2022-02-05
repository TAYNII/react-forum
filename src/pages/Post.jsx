import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Body from '../components/Body';


const Post = (props) => {
    const [details, setDetails] = useState(null)
    const [myComments, setMyComments] = useState(null)
    const {id} = useParams()

    function getDetails () {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((data) => setDetails(data))
      }
      function getMyComments() {
          fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
          .then((response) => response.json())
          .then((data) => setMyComments(data))
      }
      useEffect(() => {
          getDetails()
          getMyComments()
      },[])
      console.log(props.location)
  return <div>
      <Body myComments={myComments} details={props.location.details ||details}/>
  </div>;
};

export default Post;
