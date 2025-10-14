"use client";
import React from "react";

export default function PayoutOverview() {
  return (
    <div className="min-h-screen bg-gray-50 px-3 sm:px-5 md:px-8 py-5 md:py-8">
      {/* HEADER */}
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
        <h2 className="text-gray-700 font-semibold text-lg sm:text-xl">
          Payouts &rsaquo; Overview
        </h2>

        <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1.5 shadow-inner w-full sm:w-auto">
          <span className="w-7 h-7 bg-gray-800 rounded-full inline-block"></span>
          <span className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
            Pioneer Geoscience Pvt. Ltd.
          </span>
        </div>
      </header>

      {/* PAYOUT CARDS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {/* Card 1 */}
        <div className="bg-gradient-to-br from-[#000BA3] to-[#1085A2] text-white rounded-xl p-4 shadow-md">
          <div className="text-xs opacity-90">DATE</div>
          <h3 className="text-base sm:text-lg font-semibold mt-1">
            4 October, 2025
          </h3>
          <div className="mt-2 text-[11px] opacity-80">WORKING ON PAYROLL</div>
          <div className="text-2xl font-bold mt-1">7</div>
          <div className="text-right mt-2 text-[11px] sm:text-xs">
            Ready to Process • ₹8,45,820.00
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-black text-white rounded-xl p-4 shadow-md flex flex-col justify-center">
          <div className="text-xs opacity-80">STATUS: UPCOMING PAYOUT</div>
          <h3 className="text-lg sm:text-xl font-semibold mt-1 leading-snug">
            Ready To Transfer Salary
          </h3>
        </div>

        {/* Card 3 */}
        <div className="bg-gradient-to-br from-[#E48249] to-[#993800] text-white rounded-xl p-4 shadow-md flex flex-col justify-center">
          <div className="text-xs opacity-80">DELAYED</div>
          <h3 className="text-lg sm:text-xl font-semibold mt-1 leading-snug">
            3 Delays Detected
          </h3>
        </div>
      </section>

      {/* TABLE */}
      <section className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
        <table className="w-full text-left text-[14px]">
          <thead className="bg-gray-100 text-gray-600 uppercase text-[12px]">
            <tr>
              <th className="py-2.5 px-4">Groups</th>
              <th className="py-2.5 px-4">Department</th>
              <th className="py-2.5 px-4">Amount</th>
              <th className="py-2.5 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                group: "Geologist – Full Time SEC-I",
                dept: "IT Department",
                amount: "₹12,23,420.00",
              },
              {
                group: "Civil Surveyors",
                dept: "Real Estate",
                amount: "₹12,23,420.00",
              },
              {
                group: "Civil Surveyors",
                dept: "Real Estate",
                amount: "₹12,23,420.00",
              },
            ].map((row, i) => (
              <tr
                key={i}
                className="border-t border-gray-100 hover:bg-gray-50 transition"
              >
                <td className="py-2.5 px-4 font-medium text-gray-800">
                  {row.group}
                </td>
                <td className="py-2.5 px-4 text-gray-600">{row.dept}</td>
                <td className="py-2.5 px-4 text-gray-800">{row.amount}</td>
                <td className="py-2.5 px-4 text-blue-600 cursor-pointer text-xs sm:text-sm">
                  View Details →
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* CALENDAR */}
      <section className="bg-white rounded-xl shadow-sm p-5">
        <h3 className="text-gray-700 font-semibold mb-3 text-base">
          Release Calendar
        </h3>
        <div className="grid grid-cols-7 text-center text-gray-600 text-xs sm:text-sm">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <div key={d} className="font-semibold mb-1">
              {d}
            </div>
          ))}
          {Array.from({ length: 30 }, (_, i) => (
            <div
              key={i}
              className={`p-1.5 rounded-md ${
                [13, 16, 26].includes(i + 1)
                  ? "bg-orange-500 text-white font-bold"
                  : "hover:bg-gray-100"
              }`}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
