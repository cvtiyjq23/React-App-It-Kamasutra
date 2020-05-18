import React from 'react';
import classes from "./Messages.module.css"
import Dialog from "./Dialogs/Dialog";
import Messag from "./Message/Messag";




const  Messages = (props) =>{

    let DialogElements = props.state.map( dialog =><Dialog Name = {dialog.name}/>);
    let MessagesElements = props.state.map( messag =><Messag Message = {messag.message}/>);
    return (
        <div className={classes.DialogsPage}>
            <div className={classes.DialogsPage__Dialogs}>
                {DialogElements}
            </div>
            <div className={classes.DialogsPage__Messages}>
                {MessagesElements}
            </div>
        </div>

    )
}

export default Messages;