import burger from './assets/burger-king-comp.jpg'
import './showMe.css'

// Internal CSS
let classCaptain={
  color: 'blue', 
  backgroundColor: 'pink',
  display :'flex'
}

function ShowMe(){
  return  (
   
    <div className="wrapper">
      <img src={burger} alt="burger" />
      <div className="text">
        <p>Hungry Burger</p>
        <p>$2.50</p>
        <button>Order now</button>
      </div>
    </div>

     // <div>
    //   {/* inline CSS */}
    //     <h1 style={{color: 'red', backgroundColor: 'pink'}}>ShowMe</h1>
    // <div style={classCaptain}>ShowMe</div>
    // </div>
  )
   
  
}

export default ShowMe
