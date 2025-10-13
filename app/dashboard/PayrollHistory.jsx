// import React from "react";
// import { Download } from "lucide-react"; // make sure you have lucide-react installed

// export default function PayrollHistory() {
//   const payrollData = [
//     { id: "#1834", month: "March", date: "02/04/2025", days: 26 },
//     { id: "#1834", month: "March", date: "02/04/2025", days: 26 },
//     { id: "#1834", month: "March", date: "02/04/2025", days: 26 },
//     { id: "#1834", month: "March", date: "02/04/2025", days: 26 },
//     { id: "#1834", month: "March", date: "02/04/2025", days: 26 },
//     { id: "#1834", month: "March", date: "02/04/2025", days: 26 },
//   ];

//   return (
//     <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       <h2 className="text-lg font-medium text-gray-800 mb-6">Payroll History</h2>

//       <div className="overflow-x-auto">
//         <table className="min-w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
//           {/* Table Head */}
//           <thead>
//             <tr className="text-left text-sm text-gray-600 border-b border-gray-200">
//               <th className="py-4 px-6 font-medium">Payroll ID</th>
//               <th className="py-4 px-6 font-medium">Month</th>
//               <th className="py-4 px-6 font-medium">Date of release</th>
//               <th className="py-4 px-6 font-medium">No of working days</th>
//               <th className="py-4 px-6 font-medium">Action</th>
//             </tr>
//           </thead>

//           {/* Table Body */}
//           <tbody>
//             {payrollData.map((row, index) => (
//               <tr
//                 key={index}
//                 className="text-sm text-gray-800 border-b border-gray-100 hover:bg-gray-50 transition"
//               >
//                 <td className="py-4 px-6">{row.id}</td>
//                 <td className="py-4 px-6">{row.month}</td>
//                 <td className="py-4 px-6">{row.date}</td>
//                 <td className="py-4 px-6">{row.days}</td>
//                 <td className="py-4 px-6">
//                   <div className="flex items-center gap-4">
//                     <button
//                       type="button"
//                       className="text-gray-500 hover:text-gray-800 transition"
//                       aria-label="Download payroll"
//                     >
//                       <Download className="w-4 h-4" />
//                     </button>
//                     <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// }
import React from "react";
import { Download } from "lucide-react"; // make sure you have lucide-react installed

export default function PayrollHistory() {
  const payrollData = [
    { id: "#1834", month: "March", date: "02/04/2025", days: 26 },
    { id: "#1834", month: "March", date: "02/04/2025", days: 26 },
    { id: "#1834", month: "March", date: "02/04/2025", days: 26 },
    { id: "#1834", month: "March", date: "02/04/2025", days: 26 },
    { id: "#1834", month: "March", date: "02/04/2025", days: 26 },
    { id: "#1834", month: "March", date: "02/04/2025", days: 26 },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-lg font-medium text-gray-800 mb-6">Payroll History</h2>

      <div className="overflow-x-auto">
        <div className="border border-gray-200 rounded-2xl overflow-hidden">
          <table className="min-w-full border-collapse bg-white">
            {/* Table Head */}
            <thead>
              <tr className="text-left text-sm text-gray-600 border-b border-gray-200">
                <th className="py-4 px-6 font-medium">Payroll ID</th>
                <th className="py-4 px-6 font-medium">Month</th>
                <th className="py-4 px-6 font-medium">Date of release</th>
                <th className="py-4 px-6 font-medium">No of working days</th>
                <th className="py-4 px-6 font-medium">Action</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {payrollData.map((row, index) => (
                <tr
                  key={index}
                  className="text-sm text-gray-800 border-b border-gray-100 hover:bg-gray-50 transition"
                >
                  <td className="py-4 px-6">{row.id}</td>
                  <td className="py-4 px-6">{row.month}</td>
                  <td className="py-4 px-6">{row.date}</td>
                  <td className="py-4 px-6">{row.days}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        className="text-gray-500 hover:text-gray-800 transition"
                        aria-label="Download payroll"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                      <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
