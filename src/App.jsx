import React from 'react'
import { useState, useEffect } from 'react'
import AppNav from './components/AppNav'
import Geofencing from './pages/Geofencing'
import Auth from './pages/Auth'
import SOS from './pages/SOS'
import Chatbot from './pages/chatbot'
import Report from './pages/Report'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div>

      {/* <AppNav/> */}

      {/* Page Routing */}
      <Routes>
  <Route path="/Geofencing" element={<Geofencing />} />
  <Route path="/Chatbot" element={<Chatbot />} />
  <Route path="/Report" element={<Report />} />
  <Route path="/SOS" element={<SOS />} />
  <Route path="/Auth" element={<Auth />} />
</Routes>


    </div>

  )
}

export default App


      // {/* <Geofencing/> */}
      // {/* <Auth/> */}
      // {/* <SOS/> */}
      // {/* <Chatbot/> */}
      // <Report/>
