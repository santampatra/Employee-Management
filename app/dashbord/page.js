import React from 'react'
import Dashboard from './component/Dashbord'
import Sidebar from '../componenets/Sidebar'
import AssetsSection from './component/AssetsSection'
import PayrollHistory from './component/PayrollHistory'

const page = () => {
  return (
    <div className='flex justify-around'>
      <Sidebar />
      <div className='flex flex-col'>
      <Dashboard/>
      <AssetsSection/>
      <PayrollHistory/>
      </div>
    </div>
  )
}

export default page
