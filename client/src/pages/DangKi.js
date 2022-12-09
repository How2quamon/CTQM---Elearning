import React from 'react';
import '../css/DangKi.css';

function DangKi() {
    return(
        <div>
          <div class="Signup">
                <form action="create-user" method="post">
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
                <input id="fname" name="fname" type="text" />
            </div>
            <div class="input-container username">
                <label for="username">UserName</label>
                <input id="username" name="username" type="username" />
            </div>
            <div class="input-container password">
                <label for="password">Password</label>
                <input id="password" name="password"  type="password" placeholder="Must be at least 6 characters" />
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
            <button class="signup-btn" type= "submit">Sign up</button>
            <section class=" copy legal"> 
                <p><span class="small">By continuing, you agree to accept our <br/><a href="#">Privacy Policy</a> &amp; <a href="#">Terms of Service</a>.</span></p>
            </section>
                </form>
            </div>
        </div>
    );
  }

export default DangKi;