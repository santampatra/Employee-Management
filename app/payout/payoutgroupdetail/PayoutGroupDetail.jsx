"use client";
import React from "react";

export default function PayoutGroupDetail() {
  const payouts = [
    { id: "#85134", month: "March", releaseDate: "02/03/2025", hours: "930 Hours", amount: "₹12,23,432.00" },
    { id: "#85135", month: "April", releaseDate: "02/04/2025", hours: "910 Hours", amount: "₹12,23,432.00" },
    { id: "#85136", month: "May", releaseDate: "02/05/2025", hours: "920 Hours", amount: "₹12,23,432.00" },
    { id: "#85137", month: "June", releaseDate: "02/06/2025", hours: "905 Hours", amount: "₹12,23,432.00" },
    { id: "#85138", month: "August", releaseDate: "02/08/2025", hours: "930 Hours", amount: "₹12,23,432.00" },
  ];

  const markedDates = [5, 12, 16, 19, 26];

  return (
    <div className="min-h-screen bg-[#ffffff] flex justify-center px-3 sm:px-6 md:px-10 py-8">
      <div className="w-full max-w-[1100px]">
        {/* === HEADER === */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <h2 className="text-gray-800 font-semibold text-lg md:text-xl">
            Payouts &rsaquo; Group Detail
          </h2>

          <div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2 shadow-inner w-full md:w-auto">
            <span className="w-8 h-8 bg-gray-900 rounded-full inline-block"></span>
            <span className="text-sm md:text-base font-medium text-gray-700 whitespace-nowrap">
              Pioneer Geoscience Private Limited
            </span>
          </div>
        </header>

        {/* === DETAIL INFO + STATUS === */}
        <section className="grid grid-cols-1 md:grid-cols-9 gap-6 mb-10">
          {/* LEFT INFO */}
          <div className="md:col-span-5 bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">SELECTED ID</span>
                <span className="font-semibold text-gray-800">953872E</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">GROUP TITLE</span>
                <span className="font-semibold text-gray-800">
                  Cognivaa IT – Full-Time SDE-I
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">RECOMMENDED BY</span>
                <span className="font-semibold text-gray-800">Mr. John Doe</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">EMPLOYEE COUNT</span>
                <span className="font-semibold text-gray-800">4</span>
              </div>
            </div>
          </div>

          {/* STATUS CARD */}
          <div className="md:col-span-2 bg-green-900 text-white p-6 rounded-2xl shadow-md flex flex-col justify-center">
            <div className="text-xs opacity-80 uppercase tracking-wide">
              Status: Upcoming Payout
            </div>
            <h3 className="text-lg font-semibold mt-2 leading-snug">
              Ready To Transfer Salary
            </h3>
          </div>

          {/* DELAY CARD */}
          <div className="md:col-span-2 bg-gradient-to-br from-orange-600 to-red-500 text-white p-6 rounded-2xl shadow-md flex flex-col justify-center">
            <div className="text-xs opacity-80 uppercase tracking-wide">Delays</div>
            <h3 className="text-lg font-semibold mt-2 leading-snug">
              3 Delays Detected
            </h3>
          </div>
        </section>

        {/* === PAYOUT TABLE === */}
        <section className="overflow-x-auto mb-12">
          <div className="min-w-[900px]">
            {/* Table Header */}
            <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] text-gray-500 uppercase text-xs tracking-wider px-8 py-3 border-b border-gray-200">
              <div>Payout ID</div>
              <div>Month</div>
              <div>Release Date</div>
              <div>Billable Hours</div>
              <div className="text-center">Amount</div>
              <div className="text-right">Action</div>
            </div>

            {/* Table Rows */}
            <div className="space-y-3">
              {payouts.map((row, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] items-center px-8 py-4 bg-gradient-to-b from-gray-100 to-gray-50 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <div className="text-gray-800 font-medium">{row.id}</div>
                  <div className="text-gray-600">{row.month}</div>
                  <div className="text-gray-600">{row.releaseDate}</div>
                  <div className="text-gray-600">{row.hours}</div>
                  <div className="text-gray-800 text-center font-semibold">{row.amount}</div>
                  <div className="flex justify-end">
                    <button className="text-gray-700 hover:text-gray-900 text-sm font-medium flex items-center gap-1 whitespace-nowrap">
                      View Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === CALENDAR SECTION === */}
        <section className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-gray-700 font-semibold">Release Calendar</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>August</span>
              <span className="font-semibold text-gray-800">September</span>
              <span>October</span>
            </div>
          </div>

          {/* Weekdays */}
          <div className="grid grid-cols-7 text-center text-gray-500 uppercase text-xs mb-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 text-center gap-2 text-sm">
            {Array.from({ length: 30 }, (_, i) => {
              const day = i + 1;
              const isMarked = markedDates.includes(day);
              return (
                <div
                  key={day}
                  className={`p-2 rounded-lg ${
                    isMarked
                      ? "bg-orange-500 text-white font-bold"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
