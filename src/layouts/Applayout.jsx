import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const Applayout = () => {
  return (
    <div>
      <div className='grid-background'></div>
        <main className='min-h-screen  container'>
          <Header/>
          <Outlet/>
        </main>

        {/* footer */}
        <div className='p-10 text-center bg-gray-800 mask-t-from-10'>Made with💗 by Rizzxdev </div>
    </div>
  )
}

export default Applayout
