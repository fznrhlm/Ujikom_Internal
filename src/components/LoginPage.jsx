import React from 'react'
import { Link } from 'react-router-dom'

export const LoginPage = () => {
  return (
    <div className="login">
        <span className="loginMember">Login Member</span>
        <form className="loginForm">
            <label >Username</label>
            <input className="loginInput" 
              type="text" 
              placeholder="enter Your Username"
              />
            <label >Password</label>
            <input className="loginInput" 
              type="password" 
              placeholder="Enter your Password"
              />
            <button className="loginButton" type="submit">Login</button>
        </form>
        <button className="loginRegisterButton"><Link className="link"to="/register">Register</Link></button>
    </div>
  )
}
