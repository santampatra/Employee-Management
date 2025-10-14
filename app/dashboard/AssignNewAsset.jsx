"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function AssignNewAsset() {
  const router = useRouter();

  const assets = [
    "https://upload.wikimedia.org/wikipedia/commons/3/31/Macbook-pro-2020.png",
    "https://upload.wikimedia.org/wikipedia/commons/3/31/Macbook-pro-2020.png",
    "https://upload.wikimedia.org/wikipedia/commons/3/31/Macbook-pro-2020.png",
    "https://upload.wikimedia.org/wikipedia/commons/3/31/Macbook-pro-2020.png",
    "https://upload.wikimedia.org/wikipedia/commons/3/31/Macbook-pro-2020.png",
    "https://upload.wikimedia.org/wikipedia/commons/3/31/Macbook-pro-2020.png",
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-5xl p-6 md:p-8 relative">

        {/* ✅ Header — now properly aligned */}
        <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
          {/* Title */}
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
            Assign New Asset
          </h2>

          {/* ✕ and + buttons side by side */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.push("/dashboard")}
              className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
              aria-label="Close"
            >
              ✕
            </button>

            <button
              className="bg-blue-600 hover:bg-blue-700 text-white w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xl shadow-md"
              aria-label="Add new asset"
            >
              +
            </button>
          </div>
        </div>

        {/* ✅ Assets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {assets.map((img, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md hover:border-gray-300 transition-all duration-200"
            >
              <img
                src={img}
                alt="Asset"
                className="w-20 h-20 object-contain"
              />
              <p className="text-sm font-medium text-gray-800 mt-2 text-center">
                MacBook Pro 2020
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
