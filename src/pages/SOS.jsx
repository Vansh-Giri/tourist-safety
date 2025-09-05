// import React from "react";
// import AppNav from "../components/AppNav";

// const SOS = () => {
//   return (
//     <>
//     <AppNav/>
//     <div className="px-6 py-6">
//       {/* Page Header */}
//       <div className="mb-6">
//         <h1 className="text-3xl font-bold flex items-center gap-2 text-gray-800">
//           <i className="fa-solid fa-bell text-red-500"></i>
//           SOS
//         </h1>
//         <p className="text-gray-600">
//           Immediate assistance with live tracking, silent alerts, and contact notifications.
//         </p>
//       </div>

//       {/* Main Content */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Left Side - SOS Button Section */}
//         <div className="md:col-span-2 bg-white rounded-xl shadow p-6">
//           <h2 className="text-xl font-semibold flex items-center gap-2 mb-2">
//             <i className="fa-solid fa-bell text-red-500"></i> SOS
//           </h2>
//           <p className="text-sm text-gray-500 mb-4">
//             One-tap emergency alert with live location sharing.
//           </p>

//           {/* SOS Button */}
//           <div className="flex justify-center items-center mb-6">
//             <div className="relative">
//               <div className="absolute inset-0 rounded-full bg-red-200 animate-ping"></div>
//               <button className="relative z-10 w-40 h-40 rounded-full border-4 border-red-500 text-red-600 text-3xl font-bold bg-red-50 hover:bg-red-100">
//                 SOS
//               </button>
//             </div>
//           </div>
//           <p className="text-center text-gray-500 text-sm mb-6">
//             Hold for 2s to trigger SOS.
//           </p>

//           {/* Actions */}
//           <div className="flex flex-wrap gap-3 justify-center">
//             <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
//               <i className="fa-solid fa-location-dot"></i> Share Live Location
//             </button>
//             <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
//               <i className="fa-solid fa-user-group"></i> Notify Trusted Contacts
//             </button>
//             <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
//               <i className="fa-solid fa-bell-slash"></i> Silent Alert
//             </button>
//           </div>

//           {/* Arm SOS Button */}
//           <div className="mt-4 flex items-center justify-center gap-2">
//             <input type="checkbox" defaultChecked className="h-4 w-4" />
//             <span className="text-sm text-gray-700">Arm SOS button</span>
//           </div>
//         </div>

//         {/* Right Side - Info Cards */}
//         <div className="space-y-4">
//           <div className="bg-blue-50 rounded-xl p-4 shadow">
//             <h3 className="font-semibold text-lg">Auto-Sharing</h3>
//             <p className="text-sm text-gray-600">
//               Location + last 5 minutes movement trail.
//             </p>
//           </div>

//           <div className="bg-blue-50 rounded-xl p-4 shadow">
//             <h3 className="font-semibold text-lg">Escalation</h3>
//             <p className="text-sm text-gray-600">
//               If unanswered in 60s, notify authorities.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default SOS;
import React from "react";
import AppNav from "../components/AppNav";

const SOS = () => {
  return (
    <>
      <AppNav />
      <div className="px-4 md:px-6 py-6">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2 text-gray-800">
            <i className="fa-solid fa-bell text-red-500"></i>
            SOS
          </h1>
          <p className="text-sm md:text-base text-gray-600 mt-1">
            Immediate assistance with live tracking, silent alerts, and contact notifications.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Side - SOS Button Section */}
          <div className="md:col-span-2 bg-white rounded-xl shadow p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold flex items-center gap-2 mb-2">
              <i className="fa-solid fa-bell text-red-500"></i> SOS
            </h2>
            <p className="text-xs md:text-sm text-gray-500 mb-4">
              One-tap emergency alert with live location sharing.
            </p>

            {/* SOS Button */}
            <div className="flex justify-center items-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-red-200 animate-ping"></div>
                <button className="relative z-10 w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-red-500 text-red-600 text-2xl md:text-3xl font-bold bg-red-50 hover:bg-red-100">
                  SOS
                </button>
              </div>
            </div>
            <p className="text-center text-gray-500 text-xs md:text-sm mb-6">
              Hold for 2s to trigger SOS.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 justify-center">
              <button className="flex items-center justify-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 w-full sm:w-auto">
                <i className="fa-solid fa-location-dot"></i> Share Live Location
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 w-full sm:w-auto">
                <i className="fa-solid fa-user-group"></i> Notify Trusted Contacts
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 w-full sm:w-auto">
                <i className="fa-solid fa-bell-slash"></i> Silent Alert
              </button>
            </div>

            {/* Arm SOS Button */}
            <div className="mt-4 flex items-center justify-center gap-2">
              <input type="checkbox" defaultChecked className="h-4 w-4" />
              <span className="text-xs md:text-sm text-gray-700">Arm SOS button</span>
            </div>
          </div>

          {/* Right Side - Info Cards */}
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-xl p-4 shadow">
              <h3 className="font-semibold text-base md:text-lg">Auto-Sharing</h3>
              <p className="text-xs md:text-sm text-gray-600">
                Location + last 5 minutes movement trail.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-4 shadow">
              <h3 className="font-semibold text-base md:text-lg">Escalation</h3>
              <p className="text-xs md:text-sm text-gray-600">
                If unanswered in 60s, notify authorities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SOS;
