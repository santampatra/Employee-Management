"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function AssetsSection() {
  const router = useRouter();

  return (
    <section className="mt-10">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Assets</h2>

      <div className="flex gap-6 flex-wrap">
        {/* Example asset card */}
        <div className="flex flex-col items-center bg-white border border-gray-200 shadow-sm rounded-xl p-6 hover:shadow-md transition">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/31/Macbook-pro-2020.png"
            alt="MacBook"
            className="w-20 h-20 object-contain mb-3"
          />
          <p className="text-sm text-gray-700 font-medium">MacBook Pro 2020</p>
        </div>

        {/* Add new asset button */}
        <button
          onClick={() => router.push("/dashboard/assign")}
          className="flex flex-col items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl p-6 hover:bg-gray-200 transition"
        >
          <span className="text-gray-500 text-sm">+ Assign New Asset</span>
        </button>
      </div>
    </section>
  );
}
