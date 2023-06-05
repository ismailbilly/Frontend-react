import {useEffect, useState,useRef} from 'react'
import Hero from './Hero'
// import Loader from './Loader'

const Fallback = () => {
  const [menus, setMenus] = useState([])
  const [name, setName] = useState('')
  const titleRef = useRef('')
  const postRef = useRef('');

// const url = "https://pizza-and-desserts.p.rapidapi.com/desserts";
// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '7cdadc14abmsh94beba9a5d76f36p11d8a9jsn1762db955ba1',
//     'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
//   }
// };
// useEffect(()=>{
//   const getMenu = async()=>{
//      try {
//        const response = await fetch(url, options);
//        const result = await response.json();
//        console.log(result);
       
//      } catch (error) {
//        console.error(error);
//      }
//   }
//  getMenu()
// })
//  useEffect(() => {
//    titleRef.current.focus();
//  }, []);
// function handleFetch(event){
//   event.preventDefault();
  
//    let post = {
//      title: titleRef.current.value,
//      body: postRef.current.value,
//      userId: 1,
//    };
//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify(post),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => {
//       console.log(json)
      
//     })
//       .catch((e) => console.log(e));
//   // fetch("https://jsonplaceholder.typicode.com/posts", {
//   //   method: "POST",
//   //   body: JSON.stringify({
//   //     title: "foo",
//   //     body: "bar",
//   //     userId: 1,
//   //   }),
//   //   headers: {
//   //     "Content-type": "application.json; charset=UTF-8",
//   //   },
//   // })
//   //   .then((res) => res.json())
//   //   .then((resp) => console.log(resp))
//   //  
// }
function handleSubmit(e){
  e.preventDefault()
   
}
//  useEffect(() => {
//    localStorage.setItem("name", name);
//  }, [name]);

useEffect(()=>{
  localStorage.setItem('Username', name)
  
}, [name])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" onChange={(e)=>{setName(e.target.value)}}/>
        <label htmlFor="body">Body</label>
        <input type="text" name="body" id="body" ref={postRef} />
        <input type="submit" value="Submit" />
      </form>
      
    </>
    // <div>
    //   {menus&& menus.map((menu, index)=>{
    //     return <div key={menu.id}>
    //       <h3>{menu.name}</h3>
    //       <p>{menu.description}</p>
    //       <img src={menu.img} alt="pizza" />
    //     </div>
    //   })}
    // </div>
  );
}

export default Fallback