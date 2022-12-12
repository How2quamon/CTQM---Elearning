import React from 'react';
import '../css/DangKi.css';
import Axios from 'axios'
import { useEffect, useState } from "react";


function DangKi() {

    // Dữ liệu tài khoản
    const [fullName, setFullName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    // Đăng kí tài khoản
    const submitName = () => {
        Axios.post("http://localhost:3001/register", {
            fullName: fullName,
            userName: userName,
            password: password
        }).then(() => {
            alert("successful register");
        });
        //   setFullName('');
        //   setUserName('');
        //   setPassword('');
    };

    return (
        <div>
            <div class="Signup">
                <div >
                    {/* action="create-user" method="post" */}
                    {/* @csrf */}
                    <section class="copy">
                        <h2>SIGN UP NOW</h2>
                        <div class="login-container">
                            <p>Already have an account? <a href="log-in">
                                Log In</a></p>
                        </div>
                    </section>
                    <div class="input-container name">
                        <label for="fname">Full Name</label>
                        <input id="fname" name="fullName" onChange={(e) => {
                            setFullName(e.target.value)
                        }} type="text" />
                    </div>
                    <div class="input-container username">
                        <label for="username">UserName</label>
                        <input id="username" name="userName" onChange={(e) => {
                            setUserName(e.target.value)
                        }} type="username" />
                    </div>
                    <div class="input-container password">
                        <label for="password">Password</label>
                        <input id="password" name="password" onChange={(e) => {
                            setPassword(e.target.value)
                        }} type="password" placeholder="Must be at least 6 characters" />
                    </div>
                    {/* @if (session('status'))
            <div class="alert alert-success" role="alert">
                <button type="button" class="close" data-dismiss="alert">×</button>
                {{ session('status') }}
            </div>
            @elseif(session('failed'))
            <div class="alert alert-danger" role="alert">
                <button type="button" class="close" data-dismiss="alert">×</button>
                {{ session('failed') }}
            </div>
            @endif
            <div class="input-container cta">
                <label class="checkbox-container">
                    <input type="checkbox">
                    <span class="checkmark"></span> 
                    Sign up for email updates.
                </label>
            </div> */}
                    <a href="http://localhost:3000/log-in"><button class="signup-btn" onClick={submitName} >
                        Sign up</button></a>
                    <section class=" copy legal">
                        <p><span class="small">By continuing, you agree to accept our <br /><a href="#">Privacy Policy</a> &amp; <a href="#">Terms of Service</a>.</span></p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default DangKi;