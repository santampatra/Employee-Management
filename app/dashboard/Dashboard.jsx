import React from "react";

const profileImg =
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80&auto=format&fit=crop&s=placeholder";

export default function Dashboard() {
  return (
    <div className="bg-white px-4 md:px-10 py-8 md:py-12">
      {/* Header */}
      <header className="flex items-center justify-between mb-6 md:mb-8">
        <div className="text-[18px] text-[#000000]">Dashboard &rsaquo; Profile</div>

        <div className="hidden md:flex items-center gap-4">
          <div className="relative inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-lg">
            <span className="inline-block w-7 h-7 rounded-full bg-white mr-3 ring-1 ring-white/20" />
            <span className="whitespace-nowrap text-sm">
              Pioneer Geoscience Private Limited
            </span>
          </div>
        </div>

        <div className="flex md:hidden items-center">
          <button
            type="button"
            className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 shadow-sm"
            aria-label="Company"
          >
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xs">Pioneer Geo</span>
          </button>
        </div>
      </header>
      <div className="flex justify-between m-2">
        <div className="mt-3 mb-4 text-left text-[12px] text-[#000000]}">Personnel Overview</div>
        <div className="mt-3 mb-4 text-right text-[12px] text-gray-400">Edit</div>
      </div>
      {/* GRID: responsive - on md+ use the exact grid you provided */}
      <div
        className="
          grid grid-cols-1 gap-6
          md:grid-cols-9 md:[grid-template-rows:repeat(8,minmax(0,1fr))] md:gap-5 lg:h-[520px]
        "
      >
        {/* 1 - Avatar (col-span-2 row-span-3) */}
        <div className="md:col-span-2 md:row-span-3 rounded-2xl overflow-hidden shadow-xl flex items-center justify-center"
          style={{ background: "linear-gradient(135deg,#f7c6a6,#dbd6d8)" }}>
          <div className="p-6 flex items-center justify-center">
            <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-30 md:h-30 rounded-full overflow-hidden border-4 border-white shadow-inner">
              <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* 2 - Main Info (col-start-3 col-span-4 row-span-3) */}
        <div className="md:col-start-3 md:col-span-4 md:row-span-3 rounded-2xl bg-gradient-to-b from-white to-gray-100 p-6 sm:p-8 shadow-md flex flex-col justify-center">
          <div className="md:flex lg-flex justify-between">
            <div>
              <div className="text-xs text-gray-400 tracking-wide">NAME</div>
              <h2 className="text-2xl sm:text-4xl font-medium text-gray-900 mt-2">John Doe</h2>
            </div>

            <div className="mt-4 sm:mt-0 self-start md:self-end text-left md:text-right">
              <div className="text-xs text-gray-400">POSITION</div>
              <div className="text-sm sm:text-base font-semibold text-gray-800">SDE-II</div>

              <div className="mt-4 text-xs text-gray-400">TENTURE</div>
              <div className="text-sm sm:text-base font-semibold text-gray-800">3 Yrs</div>
            </div>
          </div>
        </div>

        {/* 3 - Right tall gradient (col-start-7 col-span-3 row-span-6) */}
        <aside className="md:col-start-7 md:col-span-3 md:row-span-6 rounded-2xl p-5 sm:p-6 shadow-lg flex flex-col justify-between "
          style={{ background: "linear-gradient(180deg,#b8ffff,#d6c7ff)" }}>

          <div>
            <div className="text-xs text-gray-500 tracking-wide">BACKGROUND</div>
            <div className="text-[18px] sm:text-lg font-semibold text-gray-900 mt-2">B. Tech (CSE)</div>

            <div className="mt-4 text-xs text-gray-500 tracking-wide">INSTITUTION</div>
            <div className="text-[18px] sm:text-lg font-semibold text-gray-900 mt-2">ABC College</div>
          </div>

          <div className="mt-6">
            <div className="text-xs text-gray-500 tracking-wide">RECOMMENDED BY</div>
            <div className="text-[18px] sm:text-base font-semibold text-gray-900">N/A</div>
          </div>
        </aside>

        {/* 4 - Team / Performance (row-start-4 col-span-4 row-span-3) */}
        {/* Team / Performance (fixed) */}
        {/* Team / Performance (fixed, performance right-aligned on md+) */}
        {/* Team / Performance (responsive) */}
        <div
          className="
    md:row-start-4 md:col-span-4 md:row-span-3
    rounded-2xl bg-black text-white
    p-4 sm:p-6 md:p-8
    shadow-lg flex flex-col md:justify-between lg:justify-between h-full 
  "
        >
          {/* Top: team + reports */}
          <div className="flex flex-col lg:flex-row justify-between ">
            <div className="space-y-3 ">
              <div>
                <div className="text-xs uppercase text-[#8B8B8B] tracking-wider">Team</div>
                {/* responsive size: small screens smaller, larger on md+ */}
                <div className="mt-2 text-[18px] sm:text-xl md:text-2xl font-semibold  ">
                  IT,Cognivaa
                </div>
              </div>

              <div>
                <div className="text-[10px] uppercase text-[#8B8B8B] tracking-wider">Reports to</div>
                <div className="mt-1 text-[18px] sm:text-base md:text-lg">John Doe</div>
              </div>
            </div>

            {/* Bottom: performance overview (pushed to bottom; right-aligned on md+) */}
            <div className="mt-4 lg:ml-5 xl:ml-10 w-full">
              <div className="text-xs uppercase text-[#8B8B8B] tracking-wider ">
                Performance overview
              </div>

              {/* Use flex-col and md:items-end to right-align the list on md+ */}
              <ul className="mt-3 flex flex-col gap-2 text-cyan-400  sm:text-base md:text-lg">
                <li className="leading-snug text-[12px]">Very Responsive</li>
                <li className="leading-snug text-[12px]">Technically Well-Skilled</li>
              </ul>
            </div>
          </div>
        </div>




        {/* 5 - Pending Requests (col-start-5 row-start-4 col-span-2 row-span-3) */}
        <div className="md:col-start-5 md:row-start-4 md:col-span-2 md:row-span-3 rounded-2xl bg-teal-800 text-white p-6 flex items-center justify-center shadow-lg">
          <div className="text-center">
            <div className="text-xs text-gray-200 tracking-wider">PENDING REQUESTS</div>
            <div className="text-4xl sm:text-5xl font-bold mt-3">1</div>
          </div>
        </div>

        {/* (Optional) Extra spacer card to keep grid consistent on small screens */}
        <div className="hidden md:block md:row-start-7 md:col-span-4" />
      </div>
    </div>
  );
}