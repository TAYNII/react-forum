import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Body from '../components/Body';



const Post = (props) => {
    const [details, setDetails] = useState(null)
    const [comments, setComments] = useState([])
    const {id} = useParams()

    function getDetails () {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((data) => setDetails(data))
      }
      function getMyComments() {
          fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
          .then((response) => response.json())
          .then((data) => setComments(data))
      }
      useEffect(() => {
          getDetails()
          getMyComments()
      },[])

      return <div>
      <Body comments={comments} details={props.location.details || details}/>

  </div>;
};

export default Post;
