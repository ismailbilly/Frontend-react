import {useState} from 'react'

let  uniqueId=Math.random()
const Form = () => {
    const [menu, setMenu] =useState('')
    const [newMenus, setNewMenus] = useState([])
   function pickMenu(e){
    setMenu(e.target.value)
   }

   function AddMenu(){
    
    setNewMenus([...newMenus, {
        id:uniqueId++, 
        menu:menu
    }])//[{id:1, menu:pizza}]
    
   }
  return (
    <div style={{width: '100%', textAlign:'center',}}>
    <form style={{margin: '20px 0'}}>
    <h1>Kobosky Restaurant Menu</h1>
    <input 
    type='text' 
    placeholder='Enter Food of choice'
    style={{padding: '5px 20px', borderRadius: 7}}
    onChange={pickMenu}
    />
    <button 
     onClick={AddMenu}>Add menu</button>
    <ul>
        {newMenus.map((newMenu) =>{
            return(<li key={newMenu.id}>
                {newMenu.menu}

            <button  onClick={()=>{
                setNewMenus(newMenus.filter((item)=>{
                   return newMenu.id !== item.id 
                }))
            }}>Delete</button>
            </li>)
        })}
    </ul>
    
</form>
</div>
    
    
  )
}

export default Form
