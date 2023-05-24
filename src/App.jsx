import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import pizza from './assets/pizza.jpg'
import pizza8 from './assets/pizza-8.jpg'
import pizza7 from './assets/pizza-7.jpg'
import './App.css'
import Button from './components/Button';
import Form from './components/Form';
import ObjectState from './components/ObjectState';

// let btnStyle={
//   borderRadius:8,
//   color:'white',
//   backgroundColor:'black'
// }

const myArr =[ {
  name:'Pepperoni',
  price: 20,
  myImage: pizza
},
{
  name:'Suya Supreme',
  price: 30,
  myImage: pizza7
},
{
  name:'Beef Jerky',
  price: 25,
  myImage: pizza8
}
]

// parent component
function App() {
  const [count, setCount] = useState(0)
  return (
    
    <div className='coker'>
       <Navbar  cartCount = {count} />
      <Form/>
     
      
      {/* <Button count = {count} setCount={setCount}/> */}
      {/* <Button /> */}
      {/* <Button>Sakeena</Button>
      <Button>Alabi</Button> */}
      {/* <div className="flex-card"> */}
     
      {/* <Card data={myArr}/> */}
          {/* <Card name='coker' age={12} /> */}
      {/* <Card name='Sakeena' age={5} myImage={pizza} />
      <Card name='Sakeena' age={5} myImage={pizza7} />
      <Card name='Sakeena' age={5} myImage={pizza8} /> */}
      {/* </div> */}
     
    {/* <Hero/>
    */}
    
    
    
    

    </div>
  )
  
}

export default App
