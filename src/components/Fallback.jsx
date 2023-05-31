import {useEffect, useState} from 'react'

const Fallback = () => {
  const [menus, setMenus] = useState([])

const url = "https://pizza-and-desserts.p.rapidapi.com/desserts";
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '7cdadc14abmsh94beba9a5d76f36p11d8a9jsn1762db955ba1',
    'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
  }
};
useEffect(()=>{
  const getMenu = async()=>{
     try {
       const response = await fetch(url, options);
       const result = await response.json();
       console.log(result);
       
     } catch (error) {
       console.error(error);
     }
  }
 getMenu()
})

  return (
    <div>
      {menus&& menus.map((menu, index)=>{
        return <div key={menu.id}>
          <h3>{menu.name}</h3>
          <p>{menu.description}</p>
          <img src={menu.img} alt="pizza" />
        </div>
      })}
    </div>
  )
}

export default Fallback