"use client";
import React, { useState } from "react";

// 💻 Laptop illustration icon
function LaptopIllustration({ className = "w-24 h-16" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="48" y="112" width="416" height="256" rx="20" fill="#F3F4F6" />
      <rect x="72" y="136" width="368" height="208" rx="12" fill="url(#g1)" />
      <path
        d="M24 392h464v24a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16v-24z"
        fill="#E5E7EB"
      />
      <defs>
        <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function AssetsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const availableAssets = [
    "MacBook Pro 2020",
    "MacBook Pro 2020",
    "MacBook Pro 2020",
    "MacBook Pro 2020",
    "MacBook Pro 2020",
    "MacBook Pro 2020",
  ];

  return (
    <section className="bg-white px-4 md:px-8 py-8 md:py-10">
      {/* Header */}
      <header className="flex items-center justify-between mb-6 md:mb-8">
        <div className="text-[17px] text-[#000000] font-medium">Assets</div>
      </header>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 transition-all duration-300">
        {/* Asset Card */}
        <div className="rounded-2xl bg-gradient-to-b from-white to-gray-100 shadow-md p-6 flex flex-col items-center justify-center">
          <LaptopIllustration />
          <h3 className="mt-4 text-gray-800 font-medium text-[15px]">
            MacBook Pro 2020
          </h3>
        </div>

        {/* Add Asset Card */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100
                     flex flex-col items-center justify-center gap-2 shadow-sm p-6
                     transition-all duration-300 ease-in-out hover:shadow-md"
        >
          <span className="text-4xl text-gray-400 font-light leading-none">＋</span>
          <span className="text-[13px] text-gray-600 font-medium tracking-wide">
            Assign New Asset
          </span>
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-8">
            {/* Header Row */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-800">
                Assign New Asset
              </h3>

              {/* Icons on same side (right) */}
              <div className="flex items-center gap-3">
                {/* + Button */}
                <button
                  type="button"
                  className="bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md text-2xl leading-none"
                  aria-label="Add new asset"
                >
                  +
                </button>

                {/* ✕ Button (Red) */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-red-600 hover:bg-red-700 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md text-2xl leading-none"
                  aria-label="Close modal"
                >
                  ⨯
                </button>
              </div>
            </div>

            {/* Grid of assets */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
              {availableAssets.map((name, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200 bg-white p-4 flex flex-col items-center justify-center hover:shadow-md transition-all cursor-pointer"
                >
                  <LaptopIllustration className="w-20 h-14" />
                  <p className="text-xs text-gray-700 mt-2 text-center">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
