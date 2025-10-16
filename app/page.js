import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='flex gap-10 bg-black text-white'>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/payout/payoutoverview">PayoutOverview</Link>
      <Link href="/payout/payoutallgroups">PayoutAllGroups</Link>
      <Link href="/payout/payoutgroupdetail">PayoutGroupDetail</Link>
      <Link href="/payout/payroll">PayRoll</Link>
    </div>
  )
}
export default page