/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import './dashboard.css'
import logo from '../../assets/logo.png'
import img1 from '../../assets/chat.png'
import img2 from '../../assets/image.png'
import img3 from '../../assets/code.png'
import buttonimg from '../../assets/arrow.png'
import axios from 'axios';
const dashboard = () => {

  const userId = "123RRR22258";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    if (!text) return;
  
    try {
      const response = await axios.post('http://localhost:3000/api/chats', {userId, text });
      console.log(response.data);
    } catch (error) {
      console.error('There was an error!', error);
    }
  }
  
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
            <span>Download Report</span>
          </div>
          <div className="option">
            <img src={img3} alt="option 1" />
            <span>Help me with my Code</span>
          </div>
        </div>
      </div>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <input type="text" name='text' placeholder='Ask me Eroor or Help' />
          <button>
            <img src={buttonimg} alt="submit" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default dashboard