import React from 'react';
import classes from './MainPage.module.css';
import Profile from "./Profile/Profile";
import Post from "./Post/Post";
import Dialog from "../Messages/Dialogs/Dialog";
import AddPost from "./AddPost/AddPost";

const  MainPage = (props) =>{
    let PostElements = props.state.map( postMessage =><Post message = {postMessage.message} />);
    return (
        <div>
            <Profile/>
            <AddPost/>
            <div className={classes.Content__Posts}>
                {PostElements}
            </div>
        </div>
    )


}

export default MainPage;