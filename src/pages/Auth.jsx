
// import React from "react";
// import AppNav from "../components/AppNav";


// const Authentication = () => {
//   return (
//     <>
//     <AppNav/>

//     <div className="px-6 py-6">
//       {/* Page Header */}
//       <div className="mb-6">
//         <h1 className="text-3xl font-bold flex items-center gap-2 text-gray-800">
//           <i className="fa-solid fa-shield text-indigo-500"></i>
//           Authentication
//         </h1>
//         <p className="text-gray-600">
//           Secure sign in with blockchain-backed Digital ID for trusted travel.
//         </p>
//       </div>

//       {/* Main Content */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Sign In Card */}
//         <div className="bg-white rounded-xl shadow p-6">
//           <h2 className="text-xl font-semibold mb-2">Sign In</h2>
//           <p className="text-sm text-gray-500 mb-4">
//             Welcome back. Your credentials are encrypted at rest.
//           </p>

//           <form className="space-y-4">
//             {/* Email */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 placeholder="you@example.com"
//                 className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
//               />
//             </div>

//             {/* Password */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 placeholder="••••••••"
//                 className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
//               />
//             </div>

//             {/* Remember Me */}
//             <div className="flex items-center justify-between">
//               <label className="flex items-center gap-2 text-sm text-gray-600">
//                 <input type="checkbox" className="h-4 w-4 rounded" />
//                 Remember me
//               </label>
//               <a href="#" className="text-sm text-indigo-500 hover:underline">
//                 Forgot password?
//               </a>
//             </div>

//             {/* Sign In Button */}
//             <button
//               type="submit"
//               className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
//             >
//               Sign In
//             </button>
//           </form>

//           <p className="mt-4 text-sm text-gray-600">
//             New here?{" "}
//             <a href="#" className="text-indigo-500 hover:underline">
//               Create an account
//             </a>
//           </p>
//         </div>

//         {/* Digital ID Card */}
//         <div className="bg-white rounded-xl shadow p-6">
//           <h2 className="text-xl font-semibold mb-2">Digital ID (Preview)</h2>
//           <p className="text-sm text-gray-500 mb-4">
//             Verifiable credential bound to your identity.
//           </p>

//           <div className="border rounded-lg p-4 mb-4 text-sm">
//             <div className="flex justify-between items-center">
//               <span className="text-gray-600">Issuer</span>
//               <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
//                 Verifiable
//               </span>
//             </div>
//             <p className="font-medium text-gray-800">SafeTour Registry</p>

//             <div className="mt-3">
//               <p>
//                 <span className="text-gray-600">Name:</span>{" "}
//                 Tourist (Sample)
//               </p>
//               <p>
//                 <span className="text-gray-600">ID:</span>{" "}
//                 did:st:abcd…1234
//               </p>
//               <p>
//                 <span className="text-gray-600">Issued:</span>{" "}
//                 2025-09-01
//               </p>
//               <p>
//                 <span className="text-gray-600">Status:</span>{" "}
//                 <span className="text-green-600 font-medium">Active</span>
//               </p>
//               <p className="text-xs text-gray-500 mt-2">
//                 Signature: 0x9c2e…afe7 (proof-of-integrity)
//               </p>
//             </div>
//           </div>

//           <button className="w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-50">
//             Scan QR to Link ID
//           </button>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default Authentication;


import React from "react";
import AppNav from "../components/AppNav";

const Auth = () => {
  return (
    <>
      <AppNav />

      <div className="px-4 sm:px-6 py-6">
        {/* Page Header */}
        <div className="mb-6 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold flex items-center justify-center md:justify-start gap-2 text-gray-800">
            <i className="fa-solid fa-shield text-indigo-500"></i>
            Authentication
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Secure sign in with blockchain-backed Digital ID for trusted travel.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sign In Card */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-2">Sign In</h2>
            <p className="text-sm text-gray-500 mb-4">
              Welcome back. Your credentials are encrypted at rest.
            </p>

            <form className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-sm sm:text-base"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-sm sm:text-base"
                />
              </div>

              {/* Remember Me */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" className="h-4 w-4 rounded" />
                  Remember me
                </label>
                <a
                  href="#"
                  className="text-sm text-indigo-500 hover:underline self-end sm:self-auto"
                >
                  Forgot password?
                </a>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 text-sm sm:text-base"
              >
                Sign In
              </button>
            </form>

            <p className="mt-4 text-sm text-gray-600 text-center sm:text-left">
              New here?{" "}
              <a href="#" className="text-indigo-500 hover:underline">
                Create an account
              </a>
            </p>
          </div>

          {/* Digital ID Card */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-2">
              Digital ID (Preview)
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Verifiable credential bound to your identity.
            </p>

            <div className="border rounded-lg p-4 mb-4 text-sm">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <span className="text-gray-600">Issuer</span>
                <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded self-start sm:self-auto">
                  Verifiable
                </span>
              </div>
              <p className="font-medium text-gray-800">SafeTour Registry</p>

              <div className="mt-3 space-y-1">
                <p>
                  <span className="text-gray-600">Name:</span> Tourist (Sample)
                </p>
                <p>
                  <span className="text-gray-600">ID:</span> did:st:abcd…1234
                </p>
                <p>
                  <span className="text-gray-600">Issued:</span> 2025-09-01
                </p>
                <p>
                  <span className="text-gray-600">Status:</span>{" "}
                  <span className="text-green-600 font-medium">Active</span>
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Signature: 0x9c2e…afe7 (proof-of-integrity)
                </p>
              </div>
            </div>

            <button className="w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-50 text-sm sm:text-base">
              Scan QR to Link ID
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
