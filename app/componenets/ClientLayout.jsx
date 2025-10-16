"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";

export default function ClientLayout({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main
        className={`flex-1 transition-all duration-300 ease-in-out pt-20 pb-10 px-3 sm:px-6 md:px-8 ${
          isOpen ? "md:ml-56" : "md:ml-20"
        }`}
      >
        {children}
      </main>
    </div>
  );
}
