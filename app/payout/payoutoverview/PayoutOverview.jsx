"use client";
import React from "react";

export default function PayoutOverview() {
  const months = ["August", "September", "October"];
  const currentMonth = "September";
  const events = { 5: 2, 16: 4, 19: 1 };
  const weeks = [
    { weekNo: 36, days: [31, 1, 2, 3, 4, 5, 6] },
    { weekNo: 37, days: [7, 8, 9, 10, 11, 12, 13] },
    { weekNo: 38, days: [14, 15, 16, 17, 18, 19, 20] },
    { weekNo: 39, days: [21, 22, 23, 24, 25, 26, 27] },
    { weekNo: 40, days: [28, 29, 30, "", "", "", ""] },
  ];

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

      {/* === RELEASE CALENDAR (same structure as Payroll) === */}
      <section className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm text-gray-700 font-semibold">
            Release Calendar
          </h3>

          <div className="flex gap-8">
            {months.map((m) => (
              <button
                key={m}
                className={`text-sm pb-1 ${
                  m === currentMonth
                    ? "text-gray-900 font-medium border-b border-gray-900"
                    : "text-gray-400"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[900px] md:min-w-full">
            {/* Header row */}
            <div className="grid grid-cols-[100px_repeat(7,1fr)] text-center text-sm text-gray-500 mb-4">
              <div className="text-left pl-6">Week | Days</div>
              <div>Sunday</div>
              <div>Monday</div>
              <div>Tuesday</div>
              <div>Wednesday</div>
              <div>Thursday</div>
              <div>Friday</div>
              <div>Saturday</div>
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-[100px_repeat(7,1fr)] gap-y-6">
              {weeks.map((row) => (
                <React.Fragment key={row.weekNo}>
                  {/* Week number and dotted line */}
                  <div className="relative flex items-center pl-6 text-sm text-gray-400">
                    {row.weekNo}
                    <div className="absolute left-16 right-0 h-px border-t border-dotted border-gray-300/60" />
                  </div>

                  {/* Days */}
                  {row.days.map((d, i) => {
                    const isEmpty = d === "";
                    const hasEvent = d && events[d];
                    return (
                      <div
                        key={i}
                        className="relative flex flex-col items-center justify-center h-12"
                      >
                        <span
                          className={`text-sm font-medium ${
                            isEmpty ? "text-gray-300" : "text-gray-900"
                          }`}
                        >
                          {d}
                        </span>
                        {hasEvent && (
                          <span className="mt-1 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-[11px] font-semibold">
                            {events[d]}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
