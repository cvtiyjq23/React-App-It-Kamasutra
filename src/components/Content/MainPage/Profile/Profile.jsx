import React from 'react';
import classes from "./Profile.module.css"


const  Profile = () =>{
    return (
        <div className={classes.Content__Profile}>
            <img src="https://vokrug.tv/pic/news/5/f/c/2/rsz300x300_5fc2879465129c11d65749ab9e3db7cc.jpg" className={classes.Content__Avatar}></img>
                <p className={classes.Content__Name}>Anton</p>
        </div>


    )
}

export default Profile;