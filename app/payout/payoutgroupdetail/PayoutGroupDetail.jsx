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
    <div className="min-h-screen bg-white flex justify-center px-3 sm:px-5 md:px-8 py-6 md:py-8">
      <div className="w-full max-w-[1000px]">
        {/* === HEADER === */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-3">
          <h2 className="text-gray-800 font-semibold text-lg md:text-xl">
            Payouts &rsaquo; Group Detail
          </h2>

          <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1.5 shadow-inner w-full md:w-auto">
            <span className="w-7 h-7 bg-gray-900 rounded-full inline-block"></span>
            <span className="text-xs md:text-sm font-medium text-gray-700 whitespace-nowrap">
              Pioneer Geoscience Pvt. Ltd.
            </span>
          </div>
        </header>

        {/* === DETAIL INFO + STATUS === */}
        <section className="grid grid-cols-1 md:grid-cols-9 gap-4 mb-8">
          {/* LEFT INFO */}
          <div className="md:col-span-5 bg-white border border-gray-100 rounded-xl shadow-sm p-5">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">SELECTED ID</span>
                <span className="font-semibold text-gray-800">953872E</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">GROUP TITLE</span>
                <span className="font-semibold text-gray-800 truncate">
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
          <div className="md:col-span-2 bg-green-900 text-white p-5 rounded-xl shadow-md flex flex-col justify-center">
            <div className="text-[11px] opacity-80 uppercase tracking-wide">
              Status: Upcoming
            </div>
            <h3 className="text-base font-semibold mt-1 leading-snug">
              Ready To Transfer Salary
            </h3>
          </div>

          {/* DELAY CARD */}
          <div className="md:col-span-2 bg-gradient-to-br from-orange-600 to-red-500 text-white p-5 rounded-xl shadow-md flex flex-col justify-center">
            <div className="text-[11px] opacity-80 uppercase tracking-wide">Delays</div>
            <h3 className="text-base font-semibold mt-1 leading-snug">
              3 Delays Detected
            </h3>
          </div>
        </section>

        {/* === PAYOUT TABLE === */}
        <section className="overflow-x-auto mb-8">
          <div className="min-w-[850px]">
            {/* Table Header */}
            <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] text-gray-500 uppercase text-[11px] tracking-wider px-6 py-2.5 border-b border-gray-200">
              <div>Payout ID</div>
              <div>Month</div>
              <div>Release Date</div>
              <div>Billable Hours</div>
              <div className="text-center">Amount</div>
              <div className="text-right">Action</div>
            </div>

            {/* Table Rows */}
            <div className="space-y-2.5">
              {payouts.map((row, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] items-center px-6 py-3 bg-gradient-to-b from-gray-100 to-gray-50 rounded-full shadow-inner hover:shadow-md transition-all duration-200 text-xs sm:text-sm"
                >
                  <div className="text-gray-800 font-medium">{row.id}</div>
                  <div className="text-gray-600">{row.month}</div>
                  <div className="text-gray-600">{row.releaseDate}</div>
                  <div className="text-gray-600">{row.hours}</div>
                  <div className="text-gray-800 text-center font-semibold">{row.amount}</div>
                  <div className="flex justify-end">
                    <button className="text-gray-700 hover:text-gray-900 text-xs sm:text-sm font-medium flex items-center gap-1 whitespace-nowrap">
                      View
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3.5 h-3.5"
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
              ))}
            </div>
          </div>
        </section>

        {/* === CALENDAR SECTION === */}
        <section className="bg-white border border-gray-100 rounded-xl shadow-sm p-5">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-gray-700 font-semibold text-base">Release Calendar</h3>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
              <span>Aug</span>
              <span className="font-semibold text-gray-800">Sep</span>
              <span>Oct</span>
            </div>
          </div>

          {/* Weekdays */}
          <div className="grid grid-cols-7 text-center text-gray-500 uppercase text-[10px] mb-1.5">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 text-center gap-1.5 text-xs sm:text-sm">
            {Array.from({ length: 30 }, (_, i) => {
              const day = i + 1;
              const isMarked = markedDates.includes(day);
              return (
                <div
                  key={day}
                  className={`p-1.5 rounded-md ${
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
