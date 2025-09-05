// import React from "react";
// import AppNav from "../components/AppNav";

// const Geofencing = () => {
//   return (
//     <>
      
//       <AppNav />

//       {/* Main Content */}
//       <div className="p-6 bg-gray-50 min-h-screen">
//         {/* Header Section */}
//         <div className="bg-white shadow rounded-xl p-6 flex justify-between items-start">
//           {/* Left side - Title & Description */}
//           <div>
//             <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
//               <i className="fa-solid fa-shield text-blue-600"></i>
//               Geofencing
//             </h1>
//             <p className="text-gray-500 mt-2">
//               Define safe perimeters, get breach alerts, and view nearby risk
//               zones in real-time.
//             </p>
//           </div>

//           {/* Right side - Status Badge */}
//           <div className="flex items-center gap-2">
//             <span className="text-gray-500 font-semibold uppercase text-sm">
//               Status
//             </span>
//             <span className="bg-blue-100 text-blue-600 font-semibold px-3 py-1 rounded-lg text-sm">
//               Active Monitoring
//             </span>
//           </div>
//         </div>

//         {/* Map Section */}
//         <div className="bg-white shadow rounded-xl mt-6 p-6">
//           <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
//             <i className="fa-solid fa-location-dot text-purple-600"></i>
//             Live Map & Zones
//           </h2>
//           <p className="text-gray-500 text-sm mt-1">
//             Real-time location with safe zones and restricted perimeters.
//           </p>

//           {/* Heatmap / Image Placeholder */}
//           <div className="mt-4">
//             <img
//               src="./assets/images/heatmap.jpg"// Replace 
//               alt="Heatmap"
//               className="w-full h-[400px] object-cover rounded-lg border border-gray-200"
//             />
//           </div>
//         </div>

//         {/* 📌 Bottom Section (Recent Alerts / Reports) */}
//         <div className="bg-white shadow rounded-xl mt-6 p-6">
//           <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
//             <i className="fa-solid fa-bell text-red-600"></i>
//             Recent Alerts & Reports
//           </h2>
//           <p className="text-gray-500 text-sm mt-1">
//             Stay updated with the latest breach alerts and incident reports.
//           </p>

//           {/* Alerts List */}
//           <div className="mt-4 space-y-3">
//             {/* Example Alert Item */}
//             <div className="flex items-center justify-between border rounded-lg p-3 hover:bg-gray-50">
//               <div className="flex items-center gap-3">
//                 <i className="fa-solid fa-triangle-exclamation text-red-500"></i>
//                 <div>
//                   <p className="font-semibold text-gray-700">
//                     Zone Breach Detected
//                   </p>
//                   <p className="text-xs text-gray-500">Location: North Gate</p>
//                 </div>
//               </div>
//               <span className="text-xs text-gray-400">2 mins ago</span>
//             </div>

//             <div className="flex items-center justify-between border rounded-lg p-3 hover:bg-gray-50">
//               <div className="flex items-center gap-3">
//                 <i className="fa-solid fa-flag text-yellow-500"></i>
//                 <div>
//                   <p className="font-semibold text-gray-700">
//                     Incident Reported
//                   </p>
//                   <p className="text-xs text-gray-500">Unauthorized access attempt</p>
//                 </div>
//               </div>
//               <span className="text-xs text-gray-400">10 mins ago</span>
//             </div>

//             <div className="flex items-center justify-between border rounded-lg p-3 hover:bg-gray-50">
//               <div className="flex items-center gap-3">
//                 <i className="fa-solid fa-circle-check text-green-500"></i>
//                 <div>
//                   <p className="font-semibold text-gray-700">
//                     Safe Zone Confirmed
//                   </p>
//                   <p className="text-xs text-gray-500">All clear in West Block</p>
//                 </div>
//               </div>
//               <span className="text-xs text-gray-400">30 mins ago</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Geofencing;

import React from "react";
import AppNav from "../components/AppNav";

const Geofencing = () => {
  return (
    <>
      <AppNav />

      {/* Main Content */}
      <div className="p-4 md:p-6 bg-gray-50 min-h-screen">
        {/* Header Section */}
        <div className="bg-white shadow rounded-xl p-4 md:p-6 flex flex-col md:flex-row md:justify-between md:items-start gap-4">
          {/* Left side - Title & Description */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2 md:gap-3">
              <i className="fa-solid fa-shield text-blue-600"></i>
              Geofencing
            </h1>
            <p className="text-gray-500 mt-2 text-sm md:text-base">
              Define safe perimeters, get breach alerts, and view nearby risk
              zones in real-time.
            </p>
          </div>

          {/* Right side - Status Badge */}
          <div className="flex items-center gap-2 self-start md:self-center">
            <span className="text-gray-500 font-semibold uppercase text-xs md:text-sm">
              Status
            </span>
            <span className="bg-blue-100 text-blue-600 font-semibold px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm">
              Active Monitoring
            </span>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white shadow rounded-xl mt-6 p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-bold text-gray-800 flex items-center gap-2">
            <i className="fa-solid fa-location-dot text-purple-600"></i>
            Live Map & Zones
          </h2>
          <p className="text-gray-500 text-xs md:text-sm mt-1">
            Real-time location with safe zones and restricted perimeters.
          </p>

          {/* Heatmap / Image Placeholder */}
          <div className="mt-4">
            <img
              src="./assets/images/heatmap.jpg" // Replace
              alt="Heatmap"
              className="w-full h-48 md:h-[400px] object-cover rounded-lg border border-gray-200"
            />
          </div>
        </div>

        {/* 📌 Bottom Section (Recent Alerts / Reports) */}
        <div className="bg-white shadow rounded-xl mt-6 p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-bold text-gray-800 flex items-center gap-2">
            <i className="fa-solid fa-bell text-red-600"></i>
            Recent Alerts & Reports
          </h2>
          <p className="text-gray-500 text-xs md:text-sm mt-1">
            Stay updated with the latest breach alerts and incident reports.
          </p>

          {/* Alerts List */}
          <div className="mt-4 space-y-3">
            {/* Example Alert Item */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border rounded-lg p-3 hover:bg-gray-50 gap-2">
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-triangle-exclamation text-red-500"></i>
                <div>
                  <p className="font-semibold text-gray-700">
                    Zone Breach Detected
                  </p>
                  <p className="text-xs text-gray-500">Location: North Gate</p>
                </div>
              </div>
              <span className="text-xs text-gray-400">2 mins ago</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border rounded-lg p-3 hover:bg-gray-50 gap-2">
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-flag text-yellow-500"></i>
                <div>
                  <p className="font-semibold text-gray-700">
                    Incident Reported
                  </p>
                  <p className="text-xs text-gray-500">
                    Unauthorized access attempt
                  </p>
                </div>
              </div>
              <span className="text-xs text-gray-400">10 mins ago</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border rounded-lg p-3 hover:bg-gray-50 gap-2">
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-green-500"></i>
                <div>
                  <p className="font-semibold text-gray-700">
                    Safe Zone Confirmed
                  </p>
                  <p className="text-xs text-gray-500">
                    All clear in West Block
                  </p>
                </div>
              </div>
              <span className="text-xs text-gray-400">30 mins ago</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Geofencing;
