import React from 'react';
import classes from './NavBar.module.css';
import {BrowserRouter, NavLink} from "react-router-dom";

const  NavBar = () =>{
    return (

            <div className={classes.NavBar}>
                <nav className={classes.NavBar__Items}>
                    <ul>
                        <li className={classes.NavBar__Item}>
                            <NavLink to="/profile" className={classes.NavBar__ItemLink}>Profile</NavLink>
                        </li>
                        <li className={classes.NavBar__Item}>
                            <NavLink to="/Dialog" className={classes.NavBar__ItemLink}>Dialog</NavLink>
                        </li>
                        <li className={classes.NavBar__Item}>
                            <NavLink to="/News" className={classes.NavBar__ItemLink}>News</NavLink>
                        </li>
                        <li className={classes.NavBar__Item}>
                            <NavLink to="/Music" className={classes.NavBar__ItemLink}>Music</NavLink>
                        </li>
                        <li className={classes.NavBar__Item}>
                            <NavLink to="/Settings" className={classes.NavBar__ItemLink}>Dialog</NavLink>

                        </li>
                    </ul>
                </nav>
            </div>


    )
}

export default NavBar;