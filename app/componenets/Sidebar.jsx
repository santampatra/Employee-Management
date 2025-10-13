// import React from "react";

// // PeopleSidebar.jsx
// // A single-file React component styled with Tailwind CSS that reproduces
// // the pill-style sidebar from your screenshot.
// // Usage: import PeopleSidebar from './PeopleSidebar'
// // <PeopleSidebar />

// const IconUser = ({ className = "w-5 h-5" }) => (
//   <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
//     <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//     <path d="M20 21c0-3.866-3.582-7-8-7s-8 3.134-8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// )

// const IconOrg = ({ className = "w-5 h-5" }) => (
//   <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
//     <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="1.5" rx="1" />
//     <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="1.5" rx="1" />
//     <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="1.5" rx="1" />
//     <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="1.5" rx="1" />
//   </svg>
// )

// const IconCalendar = ({ className = "w-5 h-5" }) => (
//   <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
//     <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
//     <path d="M16 3v4M8 3v4M3 11h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//   </svg>
// )

// const IconAudit = ({ className = "w-5 h-5" }) => (
//   <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
//     <path d="M4 7h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//     <path d="M4 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//     <path d="M4 17h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//   </svg>
// )

// export default function Sidebar() {
//   return (
//     <aside className="w-72 min-h-screen bg-white px-6 py-10">
//       <h1 className="text-4xl font-extrabold tracking-tight text-black mb-8">People</h1>

//       {/* Primary group (black pills) */}
//       <div className="space-y-4">
//         <button className="w-full flex items-center gap-4 px-6 py-3 rounded-full bg-black text-white text-sm shadow-md hover:opacity-95 transition">
//           <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10">
//             <IconUser className="w-4 h-4 text-white" />
//           </span>
//           <span className="flex-1 text-left">Employees</span>
//         </button>

//         <button className="w-full flex items-center gap-4 px-6 py-3 rounded-full bg-black text-white text-sm shadow-md hover:opacity-95 transition">
//           <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10">
//             <IconOrg className="w-4 h-4 text-white" />
//           </span>
//           <span className="flex-1 text-left">Contractors</span>
//         </button>

//         <button className="w-full flex items-center gap-4 px-6 py-3 rounded-full bg-black text-white text-sm shadow-md hover:opacity-95 transition">
//           <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10">
//             <IconUser className="w-4 h-4 text-white" />
//           </span>
//           <span className="flex-1 text-left">Payrolls</span>
//         </button>
//       </div>

//       {/* Monitoring label */}
//       <div className="mt-8">
//         <p className="text-xs tracking-widest text-gray-500 mb-3">MONITORING</p>

//         <div className="space-y-4">
//           <button className="w-full flex items-center gap-4 px-6 py-3 rounded-full bg-[#1669FF] text-white text-sm shadow-md hover:brightness-95 transition">
//             <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10">
//               <IconCalendar className="w-4 h-4 text-white" />
//             </span>
//             <span className="flex-1 text-left">Calendar</span>
//           </button>

//           <button className="w-full flex items-center gap-4 px-6 py-3 rounded-full bg-[#1669FF] text-white text-sm shadow-md hover:brightness-95 transition">
//             <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10">
//               <IconOrg className="w-4 h-4 text-white" />
//             </span>
//             <span className="flex-1 text-left">Org Chart</span>
//           </button>

//           <button className="w-full flex items-center gap-4 px-6 py-3 rounded-full bg-[#1669FF] text-white text-sm shadow-md hover:brightness-95 transition">
//             <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10">
//               <IconAudit className="w-4 h-4 text-white" />
//             </span>
//             <span className="flex-1 text-left">Audit Logs</span>
//           </button>
//         </div>
//       </div>

//       {/* Small helper: mobile preview spacing */}
//       <div className="mt-8 text-xs text-gray-400">{/* empty - reserved for extra links or footer */}</div>
//     </aside>
//   )
// }
import React from "react";

// PeopleSidebar.jsx
// React + Tailwind component matching the second screenshot:
// - light background
// - soft white pills for top group
// - glossy blue gradient pills for Monitoring/Functions
// - subtle inner shadows and rounded-full pills

const IconPeople = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M16 11c1.657 0 3-1.567 3-3.5S17.657 4 16 4s-3 1.567-3 3.5S14.343 11 16 11z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 11c1.657 0 3-1.567 3-3.5S9.657 4 8 4s-3 1.567-3 3.5S6.343 11 8 11z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 20c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const IconBrief = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect x="3" y="7" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.2" />
    <path d="M16 3v4M8 3v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
)

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-4xl font-extrabold tracking-tight text-black mb-8">People</h1>

      {/* Top group: soft white pills */}
      <div className="space-y-4">
        <button className="w-full flex items-center gap-4 px-6 py-3 rounded-full bg-white border border-gray-200 shadow-sm text-gray-700 text-sm">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-inner ring-1 ring-white/40">
            <IconPeople className="w-4 h-4 text-gray-500" />
          </span>
          <span className="flex-1 text-left">Employees</span>
        </button>

        <button className="w-full flex items-center gap-4 px-6 py-3 rounded-full bg-white border border-gray-200 shadow-sm text-gray-700 text-sm">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-inner ring-1 ring-white/40">
            <IconPeople className="w-4 h-4 text-gray-500" />
          </span>
          <span className="flex-1 text-left">Contractors</span>
        </button>
      </div>

      {/* MONITORING section */}
      <div className="mt-8">
        <p className="text-xs tracking-widest text-gray-500 mb-4">MONITORING</p>

        <div className="space-y-4">
          <button className="w-full flex items-center gap-4 px-6 py-3 rounded-full text-white text-sm shadow-md bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-500 hover:brightness-95 transition relative overflow-hidden">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 ring-1 ring-white/20">
              <IconBrief className="w-4 h-4 text-white" />
            </span>
            <span className="flex-1 text-left">Attendance</span>
          </button>

          <button className="w-full flex items-center gap-4 px-6 py-3 rounded-full text-white text-sm shadow-md bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-500 hover:brightness-95 transition relative overflow-hidden">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 ring-1 ring-white/20">
              <IconBrief className="w-4 h-4 text-white" />
            </span>
            <span className="flex-1 text-left">Work Logs</span>
          </button>

          <button className="w-full flex items-center gap-4 px-6 py-3 rounded-full text-white text-sm shadow-md bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-500 hover:brightness-95 transition relative overflow-hidden">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 ring-1 ring-white/20">
              <IconBrief className="w-4 h-4 text-white" />
            </span>
            <span className="flex-1 text-left">Goals</span>
          </button>
        </div>
      </div>

      {/* FUNCTIONS section */}
      <div className="mt-8">
        <p className="text-xs tracking-widest text-gray-500 mb-4">FUNCTIONS</p>

        <div className="space-y-4">
          <button className="w-full flex items-center gap-4 px-6 py-3 rounded-full text-white text-sm shadow-md bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-500 hover:brightness-95 transition relative overflow-hidden">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 ring-1 ring-white/20">
              <IconBrief className="w-4 h-4 text-white" />
            </span>
            <span className="flex-1 text-left">Payouts</span>
          </button>

          <button className="w-full flex items-center gap-4 px-6 py-3 rounded-full text-white text-sm shadow-md bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-500 hover:brightness-95 transition relative overflow-hidden">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 ring-1 ring-white/20">
              <IconBrief className="w-4 h-4 text-white" />
            </span>
            <span className="flex-1 text-left">Legal</span>
          </button>

          <button className="w-full flex items-center gap-4 px-6 py-3 rounded-full text-white text-sm shadow-md bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-500 hover:brightness-95 transition relative overflow-hidden">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 ring-1 ring-white/20">
              <IconBrief className="w-4 h-4 text-white" />
            </span>
            <span className="flex-1 text-left">Documents</span>
          </button>
        </div>
      </div>

      {/* optional footer space */}
      <div className="mt-8 text-xs text-gray-400">&nbsp;</div>
    </aside>
  )
}
