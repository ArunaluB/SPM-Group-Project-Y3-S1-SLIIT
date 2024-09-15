/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react'
import './chatpage.css'
import NewPrompt from '../newPrompt/NewPrompt';

const ChatPage = () => {


  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          <NewPrompt />
        </div>
      </div>
    </div>
  )
}

export default ChatPage;
