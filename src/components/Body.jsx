import React from 'react';
import { Link } from 'react-router-dom';

const Body = ({details, myComments}) => {
    if(details && myComments) {
        return (
          <div>
            <p>
              <strong>Title:</strong> {details.title}
            </p>
            <p>
              <strong>Text: </strong>
              {details.body}
            </p>
            <p>
              <strong>Comments:</strong> {myComments.body}
            </p>
            <p>
              <strong>Name: </strong> {myComments.name}
            </p>
            <p>
              <strong>Email:</strong> {myComments.email}
            </p>
            <Link to="/"><button>Go back!</button></Link>
          </div>
        );
    } else {
        return <h2>Fetching data...</h2>
    }
};

export default Body;
