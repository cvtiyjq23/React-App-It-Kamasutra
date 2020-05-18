import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";


import MainPage from "./components/Content/MainPage/MainPage";
import Messages from "./components/Content/Messages/Messages";
import News from "./components/Content/News/News";
import Music from "./components/Content/Music/Music";
import Settings from "./components/Content/Settings/Settings";
import {BrowserRouter, Route, Router} from "react-router-dom";
import Footer from "./components/Footer/Footer";



function App(props) {
    return (
        <BrowserRouter>
            <div className="Wrapper">
                <Header/>
                <NavBar/>
                <div className="Content">
                    <Route path='/profile' render={ ()=> <MainPage state = {props.state.posts}/>}/>
                    <Route path='/Dialog' render={()=> <Messages state={props.state.dialogs}/>}/>
                    <Route path="/News" component={News}/>
                    <Route path="/Music" component={Music}/>
                    <Route path="/Settings" component={Settings}/>
                </div>
                <Footer/>
            </div>

        </BrowserRouter>

    )
}

export default App;

