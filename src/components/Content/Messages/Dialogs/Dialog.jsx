import React from 'react';
import classes from "./Dialog.module.css"



const Dialog = (props) => {
    return (
        <div className={classes.DialogsPage__DialogsItem}>{props.Name}</div>
    )
}

export default Dialog;