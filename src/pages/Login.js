import React from "react";
import '../css/Login.css';
const Login = () => {
    return(
        <div class="Log-in">
        <form action="{{route('user.login')}}" method="post">
           {/* backend */}
         {/* @csrf  */}

            <section class="copy">
                <h2>LOG IN NOW</h2>
                <div class="signup-container">
                    <p>Don't have an account yet? <a href="sign-up">
                    Sign up</a></p>
                </div> 
            </section>
            <div class="input-container username">
                <label for="username">UserName</label>
                <input id="username" name="username" type="username" />
            </div>
            <div class="input-container password">
                <label for="password">Password</label>
                <input id="password" name="password"  type="password" placeholder="Must be at least 6 characters"/>
            </div>
            {/* backend */}
            {/* @if(session('failed')) */}
                {/* <p class="noti">Invalid username or password</p> */}
            {/* @endif */}
            <div class="input-container cta">
                <label class="checkbox-container">
                    <input type="checkbox"/>
                    <span class="checkmark"></span> 
                    Remember me
                    <a href="#" class="forgetpass">Forgot Password?</a>
                </label>
            </div>
            <button class="login-btn" type= "submit">Log in</button>
            <section class=" copy legal"> 
                <p><span class="small">By continuing, you agree to accept our <br/><a href="#">Privacy Policy</a> &amp; <a href="#">Terms of Service</a>.</span></p>
            </section>
        </form>
    </div>
    );
}
export default Login ;