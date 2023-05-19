import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import pizza from './assets/pizza.jpg'
import pizza8 from './assets/pizza-8.jpg'
import pizza7 from './assets/pizza-7.jpg'
import './App.css'

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
  
  return (
    <div className='coker'>
      <div className="flex-card">
     
      <Card data={myArr}/>
          {/* <Card name='coker' age={12} /> */}
      {/* <Card name='Sakeena' age={5} myImage={pizza} />
      <Card name='Sakeena' age={5} myImage={pizza7} />
      <Card name='Sakeena' age={5} myImage={pizza8} /> */}
      </div>
     
    
    
    
    
    

    </div>
  )
  
}

export default App
