"use client"; // required because you’re using interactive components

import React from "react";
import Sidebar from '../componenets/Sidebar';
import Dashboard from "./Dashboard";
import AssetsSection from "./AssetsSection";
import PayrollHistory from "./PayrollHistory";

export default function DashboardPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex flex-col flex-1 gap-6 p-4 sm:p-6 md:p-10 overflow-y-auto bg-gray-50">
        <Dashboard />
        <AssetsSection />
        <PayrollHistory />
      
      </main>
    </div>
  );
}