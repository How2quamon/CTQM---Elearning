import React, { useContext, useEffect, useState } from "react";
import Axios from 'axios';
import '../css/Login.css';
import { UserContext } from '../components/Context/UserContext';

const Login = () => {
    const {userLogin, setUserLogin, addNewUser, logOutUser} = useContext(UserContext);
    const [userList, setUserList] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [fail, setFail] = useState(false);

    const checkUserLogin = () => {
        if (userList != null) {
            for (var i = 0; i < userList.length; i++) {
                if (userList[i].nick_name.trim() == username && userList[i].password.trim() == password) {
                    setFail(false);
                    addNewUser(userList[i].id, userList[i].nick_name, userList[i].password, userList[i].cash);
                    return window.open('/', "_self");
                }
            }
            setFail(true);
        }
    }

    useEffect(() => {
        Axios.get(`http://localhost:3001/users`).then((response) => {
            setUserList(response.data);
        });
    }, []);

    return(
        <div class="Log-in">
        <div>
           {/* backend */}
         {/* @csrf  */}
            <section class="copy">
                <h2>LOG IN NOW</h2>
                <div class="signup-container">
                    <p>Don't have an account yet? <a href="/register">
                    Sign up</a></p>
                </div> 
            </section>
            <div class="input-container username">
                <label htmlFor="username">UserName</label>
                <input id="username" type="username" onChange={(e) => {setUsername(e.target.value)}}/>
            </div>
            <div class="input-container password">
                <label htmlFor="password">Password</label>
                <input id="password"  type="password" placeholder="Must be at least 6 characters" onChange={(e) => {setPassword(e.target.value)}}/>
            </div>
            {fail == true ? <p class="noti">Invalid username or password</p> : ""}
            <div class="input-container cta">
                <label class="checkbox-container">
                    <input type="checkbox"/>
                    <span class="checkmark"></span> Remember me
                    <a href="#" class="forgetpass">Forgot Password?</a>
                </label>
            </div>
            <button class="login-btn" onClick={checkUserLogin}>Log in</button>
            <section class=" copy legal"> 
                <p><span class="small">By continuing, you agree to accept our <br/><a href="#">Privacy Policy</a> &amp; <a href="#">Terms of Service</a>.</span></p>
            </section>
        </div>
    </div>
    );
}
export default Login ;