
import React from "react";
import AppNav from "../components/AppNav";

const IncidentReport = () => {
  return (
    <>
    <AppNav/>
    <div className="px-6 py-6">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2 text-gray-800">
            <i className="fa-solid fa-circle-exclamation text-indigo-500"></i>
            Incident Reporting
          </h1>
          <p className="text-gray-600 text-sm mt-1">
            File structured, timestamped reports with media and precise location.
          </p>
        </div>
        <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm">
          AVG. REVIEW TIME <span className="font-semibold">12 min</span>
        </div>
      </div>

      {/* Report Form */}
      <div className="bg-blue-50 rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold flex items-center gap-2 text-gray-800 mb-4">
          <i className="fa-solid fa-clipboard-list text-indigo-500"></i>
          Report an Incident
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Quickly file a report with details, media, and location.
        </p>

        <form className="space-y-4">
          {/* Incident Type & Date-Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Incident Type
              </label>
              <input
                type="text"
                placeholder="e.g., Theft, Harassment, Lost Item"
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Date &amp; Time
              </label>
              <input
                type="datetime-local"
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Location with Button */}
          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Auto-detected location or enter manually"
                className="flex-1 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
              <button
                type="button"
                className="flex items-center gap-2 px-3 py-2 border rounded-lg bg-white hover:bg-gray-50"
              >
                <i className="fa-solid fa-location-dot text-indigo-500"></i>
                Use My Location
              </button>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              placeholder="Describe what happened…"
              rows="4"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700"
            >
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default IncidentReport;
