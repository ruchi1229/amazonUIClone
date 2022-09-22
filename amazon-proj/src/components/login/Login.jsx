import React, { useContext, useEffect, useState } from 'react';
import './login.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme, useThemeUpdate } from '../../UserContextComponent';
//import { withRouter } from 'react-router';

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const usernameFinal = useTheme();
  const updateusernameFinal = useThemeUpdate();

  const navigate = useNavigate()

  function handleUsernameChange(event) {
    setUsername(event.target.value)
  }

  function validateUsername () {
    if (!username.includes("@")) {
      alert("Invalid Email")
      return
    }
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value)
  }

  function validatePasswordChange(event) {
    const re = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})")
    if (!re.test(event.target.value)) {
      alert("Invalid password: Please include at least 1 Uppercase, 1 lowercase, 1 number and 1 character")
      return
    }
  }

  function handleSubmit(event) {
    let res;
    axios.post("/auth",
      {
        username: username,
        password: password
      }).then(response => {
      //alert(`${response.data}: ${username} ${password}`)
      updateusernameFinal(username)
      console.log(usernameFinal)
    })
    event.preventDefault()
    setTimeout(() => {
      navigate("/explore")
    }, 1000)
  }
 
    return (
      <div className='a__login'>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input 
            type="text" 
            value={username} 
            onChange={handleUsernameChange} 
            onBlur={validateUsername}
          />
          <br />
          <label>Password</label>
          <input 
            type="text" 
            value={password} 
            onChange={handlePasswordChange} 
            onBlur={validatePasswordChange}
          />
          <br />
          <button type="submit">Login</button>
          <Link to="/explore">Main</Link>
        </form>
      </div>
    )
  }
