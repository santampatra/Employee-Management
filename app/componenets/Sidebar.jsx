import React from "react";

/* Icons */
const IconPeople = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M16 11c1.657 0 3-1.567 3-3.5S17.657 4 16 4s-3 1.567-3 3.5S14.343 11 16 11z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 11c1.657 0 3-1.567 3-3.5S9.657 4 8 4s-3 1.567-3 3.5S6.343 11 8 11z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 20c0-3.314 3.134-6 7-6s7 2.686 7 6"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconBrief = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <rect
      x="3"
      y="7"
      width="18"
      height="12"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path
      d="M16 3v4M8 3v4"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * Responsive Sidebar → Top Navbar (mobile)
 *
 * - md+ : Sidebar (same as before)
 * - <md : Top fixed navbar
 */
export default function Sidebar() {
  const topItems = [
    { key: "employees", label: "Employees", icon: <IconPeople /> },
    { key: "contractors", label: "Contractors", icon: <IconPeople /> },
  ];

  const monitoringItems = [
    { key: "attendance", label: "Attendance", icon: <IconBrief /> },
    { key: "worklogs", label: "Work Logs", icon: <IconBrief /> },
    { key: "goals", label: "Goals", icon: <IconBrief /> },
  ];

  const functionItems = [
    { key: "payouts", label: "Payouts", icon: <IconBrief /> },
    { key: "legal", label: "Legal", icon: <IconBrief /> },
    { key: "documents", label: "Documents", icon: <IconBrief /> },
  ];

  // Items shown in mobile top navbar
  const mobileItems = [
    ...topItems,
    ...monitoringItems.slice(0, 3), // attendance, worklogs, goals
  ];

  return (
    <>
      {/* ===== Desktop Sidebar ===== */}
      <aside className="hidden md:flex flex-col w-72 min-h-screen bg-gray-50 px-6 py-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-black mb-8">
          People
        </h1>

        {/* Top group */}
        <div className="space-y-4">
          {topItems.map((it) => (
            <button
              key={it.key}
              className="w-full flex items-center gap-4 px-6 py-3 rounded-full bg-white border border-gray-200 shadow-sm text-gray-700 text-sm"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-inner ring-1 ring-white/40">
                {it.icon}
              </span>
              <span className="flex-1 text-left">{it.label}</span>
            </button>
          ))}
        </div>

        {/* MONITORING */}
        <div className="mt-8">
          <p className="text-xs tracking-widest text-gray-500 mb-4">
            MONITORING
          </p>
          <div className="space-y-4">
            {monitoringItems.map((it) => (
              <button
                key={it.key}
                className="w-full flex items-center gap-4 px-6 py-3 rounded-full text-white text-sm shadow-md bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-500 hover:brightness-95 transition"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 ring-1 ring-white/20">
                  {it.icon}
                </span>
                <span className="flex-1 text-left">{it.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* FUNCTIONS */}
        <div className="mt-8">
          <p className="text-xs tracking-widest text-gray-500 mb-4">
            FUNCTIONS
          </p>
          <div className="space-y-4">
            {functionItems.map((it) => (
              <button
                key={it.key}
                className="w-full flex items-center gap-4 px-6 py-3 rounded-full text-white text-sm shadow-md bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-500 hover:brightness-95 transition"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 ring-1 ring-white/20">
                  {it.icon}
                </span>
                <span className="flex-1 text-left">{it.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 text-xs text-gray-400">&nbsp;</div>
      </aside>

      {/* ===== Mobile Top Navbar ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 md:hidden bg-white border-b border-gray-200 shadow-md">
        <div className="max-w-3xl mx-auto px-2">
          <div className="flex justify-around items-center py-2">
            {mobileItems.map((it) => (
              <button
                key={it.key}
                type="button"
                className="flex flex-col items-center justify-center text-xs text-gray-600 hover:text-blue-600 transition"
                aria-label={it.label}
              >
                <span className="inline-flex items-center justify-center w-6 h-6 mb-1">
                  {it.icon}
                </span>
                <span className="text-[11px]">{it.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Add padding so content isn't hidden under navbar */}
      <div className="h-14 md:hidden" />
    </>
  );
}