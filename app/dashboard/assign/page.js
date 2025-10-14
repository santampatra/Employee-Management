"use client";
import React from "react";
import Sidebar from "@/app/componenets/Sidebar";
import AssignNewAsset from "../AssignNewAsset";

export default function AssignPage() {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <Sidebar />

        <main className="p-6 md:p-10">
          <AssignNewAsset />
        </main>
    </div>
  );
}