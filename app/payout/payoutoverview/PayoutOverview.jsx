"use client";
import React from "react";

export default function PayoutOverview() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 md:px-10 py-6 md:py-10">
      {/* HEADER */}
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-3">
        <h2 className="text-gray-700 font-semibold text-xl sm:text-2xl">
          Payouts &rsaquo; Overview
        </h2>

        <div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2 shadow-inner w-full sm:w-auto">
          <span className="w-8 h-8 bg-gray-800 rounded-full inline-block"></span>
          <span className="text-sm sm:text-base font-medium text-gray-700 whitespace-nowrap">
            Pioneer Geoscience Private Limited
          </span>
        </div>
      </header>

      {/* PAYOUT CARDS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {/* Card 1 */}
        <div className="bg-gradient-to-br from-blue-600 to-cyan-400 text-white rounded-2xl p-6 shadow-lg">
          <div className="text-sm opacity-90">DATE</div>
          <h3 className="text-lg sm:text-xl font-semibold mt-1">
            4 October, 2025
          </h3>
          <div className="mt-3 text-xs opacity-80">WORKING ON PAYROLL</div>
          <div className="text-3xl font-bold mt-1">7</div>
          <div className="text-right mt-3 text-xs sm:text-sm">
            Ready to Process • ₹8,45,820.00
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-black text-white rounded-2xl p-6 shadow-lg flex flex-col justify-center">
          <div className="text-sm opacity-80">STATUS: UPCOMING PAYOUT</div>
          <h3 className="text-xl sm:text-2xl font-semibold mt-2 leading-snug">
            Ready To Transfer Salary
          </h3>
        </div>

        {/* Card 3 */}
        <div className="bg-gradient-to-br from-orange-600 to-red-400 text-white rounded-2xl p-6 shadow-lg flex flex-col justify-center">
          <div className="text-sm opacity-80">DELAYED</div>
          <h3 className="text-xl sm:text-2xl font-semibold mt-2 leading-snug">
            3 Delays Detected
          </h3>
        </div>
      </section>

      {/* TABLE */}
      <section className="bg-white rounded-2xl shadow-sm overflow-hidden mb-10">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="py-3 px-5">Groups</th>
              <th className="py-3 px-5">Department</th>
              <th className="py-3 px-5">Amount</th>
              <th className="py-3 px-5">Action</th>
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
                <td className="py-3 px-5 font-medium text-gray-800">
                  {row.group}
                </td>
                <td className="py-3 px-5 text-gray-600">{row.dept}</td>
                <td className="py-3 px-5 text-gray-800">{row.amount}</td>
                <td className="py-3 px-5 text-blue-600 cursor-pointer">
                  View Details →
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* CALENDAR */}
      <section className="bg-white rounded-2xl shadow-sm p-6">
        <h3 className="text-gray-700 font-semibold mb-4 text-lg">
          Release Calendar
        </h3>
        <div className="grid grid-cols-7 text-center text-gray-600 text-sm sm:text-base">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <div key={d} className="font-semibold mb-2">
              {d}
            </div>
          ))}
          {Array.from({ length: 30 }, (_, i) => (
            <div
              key={i}
              className={`p-2 rounded-lg ${
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
