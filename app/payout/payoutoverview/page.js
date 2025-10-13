"use client";
import React from "react";
import Sidebar from '../../componenets/Sidebar';
import PayoutOverview from "./PayoutOverview";

export default function PayoutOverviewPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <main className="flex flex-col flex-1 p-6 sm:p-8 md:p-10 bg-gray-50 overflow-y-auto">
        <PayoutOverview />
      </main>
    </div>
  );
}
