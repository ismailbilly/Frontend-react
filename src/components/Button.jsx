import {useState} from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
const Button = ({count, setCount}) => {
   
   const [price, setPrice] = useState(0)

    function countDown(){
        setCount(count - 1)   
        // setPrice(price - 40) 

    }
    function countUp(){
        setCount(count + 1)   
        // setPrice(price + 40) 

    }
  return ( 
    <>
            <p>samosa</p>
        <button onClick={countUp}>+</button>
         <span>{count}</span>
        <button onClick={countDown}>-</button>
        {/* <div>
            <p>samosa</p>
        <button onClick={countUp} style={{background: `${price>80 ? 'blue' : ''}`}}>+</button>
         <span>{count}</span>
        <button onClick={countDown}>-</button>
        </div>

        <div>
        <p>chicken</p>
        <button onClick={()=>{setPrice(price + 1000)}}>+</button>
         <span>{count}</span>
        <button onClick={()=>{setPrice(price - 1000)}}>-</button>
        </div>
        <div>{price}</div> */}
    </>
   
  )
}

export default Button