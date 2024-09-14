/* eslint-disable no-unused-vars */
import React from 'react'
import './dashboardLayout.css'
import { Outlet } from 'react-router-dom'
import ChartList from '../../component/chartList/ChartList'
const dashboardLayout = () => {
  return (
    <div className="dashboardLayout">
        <div className="menu"><ChartList/></div>
        <div className="content">
            <Outlet />
        </div>
    </div>
  )
}

export default dashboardLayout