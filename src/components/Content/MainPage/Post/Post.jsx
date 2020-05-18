import React from 'react';
import classes from './Post.module.css';
const  Post = (props) =>{
    return (
        <div className={classes.Content__Post}>
            <img src="https://vokrug.tv/pic/news/5/f/c/2/rsz300x300_5fc2879465129c11d65749ab9e3db7cc.jpg"className={classes.Content__PostImgAvatar}></img>
                <p className={classes.Content__PostName}>Andrew</p>
                <p className={classes.Content__PostText}>{props.message}</p>
        </div>
    )


}

export default Post;