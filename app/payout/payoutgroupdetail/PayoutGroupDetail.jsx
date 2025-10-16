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
    <div className="min-h-screen bg-white flex justify-center px-4 sm:px-6 md:px-8 py-6 md:py-8">
      <div className="w-full max-w-5xl">
        {/* === HEADER === */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-3">
          <h2 className="text-gray-800 font-semibold text-lg md:text-xl text-center md:text-left w-full md:w-auto">
            Payouts › Group Detail
          </h2>

          <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1.5 shadow-inner w-full sm:w-auto justify-center md:justify-start">
            <span className="w-7 h-7 bg-gray-900 rounded-full inline-block"></span>
            <span className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
              Pioneer Geoscience Pvt. Ltd.
            </span>
          </div>
        </header>

        {/* === DETAIL INFO + STATUS === */}
        <section className="grid grid-cols-1 md:grid-cols-9 gap-4 mb-8">
          {/* LEFT INFO */}
          <div className="md:col-span-5 bg-white border border-gray-100 rounded-xl shadow-sm p-5">
            <div className="space-y-3 text-sm sm:text-[13px]">
              {[
                ["SELECTED ID", "953872E"],
                ["GROUP TITLE", "Cognivaa IT – Full-Time SDE-I"],
                ["RECOMMENDED BY", "Mr. John Doe"],
                ["EMPLOYEE COUNT", "4"],
              ].map(([label, value], idx) => (
                <div
                  key={idx}
                  className="flex justify-between flex-wrap gap-1 text-gray-600"
                >
                  <span className="text-gray-500">{label}</span>
                  <span className="font-semibold text-gray-800">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* STATUS CARD */}
          <div className="md:col-span-2 bg-gradient-to-br from-[#0F1C00] to-[#284B00] text-white p-5 rounded-xl shadow-md flex flex-col justify-center text-center md:text-left">
            <div className="text-[11px] opacity-80 uppercase tracking-wide">
              Status: Upcoming
            </div>
            <h3 className="text-base font-semibold mt-1 leading-snug">
              Ready To Transfer Salary
            </h3>
          </div>

          {/* DELAY CARD */}
          <div className="md:col-span-2 bg-gradient-to-br from-[#E48249] to-[#993800] text-white p-5 rounded-xl shadow-md flex flex-col justify-center text-center md:text-left">
            <div className="text-[11px] opacity-80 uppercase tracking-wide">
              Delays
            </div>
            <h3 className="text-base font-semibold mt-1 leading-snug">
              3 Delays Detected
            </h3>
          </div>
        </section>

        {/* === PAYOUT TABLE === */}
        <section className="overflow-x-auto mb-8">
          <div className="min-w-full sm:min-w-[750px]">
            <div className="hidden sm:grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] text-gray-500 uppercase text-[11px] tracking-wider px-6 py-2.5 border-b border-gray-200">
              <div>Payout ID</div>
              <div>Month</div>
              <div>Release Date</div>
              <div>Billable Hours</div>
              <div className="text-center">Amount</div>
              <div className="text-right">Action</div>
            </div>

            <div className="space-y-2.5">
              {payouts.map((row, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] sm:items-center gap-2 sm:gap-0 px-4 sm:px-6 py-3 bg-gradient-to-b from-gray-100 to-gray-50 rounded-xl shadow-inner hover:shadow-md transition-all duration-200 text-xs sm:text-sm"
                >
                  <div className="hidden sm:block text-gray-800 font-medium">{row.id}</div>
                  <div className="text-gray-600">{row.month}</div>
                  <div className="text-gray-600">{row.releaseDate}</div>
                  <div className="text-gray-600">{row.hours}</div>
                  <div className="text-gray-800 font-semibold text-center sm:text-left">{row.amount}</div>
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

        {/* === CALENDAR SECTION (same style as Payroll) === */}
        <section className="bg-white border border-gray-100 rounded-xl shadow-sm p-5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm text-gray-700 font-semibold">Release Calendar</h3>
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

              <div className="grid grid-cols-[100px_repeat(7,1fr)] gap-y-6">
                {weeks.map((row) => (
                  <React.Fragment key={row.weekNo}>
                    <div className="relative flex items-center pl-6 text-sm text-gray-400">
                      {row.weekNo}
                      <div className="absolute left-16 right-0 h-px border-t border-dotted border-gray-300/60" />
                    </div>

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
    </div>
  );
}
