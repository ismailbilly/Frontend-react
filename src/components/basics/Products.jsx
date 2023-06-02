import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";



const Products = () => {
  // const NiyiRef = useRef("");
  // console.log(NiyiRef.current.value);
  const [count, setCount] = useState(0)
  const [name, setName] = useState('');
  const [data, setData] =useState([])
  const [loading, setLoading] = useState(false);
  // useEffect(()=>{
  //   console.log('I am running')
  // }, [name])

useEffect(()=>{
  const sleepingOmotosho = async() => {
    
    
    //GET REQUEST
    // try {
    //   const response = await fetch("https://jsonplaceholder.typicode.com/todos/")
    //   const res = await response.json();
    //   setData(res)
       
      
    // } catch (error) {
    //   console.log(error)
    // }
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/photos/")
      .then((response) => response.json())
      .then((bShuk) => {
        setData(bShuk)
        setLoading(false);
      })
      .catch(err=>console.error(err))
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
      
      {!loading ? 
      <>
      <h1>This is the PRODUCTS Page</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button>Change Name</button>
      <button onClick={() => navigate("new")}>new</button>
      <button onClick={() => navigate("old")}>old</button>
      <Outlet />
      <button onClick={() => setCount(count + 1)}>Add</button>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1)}>Subtract</button>
      {data&&data.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.url} alt="" />
              {/* <h3>{item.title}</h3>
              <p>{item.completed}</p> */}
            </div>
          );
        })}</>: (
        <ClipLoader
          color='#d74737'
          loading={loading}
          
          size={100}
          
        />
      )}
      
    </div>
  );
};

export default Products;



