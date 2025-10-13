import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-2 bg-blue-950 text-white'>
      <h3>Pioneer</h3>
      <div className='flex gap-10 text-white'>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/product">Product</Link>
        <Link href="/payout/payoutoverview">Payout Overview</Link>
        <Link href="/payout/payoutallgroups">payoutallgroups</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </div>
  )
}

export default Navbar
