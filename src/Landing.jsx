import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import App from './App';


export default function Landing() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (

      <div>
     
        <h1>Welcome to Wim Hof Beta version 0.1.9</h1>
        {/* <Nav /> */}

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>

            <Route 
              path="/"
              element={<Login 
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                />}
            />
              <Route 
                path="/App"
                element={<App 
                username={username}
                password={password}
                />}
              />
            <Route 
              path="/signup"
              element={<SignUp 
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
              />}
            />

        </Routes>
      </div>
  
  );
}

function Login({ username, setUsername, password, setPassword }) {
  
  //status is used to render a working or fake login button
  const [status, setStatus] = useState('');

  useEffect(()=>{
    fetch('/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([username, password])
    })
    .then(response => response.json())
    .then(data => {
      console.log('data from fetch useEffect Login', data)
      setStatus(data)
    })
  }, [username, password])

  function updateUsername (event) {
    setUsername(event.target.value)
    console.log(username)
  }

  function updatePassword(event) {
    setPassword(event.target.value)
    console.log(password)
  }
  

  return (
    <div id='landing'>
      <div>Just Breathe!</div>
      <input onChange={updateUsername} type="text" placeholder='username' />
      <input onChange={updatePassword} type="password" placeholder='password' />

      {(status === 'hello' &&
        <Link to="/App">Login</Link>
      )}
      {(status !== 'hello' &&
        <Link to="/">Login</Link>
      )}

    {/* // uncomment below to DEMO */}
    {/* <Link to="/App">Login</Link> */}

      
      <div id='signuplink'>
        Don't have an account?  
        <Link to="/SignUp">
          Sign up
        </Link>
      </div>
    </div> 
  )
}






function SignUp({ username, setUsername, password, setPassword }) {

  const [status, setStatus] = useState('sorry');

  useEffect(()=>{
    fetch('/createUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([username, password])
    })
    .then(response => response.json())
    .then(data => {
      console.log('data from fetch useEffect SignUp', data)
      setStatus(data)
      // do something
    })
  }, [username, password])

  function updateUsername (event) {
    setUsername(event.target.value)
    console.log(username)
  }

  function updatePassword(event) {
    setPassword(event.target.value)
    console.log(password)
  }
  return (
    <div id='signup'>
      <input onChange={updateUsername} type="text" placeholder='username' required />
      <input onChange={updatePassword} type="password" placeholder='password' required />

      {(status === 'hello' &&
        <Link to="/App">Sign Up</Link>
      )}
      {(status !== 'hello' &&
        <Link to="/SignUp">Sign Up</Link>  
      )}

      {/* Uncomment below to DEMO */}
      {/* <Link to="/App">Sign Up</Link> */}
      
    </div>
  )
}

function Nav() {
  return (

  <nav>
        <h1>Welcome to Wim Hof Beta version 0.1.9</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* { window.location.pathname === '/signup' ?
              <Link to='/'><li>Log In</li></Link>
            : window.location.pathname === '/' ?
              <Link to='/signup'><li>Sign Up</li></Link>
            : <Link to='/'><li>Log Out</li></Link>

            } */}
          </ul>
        </nav>

  )
}