import React from "react";

const profileImg =
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80&auto=format&fit=crop&s=placeholder";

export default function Dashboard() {
  return (
    <div className="bg-white px-4 md:px-8 py-8 md:py-10">
      {/* Header */}
      <header className="flex items-center justify-between mb-6 md:mb-8">
        <div className="text-[17px] text-[#000000]">Dashboard › Profile</div>

        <div className="hidden md:flex items-center gap-4">
          <div className="relative inline-flex items-center px-3.5 py-1.5 rounded-full bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-md">
            <span className="inline-block w-6 h-6 rounded-full bg-white mr-2 ring-1 ring-white/20" />
            <span className="whitespace-nowrap text-sm">
              Pioneer Geoscience Pvt. Ltd.
            </span>
          </div>
        </div>

        <div className="flex md:hidden items-center">
          <button
            type="button"
            className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs"
          >
            <svg
              className="w-4 h-4 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Pioneer Geo</span>
          </button>
        </div>
      </header>

      <div className="flex justify-between m-2">
        <div className="text-[12px] text-[#000000]">Personnel Overview</div>
        <div className="text-[12px] text-gray-400 cursor-pointer">Edit</div>
      </div>

      {/* Responsive Grid - rows size to content (no reserved fractional rows) */}
      <div
        className="
          grid grid-cols-1 gap-4
          sm:grid-cols-2
          md:grid-cols-9 md:[grid-auto-rows:minmax(0,auto)]
          lg:gap-3 lg:h-auto
          transition-all duration-300
        "
      >
        {/* Avatar */}
        <div
          className="md:col-span-2 md:row-span-3 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center"
          style={{ background: "linear-gradient(135deg,#f7c6a6,#dbd6d8)" }}
        >
          <div className="p-4 sm:p-5 md:p-6 flex items-center justify-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-30 md:h-30 rounded-full overflow-hidden border-4 border-white shadow-inner">
              <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Main Info */}
        <div className="md:col-start-3 md:col-span-4 md:row-span-3 rounded-2xl bg-gradient-to-b from-[#F7F7F7] to-[#EDEDED] p-4 sm:p-5 md:p-6 shadow-md flex flex-col justify-center">
          <div className="flex flex-wrap justify-between gap-4">
            <div>
              <div className="text-xs text-gray-400 tracking-wide">NAME</div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900 mt-1">John Doe</h2>
            </div>

            <div className="text-left sm:text-right">
              <div className="text-xs text-gray-400">POSITION</div>
              <div className="text-sm sm:text-[15px] font-semibold text-gray-800">SDE-II</div>

              <div className="mt-3 text-xs text-gray-400">TENURE</div>
              <div className="text-sm sm:text-[15px] font-semibold text-gray-800">3 Yrs</div>
            </div>
          </div>
        </div>

        {/* Right Side Info */}
        <aside
          className="md:col-start-7 md:col-span-3 md:row-span-6 rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg flex flex-col justify-between"
          style={{ background: "linear-gradient(180deg,#b8ffff,#d6c7ff)" }}
        >
          <div>
            <div className="text-xs text-gray-500 tracking-wide">BACKGROUND</div>
            <div className="text-[15px] sm:text-[17px] md:text-lg font-semibold text-gray-900 mt-1">B. Tech (CSE)</div>

            <div className="mt-3 text-xs text-gray-500 tracking-wide">INSTITUTION</div>
            <div className="text-[15px] sm:text-[17px] md:text-lg font-semibold text-gray-900 mt-1">ABC College</div>
          </div>

          <div className="mt-5">
            <div className="text-xs text-gray-500 tracking-wide">RECOMMENDED BY</div>
            <div className="text-[13px] sm:text-[15px] font-semibold text-gray-900">N/A</div>
          </div>
        </aside>

        {/* Team / Performance */}
        <div className="md:row-start-4 md:col-span-4 md:row-span-3 rounded-2xl bg-black text-white p-4 sm:p-5 md:p-6 shadow-lg flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="space-y-2">
              <div>
                <div className="text-xs uppercase text-[#8B8B8B] tracking-wider">Team</div>
                <div className="mt-1 text-base sm:text-lg font-semibold">IT, Cognivaa</div>
              </div>

              <div>
                <div className="text-[10px] uppercase text-[#8B8B8B] tracking-wider">Reports to</div>
                <div className="mt-1 text-sm">John Doe</div>
              </div>
            </div>

            <div className="mt-3 sm:mt-0">
              <div className="text-xs uppercase text-[#8B8B8B] tracking-wider">Performance overview</div>
              <ul className="mt-2 flex flex-col gap-1 text-cyan-400 text-[12px] sm:text-[13px]">
                <li>Very Responsive</li>
                <li>Technically Skilled</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pending Requests */}
        <div className="md:col-start-5 md:row-start-4 md:col-span-2 md:row-span-3 rounded-2xl bg-teal-800 text-white p-4 sm:p-5 md:p-6 flex items-center justify-center shadow-lg">
          <div className="text-center">
            <div className="text-xs text-gray-200 tracking-wider">PENDING REQUESTS</div>
            <div className="text-3xl sm:text-4xl font-bold mt-2">1</div>
          </div>
        </div>
      </div>
    </div>
  );
}
