import React from 'react'
import { Outlet } from 'react-router-dom'
const LayoutNoNavbar = () => {
  return (
    <>
    <Outlet />
    </>
  )
}

export default LayoutNoNavbar