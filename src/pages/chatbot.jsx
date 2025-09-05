import React from "react";
import AppNav from "../components/AppNav";

const Chatbot = () => {
  return (
    <>
    <AppNav/>
    <div className="px-6 py-6">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold flex items-center gap-2 text-gray-800">
          <i className="fa-solid fa-robot text-indigo-500"></i>
          Emergency Help Chatbot
        </h1>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Side - Chat Window */}
        <div className="md:col-span-2 bg-white rounded-xl shadow p-6 flex flex-col">
          {/* Chat Messages */}
          <div className="flex-1 border rounded-lg p-4 mb-4 bg-gray-50">
            <div className="bg-white border rounded-lg px-4 py-2 shadow w-fit text-gray-800">
              Hi! I’m your safety assistant. How can I help?
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mb-4">
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
              <i className="fa-solid fa-location-dot"></i> Share Location
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
              <i className="fa-solid fa-phone"></i> Call 112
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg bg-red-500 text-white hover:bg-red-600">
              <i className="fa-solid fa-bell"></i> SOS
            </button>
          </div>

          {/* Input Box */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Describe your situation…"
              className="flex-1 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            <button className="bg-indigo-600 text-white px-4 rounded-lg hover:bg-indigo-700">
              Send
            </button>
          </div>
        </div>

        {/* Right Side - Flow & Quick Actions */}
        <div className="space-y-4">
          {/* Flow Overview */}
          <div className="bg-blue-50 rounded-xl p-4 shadow">
            <h3 className="font-semibold text-lg mb-2">Flow Overview</h3>
            <p className="text-sm text-gray-600 mb-3">
              AI triages queries, fetches safety tips, and can trigger SOS or open a report.
            </p>
            <div className="border rounded-lg bg-white flex justify-center items-center h-40">
              <img
                src="https://via.placeholder.com/200x150"
                alt="Flow Diagram"
                className="max-h-36"
              />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-blue-50 rounded-xl p-4 shadow">
            <h3 className="font-semibold text-lg mb-2">Quick Actions</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Translate to local language</li>
              <li>Nearest police station/hospital</li>
              <li>Safety checklist for current location</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Chatbot;
