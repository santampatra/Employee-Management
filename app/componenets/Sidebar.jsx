import React from "react";

/* === Icons === */
const IconPeople = ({ className = "w-4 h-4" }) => (
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

const IconBrief = ({ className = "w-4 h-4" }) => (
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

/* === Sidebar Component === */
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

  const mobileItems = [...topItems, ...monitoringItems.slice(0, 3)];

  return (
    <>
      {/* ===== Desktop Sidebar (Smaller) ===== */}
      <aside className="hidden md:flex flex-col w-56 min-h-screen bg-gray-50 px-4 py-8">
        <h1 className="text-2xl font-extrabold tracking-tight text-black mb-6">
          People
        </h1>

        {/* Top group */}
        <div className="space-y-3">
          {topItems.map((it) => (
            <button
              key={it.key}
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm text-gray-700 text-xs hover:bg-gray-50 transition"
            >
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white shadow-inner ring-1 ring-gray-200">
                {it.icon}
              </span>
              <span className="flex-1 text-left">{it.label}</span>
            </button>
          ))}
        </div>

        {/* MONITORING */}
        <div className="mt-6">
          <p className="text-[10px] tracking-widest text-gray-500 mb-3">
            MONITORING
          </p>
          <div className="space-y-3">
            {monitoringItems.map((it) => (
              <button
                key={it.key}
                className="w-full flex items-center gap-3 px-4 py-2.5 rounded-full text-white text-xs shadow-md bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-500 hover:brightness-95 transition"
              >
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/10 ring-1 ring-white/20">
                  {it.icon}
                </span>
                <span className="flex-1 text-left">{it.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* FUNCTIONS */}
        <div className="mt-6">
          <p className="text-[10px] tracking-widest text-gray-500 mb-3">
            FUNCTIONS
          </p>
          <div className="space-y-3">
            {functionItems.map((it) => (
              <button
                key={it.key}
                className="w-full flex items-center gap-3 px-4 py-2.5 rounded-full text-white text-xs shadow-md bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-500 hover:brightness-95 transition"
              >
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/10 ring-1 ring-white/20">
                  {it.icon}
                </span>
                <span className="flex-1 text-left">{it.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 text-xs text-gray-400">&nbsp;</div>
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
                <span className="text-[10px]">{it.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* padding for mobile navbar */}
      <div className="h-14 md:hidden" />
    </>
  );
}
