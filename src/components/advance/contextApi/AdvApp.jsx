import {useState, createContext, useContext} from 'react'

const AdvApp = () => {
    const userContext = createContext();
    const [title,setTitle] =useState('Home')
    const [username, setUsername] = useState('Ade Musa Obi')  
                  
  return (
    <div className="app">
      <h1>Welcome, {username}</h1>
      <Dashboard title={title} username={username} />
    </div>
  );
}

export default AdvApp