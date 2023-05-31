import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import pizza from "./assets/pizza.jpg";
import pizza8 from "./assets/pizza-8.jpg";
import pizza7 from "./assets/pizza-7.jpg";
import "./App.css";
import Button from "./components/Button";
import Home from "./components/Home";
import ObjectState from "./components/ObjectState";
import StateExamples from "./components/StateExamples";
import { Routes, Route } from "react-router-dom";
import Fallback from "./components/Fallback";
import Products from "./components/Products";
import NewProducts from "./components/NewProducts";
import OldProducts from "./components/OldProducts";
import LayoutNoNavbar from "./components/LayoutNoNavbar";
import Layout from "./components/Layout";
// let btnStyle={
//   borderRadius:8,
//   color:'white',
//   backgroundColor:'black'
// }

const myArr = [
  {
    name: "Pepperoni",
    price: 20,
    myImage: pizza,
  },
  {
    name: "Suya Supreme",
    price: 30,
    myImage: pizza7,
  },
  {
    name: "Beef Jerky",
    price: 25,
    myImage: pizza8,
  },
];

// parent component
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<ObjectState />} />
        </Route>
        <Route element={<LayoutNoNavbar />}>
          <Route path="products" element={<Products />} />
          <Route path="old" element={<OldProducts />} />
          <Route path="new" element={<NewProducts />} />
          <Route path="fallback" element={<Fallback />} />
        </Route>

        {/* <Route path="products" element={<Products />}>
          <Route path="old" element={<OldProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route> */}
      </Routes>

      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<ObjectState />} />
        

        <Route path="products" element={<Products />}>
          <Route path="old" element={<OldProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="*" element={<Fallback />} />
      </Routes> */}
    </>
  );
}

export default App;
{
  /* <div className='coker'>
       <Navbar  cartCount = {count} />
      <Form/> */
}

{
  /* <Button count = {count} setCount={setCount}/> */
}
{
  /* <Button /> */
}
{
  /* <Button>Sakeena</Button>
      <Button>Alabi</Button> */
}
{
  /* <div className="flex-card"> */
}

{
  /* <Card data={myArr}/> */
}
{
  /* <Card name='coker' age={12} /> */
}
{
  /* <Card name='Sakeena' age={5} myImage={pizza} />
      <Card name='Sakeena' age={5} myImage={pizza7} />
      <Card name='Sakeena' age={5} myImage={pizza8} /> */
}
{
  /* </div> */
}

{
  /* <Hero/>
   */
}
