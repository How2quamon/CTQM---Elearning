import React, {Component, useContext, useEffect} from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';
import * as HiIcons from 'react-icons/hi';
import * as BsIcons from 'react-icons/bs';
import "./Navbar.css";
import { UserContext } from '../Context/UserContext';

const Navbar = () => {
    const {userLogin, setUserLogin, addNewUser, logOutUser} = useContext(UserContext);

    const Logout = () => {
        logOutUser();
        window.open('/', "_self");
    }
    useEffect(() => {
        console.log(window.location.pathname);
    })

    return(
        <nav className="navbar navbar-expand-lg">
            <a href={`/`} className="navbar-brand"><b>C</b>TQM</a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"><FaIcons.FaBars/></span>
            </button>
            <div id="navbarCollapse" class="collapse navbar-collapse justify-content-start">
                <div class="navbar-nav">
                    <div class="nav-item dropdown">
                        <a href="#" data-toggle="dropdown" class="nav-item nav-link dropdown-toggle">Prime Pack</a>
                        <div class="dropdown-menu">					
                            <a href={`/videocourse/1`} class="dropdown-item">Fullstack Web</a>
                            <a href={`/videocourse/2`} class="dropdown-item">MySQL</a>
                            <a href={`/videocourse/3`} class="dropdown-item">Complete Python</a>
                            <a href={`/videocourse/4`} class="dropdown-item">Java</a>
                            <a href={`/viewmore/prime`} class="dropdown-item">View more...</a>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <a href="#" data-toggle="dropdown" class="nav-item nav-link dropdown-toggle">Free Pack</a>
                        <div class="dropdown-menu">					
                            <a href={`/videocourse/6`} class="dropdown-item">Computer Science</a>
                            <a href={`/videocourse/7`} class="dropdown-item">Machine Learning</a>
                            <a href={`/videocourse/8`} class="dropdown-item">Programming Tutorials</a>
                            <a href={`/videocourse/9`} class="dropdown-item">Web Design</a>
                            <a href={`/viewmore/free`} class="dropdown-item">View more...</a>
                        </div>
                    </div>			
                    <a href="#" class="nav-item nav-link">Contact Us</a>
                    <form class="navbar-form form-inline">
                        <div class="input-group search-box">								
                            <input type="text" id="search" class="form-control" placeholder="Search here..."/>
                            <div class="input-group-append">
                                <span class="input-group-text"><i class="material-icons">&#xE8B6;</i></span>
                            </div>
                        </div>
                    </form>
                    </div>
                {userLogin != null ?  
                    <div class="navbar-nav action-buttons ml-auto">
                        <a href="#" data-toggle="dropdown" class="nav-item nav-link dropdown-toggle mr-3"><i class="fa-solid fa-user-circle-o"></i> {userLogin.userName} <AiIcons.AiFillCaretDown/></a>
                        <div class="dropdown-menu">
                            <a href={`/profile`} class="dropdown-item" target="_self">Update Profile</a>
                            <div>
                                <button onClick={Logout} class="btn btn-link btn-logout"><BsIcons.BsBoxArrowRight/> Logout</button>
                            </div>
                        </div>
                    </div>
                    : window.location.pathname == "/log-in" ? 
                    <div class="navbar-nav action-buttons ml-auto">
                        <a href={`/register`} target="_self" class="btn btn-login"> Register</a>
                    </div>
                    :
                    <div class="navbar-nav action-buttons ml-auto">
                        <a href={`/log-in`} target="_self" class="btn btn-login"> Login</a>
                    </div>
                }
            </div>
        </nav>
    )
}

export default Navbar;