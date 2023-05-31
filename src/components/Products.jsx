import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const Products = () => {
  // const NiyiRef = useRef("");
  // console.log(NiyiRef.current.value);
  const [count, setCount] = useState(0)
  const [name, setName] = useState('');
  const [data, setData] =useState([])
  // useEffect(()=>{
  //   console.log('I am running')
  // }, [name])

useEffect(()=>{
  const sleepingOmotosho = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((bShuk) => setData(bShuk));
  };
  sleepingOmotosho();
}, [])











  // useEffect(()=>{
  //  const getPosts =()=>{
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  //  }
  //  getPosts()
  // },[name])
  const navigate = useNavigate();
  return (
    <div>
      <h1>This is the PRODUCTS Page</h1>
      <input type="text" onChange={(e)=>setName(e.target.value)}/>
      <button >Change Name</button>
      <button onClick={() => navigate("new")}>new</button>
      <button onClick={() => navigate("old")}>old</button>
      <Outlet />
      <button onClick={() => setCount(count + 1)}>Add</button>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1)}>Subtract</button>
     {data && data.map((item)=>{
      return <div key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.completed}</p>
      </div>
     })}
    </div>
  );
};

export default Products;



