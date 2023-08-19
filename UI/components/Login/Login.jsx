import { useState } from 'react';
import './Login.css';


function Login() {

  const [logType, setLogType] = useState('signUp');

  const toSignUp = ()=>{
    setLogType('signUp')
  }

  const toSignIn = ()=>{
    setLogType('signIn')
  }

  if (logType=='signIn') {

    return(
      <div className="main">
        <div className="login">
            <h2>SIGN IN</h2>
            <p className='option-login'>Forgot Password?</p>
            <input type="text" placeholder='Username'/>
            <input type="text" placeholder='Password'/>
            <button type="submit">Login</button>
            <div>
              <div>Don't have an account ?</div>
              <span className='option-login' onClick={toSignUp}>Sign up</span>
            </div>
        </div>
      </div>
    )

  }

  if (logType=='signUp') {

    return(
      <div className="main">
        <div className="login">
            <h2>SIGN UP</h2>
            <input type="text" placeholder='Enter an username'/>
            <input type="text" placeholder='Enter a password'/>
            <input type="text" placeholder='Confirm your password'/>
            <button type="submit">Sign up</button>
            <div>
              <div>Already have an account ?</div>
              <span className='option-login' onClick={toSignIn}>Sign in</span>
            </div>
        </div>
      </div>
    )

  }

}

export default Login;