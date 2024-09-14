/* eslint-disable no-unused-vars */
import React from 'react'
import './rootlayout.css'
import { Link, Outlet } from 'react-router-dom'
import logo from '../../assets/logo.png'

const RootLayout = () => {
    return (
        <div className="rootLayout">
            <header>
                <Link to="/" className='logo'>
                    <img src={logo} alt="logo" />
                    <span>PRO MENTER</span>
                </Link>
                <div className="user">
                    User
                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout
