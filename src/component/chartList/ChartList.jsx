/* eslint-disable no-unused-vars */
import React from 'react'
import './ChartList.css'
import { Link } from 'react-router-dom'
const ChartList = () => {
  return (
    <div className='chartList'>
        <span className='title'>DASHBOARD</span>
        <Link to ='/dashboard' >Create a New Chat</Link>
        <Link to ='/'>Explore Lama AI</Link>
        <Link to ='/'>Contact</Link>
        <hr/>
        <span className='title'>RECENT CHATS</span>
        <div className="list">
        <Link to ='/' className='link'>My chat title</Link>
        <Link to ='/' className='link'>My chat title</Link>
        <Link to ='/' className='link'>My chat title</Link>
        <Link to ='/' className='link'>My chat title</Link>
        <Link to ='/' className='link'>My chat title</Link>
        <Link to ='/' className='link'>My chat title</Link>
        <Link to ='/' className='link'>My chat title</Link>
        <Link to ='/' className='link'>My chat title</Link>
        <Link to ='/' className='link'>My chat title</Link>
        <Link to ='/' className='link'>My chat title</Link>
        </div>
        <hr/>
       
    </div>
  )
}

export default ChartList