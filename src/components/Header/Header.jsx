import React from 'react';
import classes from './Header.module.css';


const  Header = () =>{
    return (
        <div className={classes.Header}>
            <div className={classes.Header__logo}>
                <img src="https://banner2.kisspng.com/20180723/qyp/kisspng-logo-brand-line-square-angle-5b5594c39123a0.4232054415323352995945.jpg" alt="" className={classes.Header__ImgLogo}></img>
            </div>
            <div className={classes.Header__LogOut}>
                <a href="#" className={classes.Header__LogOutButton}>Выйти</a>
            </div>
        </div>
    )
}

export default Header;