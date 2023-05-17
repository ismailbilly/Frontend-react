import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

// parent component
function App() {
  
  return (
    <div className='coker'>
      
     {/* <Navbar />
    <Hero /> */}
     {/* Card('Adeola') */}
     {/* Card('Omotosho') */}
    <Card  kalakuta='Gbeminiyi'/>
    <Card  kalakuta='Adeola'/>
    <Card  kalakuta='Omotosho'/>

    </div>
  )
  
}

export default App
