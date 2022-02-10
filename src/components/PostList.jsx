import React from 'react';
import { Link } from 'react-router-dom';
import style from "./postList.module.scss"


const PostList = ({posts}) => {
  return <div  className={style.container}>
                        {posts.map((post, i) => {
                    return <div key={i} className={style.postHolder}><Link className={style.link} key={post.id} to={{
                    pathname:`/post/${post.id}`,
                    details: {...post}
                    }}>
                      <p className={style.post} key={post.id}>{post.title}</p></Link></div>
            })}
  </div>;
};

export default PostList;
