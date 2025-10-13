"use client";
import React from "react";
import PayoutGroupDetail from "./PayoutGroupDetail";
import Sidebar from '../../componenets/Sidebar';

export default function PayouGroupDetailPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar (optional) */}
      { <Sidebar /> }

      {/* Main Page Content */}
      <main className="flex flex-col flex-1 p-4 sm:p-6 md:p-10 bg-gray-50">
        <PayoutGroupDetail />
      </main>
    </div>
  );
}
