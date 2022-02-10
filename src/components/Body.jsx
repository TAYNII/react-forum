import React from 'react';
import { Link } from 'react-router-dom';
import style from './body.module.scss'

const Body = ({details, comments}) => {


    if(details) {
      return (
        <div className={style.container}>
            <fieldset className={style.mainPost}>
              <legend className={style.title}>{details.title}</legend>
            <article className={style.article}>
              <p>
                {details.body}
              </p>
            </article>
            </fieldset>
            <div className={style.card}>
              
            {comments.map((comment,i) => {
              return(<div className={style.commentsHolder} key={i}>
                <div className={style.comment}>
                  <p className={style.commentBody}>{comment.body}</p>
                </div>
                <div className={style.userInfo}>
                  <div className={style.commentsUsername}>
                    <small className={style.align}>Username: {comment.name}</small>
                    <small className={style.align}>{comment.email}</small> 
                  </div>
                </div>
              </div>)
            })}

            </div>

            
            <Link to="/"><button className={style.button}>Go back</button></Link>
          </div>
        );
    } else {
        return <h2>Fetching data...</h2>
  
}};

export default Body;
