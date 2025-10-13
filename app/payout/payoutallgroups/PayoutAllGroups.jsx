"use client";
import React from "react";

export default function PayoutAllGroups() {
  const rows = [
    { group: "Cognivaa IT – Full-Time SDE-I", dept: "IT Department", amount: "₹2,23,432.00" },
    { group: "Civil Surveyors", dept: "Real-Estate", amount: "₹2,23,432.00" },
    { group: "Civil Surveyors", dept: "Real-Estate", amount: "₹2,23,432.00" },
    { group: "Cognivaa IT – Full-Time SDE-I", dept: "IT Department", amount: "₹2,23,432.00" },
    { group: "Civil Surveyors", dept: "Real-Estate", amount: "₹2,23,432.00" },
    { group: "Civil Surveyors", dept: "Real-Estate", amount: "₹2,23,432.00" },
  ];

  return (
    <div className="min-h-screen bg-white flex justify-center px-2 sm:px-4 md:px-8 py-8">
      <div className="w-full max-w-[1100px]">
        {/* HEADER */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h2 className="text-gray-800 font-semibold text-lg md:text-xl">
            Payouts &rsaquo; All Groups
          </h2>

          <div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2 shadow-inner w-full md:w-auto">
            <span className="w-8 h-8 bg-gray-900 rounded-full inline-block"></span>
            <span className="text-sm md:text-base font-medium text-gray-700 whitespace-nowrap">
              Pioneer Geoscience Private Limited
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </header>

        {/* FILTER + SEARCH */}
        <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex gap-3">
            <button className="px-5 py-2 bg-gray-100 text-gray-800 rounded-full shadow-sm hover:bg-gray-200 transition">
              Filters
            </button>
            <button className="px-5 py-2 bg-gray-100 text-gray-800 rounded-full shadow-sm hover:bg-gray-200 transition">
              Sort By
            </button>
          </div>

          <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 w-full md:w-64">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1117.5 9a7.5 7.5 0 01-0.85 7.65z"
              />
            </svg>
            <input
              type="text"
              placeholder="Keywords"
              className="outline-none w-full text-sm text-gray-600 bg-transparent placeholder-gray-400"
            />
          </div>
        </section>

        {/* TABLE */}
        <section className="overflow-x-auto">
          <div className="min-w-[900px]">
            {/* Header (hidden on small screens) */}
            <div
              className="
                hidden md:grid
                grid-cols-[2fr_1fr_1fr_1fr]
                text-gray-500 uppercase text-xs tracking-wider
                px-8 py-3 border-b border-gray-200
                bg-white sticky top-0 z-10
              "
            >
              <div>Groups</div>
              <div className="text-center">Department</div>
              <div className="text-center">Amount</div>
              <div className="text-right mr-6">Action</div>
            </div>

            {/* Rows */}
            <div className="space-y-3">
              {rows.map((row, i) => (
                <div
                  key={i}
                  className="
                    grid md:grid-cols-[2fr_1fr_1fr_1fr]
                    grid-cols-1
                    items-center px-6 py-4
                    bg-gradient-to-b from-gray-100 to-gray-50
                    rounded-2xl shadow-inner
                    hover:bg-gray-100 hover:shadow-md
                    transition-all duration-200
                    text-sm
                  "
                >
                  {/* Desktop layout */}
                  <div className="hidden md:block text-gray-800 font-medium truncate">
                    {row.group}
                  </div>
                  <div className="hidden md:block text-gray-600 text-center truncate">
                    {row.dept}
                  </div>
                  <div className="hidden md:block text-gray-800 text-center font-semibold truncate">
                    {row.amount}
                  </div>
                  <div className="hidden md:flex justify-end">
                    <button className="text-gray-700 hover:text-gray-900 text-sm font-medium flex items-center justify-end gap-1 whitespace-nowrap">
                      View Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                  {/* Mobile layout */}
                  <div className="md:hidden space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Group:</span>
                      <span className="text-gray-800 font-medium">{row.group}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Department:</span>
                      <span className="text-gray-600">{row.dept}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Amount:</span>
                      <span className="text-gray-800 font-semibold">{row.amount}</span>
                    </div>
                    <div className="flex justify-end mt-2">
                      <button className="text-gray-700 hover:text-gray-900 text-sm font-medium flex items-center justify-end gap-1 whitespace-nowrap">
                        View Details
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
