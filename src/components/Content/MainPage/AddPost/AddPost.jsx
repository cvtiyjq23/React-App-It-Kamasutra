import React from 'react';
import classes from './AddPost.module.css';
const  AddPost = (props) =>{
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }
    return (
        <div className={classes.Content__Post}>
            <textarea ref={newPostElement} className={classes.Text} ></textarea>
            <button onClick={addPost} className={classes.Button}>Отправить</button>
        </div>
    )


}

export default AddPost;