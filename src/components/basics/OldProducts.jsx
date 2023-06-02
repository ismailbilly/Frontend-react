import React from 'react'
import { useNavigate } from 'react-router-dom'
const OldProducts = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>OldProducts</h1>
      <button onClick={()=>navigate(-1)}>Back</button>
    </div>
  );
}

export default OldProducts