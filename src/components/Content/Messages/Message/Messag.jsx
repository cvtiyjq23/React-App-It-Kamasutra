import React from 'react';
import classes from "./Messag.module.css"



const Messag = (props) => {
    return (
        <div className={classes.DialogsPage__MessagesItem}>{props.Message}</div>
    )
}

export default Messag;