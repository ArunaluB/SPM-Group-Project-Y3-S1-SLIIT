/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet, useNavigate } from "react-router-dom";
import './dashboardLayout.css'
import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import ChartList from '../../component/chartList/ChartList'
const dashboardLayout = () => {

  const { userId, isLoaded } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded, userId, navigate]);

  if (!isLoaded) return "Loading...";

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