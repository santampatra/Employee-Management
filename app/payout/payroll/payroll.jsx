"use client";
import React from "react";

/* Mock Data */
const avatarUrls = [
    "https://randomuser.me/api/portraits/women/32.jpg",
    "https://randomuser.me/api/portraits/men/22.jpg",
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/35.jpg",
    "https://randomuser.me/api/portraits/men/48.jpg",
];

const payrollRows = [
    { id: "#1834", month: "March", date: "02/04/2025", hours: "980 Hours", amount: "₹2,23,432.00" },
    { id: "#1835", month: "April", date: "02/05/2025", hours: "850 Hours", amount: "₹2,23,432.00" },
    { id: "#1836", month: "May", date: "02/06/2025", hours: "910 Hours", amount: "₹2,23,432.00" },
    { id: "#1837", month: "June", date: "02/07/2025", hours: "980 Hours", amount: "₹2,23,432.00" },
    { id: "#1838", month: "July", date: "02/08/2025", hours: "970 Hours", amount: "₹2,23,432.00" },
    { id: "#1839", month: "August", date: "02/09/2025", hours: "903 Hours", amount: "₹2,23,432.00" },
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

export default function Payroll() {
    return (
        <div className="flex min-h-screen bg-[#f8f9fa] text-gray-700">

            {/* Main content */}
            <main className="flex-1 px-10 py-8">
                {/* Header */}
                <header className="flex justify-between items-center mb-8">
                    <h1 className="text-lg text-gray-700 font-medium">
                        Payouts <span className="mx-1 text-gray-400">&rsaquo;</span> Payroll Details
                    </h1>

                    <div className="flex items-center gap-3">
                        <div className="relative flex items-center bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-full px-4 py-2 shadow-md">
                            <span className="text-sm truncate">Pioneer Geoscience Private Limited</span>
                        </div>
                    </div>
                </header>

                {/* Included Employees */}
                <section className="mb-10">
                    <h3 className="text-sm text-gray-600 mb-3">Included Employees</h3>
                    <div className="flex gap-6 overflow-x-auto py-2">
                        {avatarUrls.map((url, idx) => (
                            <div
                                key={idx}
                                className="w-16 h-16 rounded-2xl overflow-hidden flex items-center justify-center shadow-md"
                            >
                                <img src={url} alt={`Employee ${idx + 1}`} className="object-cover w-full h-full" />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Released Salaries Table */}
                <section className="mb-12">
                    <h3 className="text-sm text-gray-600 mb-4">Released Salaries</h3>
                    <div className="overflow-x-auto bg-gradient-to-b from-white to-gray-100 border border-gray-200 rounded-2xl shadow-sm">
                        <table className="min-w-full text-sm text-gray-700">
                            <thead>
                                <tr className="text-left border-b border-gray-200 text-gray-500">
                                    <th className="py-3 px-5 font-medium">Payslip ID</th>
                                    <th className="py-3 px-5 font-medium">Month</th>
                                    <th className="py-3 px-5 font-medium">Release Date</th>
                                    <th className="py-3 px-5 font-medium">Billable Hours</th>
                                    <th className="py-3 px-5 font-medium">Amount</th>
                                    <th className="py-3 px-5 font-medium">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {payrollRows.map((row, idx) => (
                                    <tr
                                        key={idx}
                                        className="hover:bg-gray-50 transition border-b border-gray-100 last:border-0"
                                    >
                                        <td className="py-4 px-5">{row.id}</td>
                                        <td className="py-4 px-5">{row.month}</td>
                                        <td className="py-4 px-5">{row.date}</td>
                                        <td className="py-4 px-5">{row.hours}</td>
                                        <td className="py-4 px-5 font-semibold">{row.amount}</td>
                                        <td className="py-4 px-5 text-blue-600 font-medium cursor-pointer hover:underline">
                                            View Details →
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Release Calendar (final fixed version) */}
                <section className="mt-12">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-sm text-gray-600">Release Calendar</h3>

                        {/* Month navigation */}
                        <div className="flex gap-8">
                            {months.map((m) => (
                                <button
                                    key={m}
                                    className={`text-sm pb-1 transition ${m === currentMonth
                                            ? "text-gray-900 font-medium border-b border-gray-900"
                                            : "text-gray-400 hover:text-gray-700"
                                        }`}
                                >
                                    {m}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <div className="min-w-[900px] md:min-w-full">
                            {/* Header Row */}
                            <div className="grid grid-cols-[100px_repeat(7,1fr)] text-center text-sm text-gray-500 mb-4 select-none">
                                <div className="text-left pl-6">Week | Days</div>
                                <div>Sunday</div>
                                <div>Monday</div>
                                <div>Tuesday</div>
                                <div>Wednesday</div>
                                <div>Thursday</div>
                                <div>Friday</div>
                                <div>Saturday</div>
                            </div>

                            {/* Calendar Body */}
                            <div className="grid grid-cols-[100px_repeat(7,1fr)] gap-y-6">
                                {weeks.map((row) => (
                                    <React.Fragment key={row.weekNo}>
                                        {/* Week number + dotted line */}
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
                                                    className="relative flex flex-col items-center justify-center h-16"
                                                >
                                                    {/* Date number */}
                                                    <span
                                                        className={`text-sm font-medium ${isEmpty ? "text-gray-300" : "text-gray-900"
                                                            }`}
                                                    >
                                                        {d}
                                                    </span>

                                                    {/* Orange event badge (centered under date) */}
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

            </main>
        </div>
    );
}
