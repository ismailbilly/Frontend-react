import {useState}from 'react'
import {BiToggleRight, BiToggleLeft} from 'react-icons/bi'
import {AiFillStar} from 'react-icons/ai'
const StateExamples = () => {
    const [show, setShow] = useState(true)
     const [isToggled, setIsToggled] = useState(false)
    const [next, setNext] = useState(true)
    function handleSubmit(e){
        e.preventDefault();
    }
    function showUs(){
        setShow(!show)
        console.log(show)
    }
   
  return (
      <form onSubmit={handleSubmit}>
            {next ? 
                <div>
                    <label htmlFor="name">Name</label> <br />
                     <input type="text" name="name" style={{borderRadius: 10}}/>
                    <button onClick={()=>setNext(false)}>Next</button>
                </div>
                : '' 


                ? '' : <div>
                <label htmlFor="age">Age</label> <br />
                 <input type="text" name="age" style={{borderRadius: 10}}/>
                <button onClick={()=>setNext(true)}>Back</button>
                <button>Submit</button>
            </div>
            }
            
        </form> 
        // <div style={{position:'relative', height:'100vh', display:'grid', placeContent:'center'}}>
        
        //     {show ? <button onClick={()=>setShow(!show)}>Show Modal</button> :
        //         <div>
        //             <div style={{  position:'fixed', top: 0, bottom: 0, right: 0, left: 0, width:'100%', height:'100%',background: 'rgba(49,49,49,0.8)' }}></div>
        //             <div  style={{position:'absolute', top:'50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius:10, padding:20, background:'white'}}>
        //                 <p>Hello,  I am a modal</p>
        //                 <button onClick={()=>setShow(!show)}>Close</button>
        //             </div>
                
        //         </div>
        //         }
        // </div> 
     
            // dark/light theme
    //  <div style={isToggled ? {backgroundColor: 'yellow', height:'100vh', transition:'0.5s ease'} : {backgroundColor: 'blue', height:'100vh', transition:'0.s5 ease'}}>
    //    {isToggled ? <BiToggleRight size={50} onClick={()=>setIsToggled(false)}/>
    //     : <BiToggleLeft size={50} onClick={()=>setIsToggled(true)}/>}
    //  </div> 
    // <div>
    //     {/* show/hide */}
    //     <button onClick={showUs}>Show/hide</button>
    //     {show && <p>My name is Shukroh</p>}
        
            
        
    // </div>
  )
            {/* modal */}
        
        {/* form with next button */}
      
    {/* </> */}
    

  
}

export default StateExamples