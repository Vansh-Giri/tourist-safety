

// import React from "react";
// import { Link } from "react-router-dom";  

// const AppNav = () => {
//   return (
//     <>
//       <div className="px-4 py-2 flex flex-row justify-between items-center bg-gray-100 shadow">
        
//         <div className="text-gray-700 text-2xl font-bold flex items-center gap-2">
//           <i className="fa-solid fa-shield text-blue-600"></i>
//           <span>SafeTour</span>
//         </div>


//         <div className="flex gap-6 text-gray-700">
//           <Link to="/Geofencing" className="flex items-center gap-2 hover:text-blue-600">
//             <i className="fa-solid fa-location-dot"></i>
//             <span>Geofencing</span>
//           </Link>

//           <Link to="/Chatbot" className="flex items-center gap-2 hover:text-blue-600">
//             <i className="fa-solid fa-comments"></i>
//             <span>Help Chatbot</span>
//           </Link>

//           <Link to="/Report" className="flex items-center gap-2 hover:text-blue-600">
//             <i className="fa-regular fa-flag"></i>
//             <span>Incident Report</span>
//           </Link>

//           <Link to="/SOS" className="flex items-center gap-2 hover:text-blue-600">
//             <i className="fa-solid fa-bell"></i>
//             <span>SOS</span>
//           </Link>

//           <Link to="/Auth" className="flex items-center gap-2 hover:text-blue-600">
//             <i className="fa-solid fa-file"></i>
//             <span>Authentication</span>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AppNav;

import React from "react";
import { Link } from "react-router-dom";

const AppNav = () => {
  return (
    <>
      <div className="px-4 py-2 flex flex-col md:flex-row md:justify-between md:items-center bg-gray-100 shadow gap-4">
        
        {/* Logo Section */}
        <div className="text-gray-700 text-2xl font-bold flex items-center gap-2 justify-center md:justify-start">
          <i className="fa-solid fa-shield text-blue-600"></i>
          <span>SafeTour</span>
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-gray-700 items-center">
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

