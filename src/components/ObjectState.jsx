import {useState} from 'react'
import './ObjectState.css'
const ObjectState = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [checked, setChecked] = useState('')
    // const [info, updateInfo] = useState({
    //     name: '',
    //     password: '',
    //     checked: false
    // })
    function getName(e){
        setName(e.target.value)
    //     updateInfo(()=>{
    //     return {...info, name: e.target.value}
    // })
        
    }
    function getPassword(e){
        setPassword(e.target.value)
    }
    function isChecked(e){
        setChecked(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        setName('')
        setPassword('')
        setChecked('')
        console.log(name, password, checked)
    }
  return (
       <div className="container">
        <div className="content">
            <div className="inner-content">
                <h3>Login to ColorLib</h3>
                <form onSubmit={handleSubmit}>
                   <div className="name-input">
                    <label htmlFor="username">Username</label>
                    <input 
                    type="text" 
                    name="username" 
                    id="username"
                    placeholder="Enter your name"
                    value={name}
                    onChange={getName}
                    />
                   </div>
                   <div className="name-input">
                    <label htmlFor="password">Password</label>
                    <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="Password"
                    value={password}
                    onChange={getPassword}
                    />
                   </div>
                   <div className="remember-me">
                        <div className="inner-remember-me">
                            <input 
                            type="checkbox"
                            name="remember"
                            id="remember"
                            value={checked}
                            onClick={isChecked}
                            />
                            <label htmlFor="remeber">Remember me</label>
                        </div>
                        <a href="/">Forgot password?</a>
                   </div>
                   <input type="submit" value="Submit" id="submit"/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ObjectState