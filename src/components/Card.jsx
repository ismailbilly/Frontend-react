import reactLogo from '../assets/react.svg'

const Card = (props) => {
   
  return (
    <div>
        <div className="card">
            <div className="card-img">
            <img src={reactLogo} alt="react-logo" />
            </div>
            <div className="card-content">
                <p>{props.kalakuta}
                </p>
                <button className='btn'>Add to Cart</button>
            </div>
            
        </div>
    </div>
  )
}

export default Card