import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({posts}) => {
  return <div>
            <ol>
                        {posts.map((post) => {
                    return <Link key={post.id} to={{
                    pathname:`/post/${post.id}`,
                    details: {...post}
                    }}>
                      <li key={post.id}>{post.title}</li></Link>
            })}
            </ol>
  </div>;
};

export default PostList;
