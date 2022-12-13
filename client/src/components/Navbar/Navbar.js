import React, {Component} from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';
import * as HiIcons from 'react-icons/hi';
import * as BsIcons from 'react-icons/bs';
import "./Navbar.css";

const Navbar = () => {
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
                            <a href={`viewmore/prime`} class="dropdown-item">View more...</a>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <a href="#" data-toggle="dropdown" class="nav-item nav-link dropdown-toggle">Free Pack</a>
                        <div class="dropdown-menu">					
                            <a href={`/videocourse/6`} class="dropdown-item">Computer Science</a>
                            <a href={`/videocourse/7`} class="dropdown-item">Machine Learning</a>
                            <a href={`/videocourse/8`} class="dropdown-item">Programming Tutorials</a>
                            <a href={`/videocourse/9`} class="dropdown-item">Web Design</a>
                            <a href={`viewmore/free`} class="dropdown-item">View more...</a>
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
                <div class="navbar-nav action-buttons ml-auto">
                        <a href="#" target="_self" class="btn btn-login"> Login</a>
                        <a href="#" data-toggle="dropdown" class="nav-item nav-link dropdown-toggle mr-3"><AiIcons.AiFillCaretDown/></a>
                        <div class="dropdown-menu">					
                            <a href="#" class="dropdown-item">Update Profile</a>
                            <a href="#" class="dropdown-item">Settings</a>
                            <form>
                                <button type="submit" class="btn btn-link btn-logout"><BsIcons.BsBoxArrowRight/> Logout</button>
                            </form>
                        </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;