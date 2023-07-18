/* eslint-disable no-dupe-else-if */

/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './logIn.css'
import LogInBackground from '../assets/LogInBackground.jpg'
import { useNavigate } from 'react-router-dom'
import NetflixLogo from '../assets/NetflixLogo.png';

function LogIn() {
    const u_name = "leadingcoders"
    const pass = "leadingcoders"

    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        if (username == "" && password == "") {
            alert("Please enter your credentials.")
        } else if (username !== u_name && password !== pass) {
            alert("Please Enter Correct Credentials.")
        } else if (username == "") {
            alert("Please Enter Username.")
        } else if (password == "") {
            alert("Please Enter Password.")
        } else if (username != u_name) {
            alert("Incorrect Username.")
        } else if (password != pass) {
            alert("Incorrect Password.")
        } else if (username === u_name && password === pass) {
            navigate('/')
        }
    }

    return (
        <>
            <div className="" style={{
                height: '100vh',
                width: '100vw',
                backgroundImage: `url(${LogInBackground})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>
                <div className="logo">
                    <img className='netflix_logo' src={NetflixLogo} alt="" />
                </div>
                <div className="" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '8em'
                }}>
                    <form className="form" onSubmit={submitHandler}>
                        <div className="heading">
                            <h1>Sign In</h1>
                        </div>
                        <div className="info1">
                            <input type="text" placeholder='Username' onChange={
                                (e) => { setUsername(e.target.value) }} />
                        </div>
                        <div className="info2">
                            <input type="password" placeholder='Password' onChange={
                                (e) => { setPassword(e.target.value) }} />
                        </div>
                        <button>Sign In</button>
                        <div className="text">
                            <p>This page is protected by Google reCAPTCHA to ensure you are not a bot.<a href='https://www.google.com/recaptcha/about/'>Learn More.</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LogIn