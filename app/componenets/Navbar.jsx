import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-2 bg-blue-950 text-white'>
      <h3>Pioneer</h3>
      <div className='flex gap-10 text-white'>
        <Link href="/">Home</Link>
        <Link href="/payout/payoutgroupdetail">Payout Group Details</Link>
        <Link href="/payout/payoutoverview">Payout Overview</Link>
        <Link href="/payout/payoutallgroups">Payout All Groups</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </div>
  )
}

export default Navbar
