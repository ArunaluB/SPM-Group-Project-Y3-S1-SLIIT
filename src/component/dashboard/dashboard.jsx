/* eslint-disable no-unused-vars */
import React from 'react'
import './dashboard.css'
import logo from '../../assets/logo.png'
import img1 from '../../assets/chat.png'
import img2 from '../../assets/image.png'
import img3 from '../../assets/code.png'
import buttonimg from '../../assets/arrow.png'
const dashboard = () => {
  return (
    <div className="dashboardPage">
      <div className="texts">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h1>PRO MENTER</h1>
        </div>
        <div className="options">
          <div className="option">
            <img src={img1} alt="option 1" />
            <span>Create a New Chat</span>
          </div>
          <div className="option">
            <img src={img2} alt="option 1" />
            <span>Upload Image</span>
          </div>
          <div className="option">
            <img src={img3} alt="option 1" />
            <span>Help me with my Code</span>
          </div>
        </div>
      </div>
      <div className="formContainer">
        <form action="">
          <input type="text" placeholder='Ask me Eroor or Help' />
          <button>
            <img src={buttonimg} alt="submit" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default dashboard