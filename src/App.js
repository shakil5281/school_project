import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navber } from './components'

const App = () => {
  return (
   <>
    <Navber />
    <div className='mx-[300px]'>
      <Outlet />
    </div>
   </>
  )
}

export default App