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
  const [userData, setUserData] = useState('')
  return (

      <div>
     
        {/* <h1>Welcome to Wim Hof Beta version 0.1.9</h1> */}
        <Nav />

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            
        {(userData &&
          <App 
          userData={userData}
          setUserData={setUserData}
          />
        )}
        {(!userData &&
          <Routes>
          <Route 
            path="/"
            element={<Login 
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              userData={userData}
              setUserData={setUserData}
              />}
          />
          <Route 
            path="/signup"
            element={<SignUp 
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              userData={userData}
              setUserData={setUserData}
            />}
          />
      </Routes>
        )}
        
      </div>
  
  );
}

function Login({ username, setUsername, password, setPassword, userData, setUserData}) {
  
  //status is used to render a working or fake login button
  const [wrongInput, setWrongInput] = useState(false);

  function updateUsername (event) {
    setUsername(event.target.value)
    console.log(username)
  }

  function updatePassword(event) {
    setPassword(event.target.value)
    console.log(password)
  }
  
  const clickHandler = () => {
    fetch('/checkUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: username, password: password})
    })
    .then(response => response.json())
    .then(data => {
      console.log('data from fetch useEffect Login', data)
      if (data.length === 0) {
        setWrongInput(true);
      } else {
        setWrongInput(false);
        setUserData(data)
      }
    })
  }

  return (
    <div id='landing'>
      <div>Just Breathe!</div>
      <input onChange={updateUsername} type="text" placeholder='username' />
      <input onChange={updatePassword} type="password" placeholder='password' />
      <button onClick={clickHandler}>Login</button>
      
     
      <div id='signuplink'>
        Don't have an account?  
        <Link to="/SignUp">
          Sign up
        </Link>
      </div>
      {(wrongInput && 
        <p>Invalid Credentials</p>
      )}
    </div> 
  )
}






function SignUp({ username, setUsername, password, setPassword }) {
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')

  // useEffect(()=>{
  //   fetch('/checkUserName', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify([username, password])
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log('data from fetch useEffect SignUp', data)
  //     setStatus(data)
  //     // do something
  //   })
  // }, [username, password])

  function updateFirst (event) {
    setFirst(event.target.value)
    console.log(first)
  }
 
  function updateLast (event) {
    setLast(event.target.value)
    console.log(last)
  }
  function updateUsername (event) {
    setUsername(event.target.value)
    console.log(username)
  }

  function updatePassword(event) {
    setPassword(event.target.value)
    console.log(password)
  }

  const clickHandler = () => {
    
  }

  return (
    <div id='signup'>
      <div>Get Started</div>
      <input onChange={updateFirst} type="text" placeholder='first name' required />
      <input onChange={updateLast} type="text" placeholder='last name' required />
      <input onChange={updateUsername} type="text" placeholder='username' required />
      <input onChange={updatePassword} type="password" placeholder='password' required />
      <button onClick={clickHandler}>Sign up</button>
      {/* {(status === 'hello' &&
        <Link to="/App">Sign Up</Link>
      )}
      {(status !== 'hello' &&
        <Link to="/SignUp">Sign Up</Link>  
      )} */}

      {/* Uncomment below to DEMO */}
      {/* <Link to="/App">Sign Up</Link> */}
      <div id='signuplink'>
        Have an account?  
        <Link to="/">
          Log in
        </Link>
      </div>
    </div>
  )
}

function Nav() {
  return (

    <nav>
      <h1>Welcome to just Breathe beta version 0.1.99</h1>
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