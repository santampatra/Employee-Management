"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // for icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-950 text-white shadow-md">
      <div className="flex justify-between items-center px-4 py-3 md:px-8">
        {/* Logo */}
        <h3 className="text-lg font-semibold">Pioneer</h3>

        {/* Hamburger Button (mobile) */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <Link href="/" className="hover:text-gray-300 transition">
            Home
          </Link>
          <Link 
            href="/payout/payroll"
            className="hover:text-gray-300 transition"
            >
              PayRoll
          </Link>
          <Link
            href="/payout/payoutgroupdetail"
            className="hover:text-gray-300 transition"
          >
            Payout Group Details
          </Link>
          <Link
            href="/payout/payoutoverview"
            className="hover:text-gray-300 transition"
          >
            Payout Overview
          </Link>
          <Link
            href="/payout/payoutallgroups"
            className="hover:text-gray-300 transition"
          >
            Payout All Groups
          </Link>
          <Link href="/dashboard" className="hover:text-gray-300 transition">
            Dashboard
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start bg-blue-900 px-6 py-4 space-y-3">
          <Link
            href="/"
            className="hover:text-gray-300 w-full"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/payout/payoutgroupdetail"
            className="hover:text-gray-300 w-full"
            onClick={() => setIsOpen(false)}
          >
            Payout Group Details
          </Link>
          <Link
            href="/payout/payoutoverview"
            className="hover:text-gray-300 w-full"
            onClick={() => setIsOpen(false)}
          >
            Payout Overview
          </Link>
          <Link
            href="/payout/payoutallgroups"
            className="hover:text-gray-300 w-full"
            onClick={() => setIsOpen(false)}
          >
            Payout All Groups
          </Link>
          <Link
            href="/dashboard"
            className="hover:text-gray-300 w-full"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
