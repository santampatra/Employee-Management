import React from "react";

/**
 * AssetsSection.jsx
 *
 * Tailwind + React component that renders the "Assets" section shown in your screenshot.
 * - Responsive grid (1 column -> sm:2 columns)
 * - Rounded cards with subtle borders and shadows
 * - Example Laptop SVG for the asset tile; replace with your own image if you want
 */

function LaptopIllustration({ className = "w-32 h-20" }) {
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
      <path d="M24 392h464v24a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16v-24z" fill="#E5E7EB"/>
      <defs>
        <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#8B5CF6" stopOpacity="1" />
          <stop offset="1" stopColor="#06B6D4" stopOpacity="1" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function AssetsSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-lg font-medium text-gray-800 mb-6">Assets</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Asset card */}
        <article
          className="
            rounded-2xl border border-gray-100 bg-white
            p-8 flex flex-col items-center justify-center
            shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-1
            min-h-[220px]
          "
          role="group"
          aria-label="MacBook Pro 2020"
        >
          <LaptopIllustration className="w-32 h-20" />
          <div className="mt-6 text-sm text-gray-600">MacBook Pro 2020</div>
        </article>

        {/* Assign new asset card */}
        <button
          type="button"
          className="
            rounded-2xl border border-gray-100 bg-gray-50
            p-8 flex items-center justify-center
            text-gray-400 hover:text-gray-600
            shadow-sm hover:shadow-md transition
            min-h-[220px]
          "
          aria-label="Assign new asset"
        >
          <span className="text-sm">+ Assign New Asset</span>
        </button>
      </div>
    </section>
  );
}
