import React from 'react'
import Navbar from './Navbar'

const parent = ({children}) => {
  return (
    <div>
        <Navbar/>
        {children}
        <Footer />
    </div>
  )
}

export default parent