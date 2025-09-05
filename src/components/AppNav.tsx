

import React from "react";
import { Link } from "react-router-dom";  

const AppNav = () => {
  return (
    <>
      <div className="px-4 py-2 flex flex-row justify-between items-center bg-gray-100 shadow">
        
        <div className="text-gray-700 text-2xl font-bold flex items-center gap-2">
          <i className="fa-solid fa-shield text-blue-600"></i>
          <span>SafeTour</span>
        </div>


        <div className="flex gap-6 text-gray-700">
          <Link to="/Geofencing" className="flex items-center gap-2 hover:text-blue-600">
            <i className="fa-solid fa-location-dot"></i>
            <span>Geofencing</span>
          </Link>

          <Link to="/Chatbot" className="flex items-center gap-2 hover:text-blue-600">
            <i className="fa-solid fa-comments"></i>
            <span>Help Chatbot</span>
          </Link>

          <Link to="/Report" className="flex items-center gap-2 hover:text-blue-600">
            <i className="fa-regular fa-flag"></i>
            <span>Incident Report</span>
          </Link>

          <Link to="/SOS" className="flex items-center gap-2 hover:text-blue-600">
            <i className="fa-solid fa-bell"></i>
            <span>SOS</span>
          </Link>

          <Link to="/Auth" className="flex items-center gap-2 hover:text-blue-600">
            <i className="fa-solid fa-file"></i>
            <span>Authentication</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AppNav;

