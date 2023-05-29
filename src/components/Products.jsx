import React from 'react'
import { useNavigate } from 'react-router-dom'
const Products = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h1>This is the PRODUCTS Page</h1>
        <button onClick={()=>navigate('new')}>new</button>
        <button onClick={()=>navigate('old')}>old</button>
    </div>
  )
}

export default Products