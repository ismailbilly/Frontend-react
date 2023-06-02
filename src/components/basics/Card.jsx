import reactLogo from '../assets/react.svg'
import './Card.css'
const Card = ({data}) => {
 

 
  return (
   
    <div>
     {data.map((item, index)=>{
      return <div className="card" key={index}>
         <div className="card-img">
         <img  className='pizza-img' src={item.myImage} alt="react-logo" width={100} height={100}/>
         </div>
         <div className="card-content">
             <p className='card-text'>{item.name}</p>
             <p className='card-text'>${item.price}</p>
             <button className='btn'>Add to Cart</button>
         </div>
         
     </div>
     })}
    </div>
  )
}

export default Card

