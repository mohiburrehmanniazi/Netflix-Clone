/* eslint-disable no-dupe-else-if */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './logIn.css'
import LogInBackground from '../assets/LogInBackground.jpg'
import { useNavigate } from 'react-router-dom'
import NetflixLogo from '../assets/NetflixLogo.png';
import Modal from './Modal';

function LogIn() {
    const u_name = "leadingcoders"
    const pass = "leadingcoders"

    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [openModal, setOpenModal] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault()
        if (username == "" && password == "") {
            setOpenModal(true)
        } else if (username !== u_name && password !== pass) {
            setOpenModal(true)
        } else if (username == "") {
            setOpenModal(true)
        } else if (password == "") {
            setOpenModal(true)
        } else if (username != u_name) {
            setOpenModal(true)
        } else if (password != pass) {
            setOpenModal(true)
        } else if (username === u_name && password === pass) {
            navigate('/home')
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
                    marginTop: '8em',
                    position: 'absolute',
                    marginLeft: '550px',
                    marginTop: '40px',
                }}>
                    <form className="form" onSubmit={submitHandler}>
                        <div className="heading ">
                            <h1 className='heading1'>Sign In</h1>
                        </div>
                        <div className="info1">
                            <input type="text" placeholder='Username' onChange={
                                (e) => { setUsername(e.target.value) }} />
                        </div>
                        <div className="info2">
                            <input type="password" placeholder='Password' onChange={
                                (e) => { setPassword(e.target.value) }} />
                        </div>
                        <button className='btn'>Sign In</button>
                        <div className="text">
                            <p className='text1'>This page is protected by Google reCAPTCHA to ensure you are not a bot.<a href='https://www.google.com/recaptcha/about/'>Learn More.</a></p>
                        </div>
                    </form>
                </div>
                {openModal && (
                    <Modal
                        closeModal={setOpenModal}
                        message={
                            username === '' || password === ''
                                ? 'Please enter both username and password.'
                                : username !== u_name && password !== pass
                                    ? 'Incorrect password. Please try again.'
                                    : "Sorry, we can't find an account with this username. Please try again."
                        }
                    />
                )}
            </div>

        </>
    )
}

export default LogIn