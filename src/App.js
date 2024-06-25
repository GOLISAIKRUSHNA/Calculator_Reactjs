import React, { useState } from 'react'
import "./App.css"
export default function App() {

  const [input,setInput]=useState('')
const [result,setResult]=useState('0')
// const result=input
  const handling=e=>{
    setInput(e.target.value)
  }
  
  return (
    <div>
    
      <center className='hi'>
        
      
        <input type="text" name='input' value={input} onChange={handling}/><br /> <br />
        {/* {input} */}

        <button onClick={()=> setInput('')} >Clr</button>
        <button onClick={()=>setResult(eval(input))}>Res</button>



       
        <h1>Result is :{result}</h1>

        <button onClick={()=> setInput(input+'1')}>1</button>
        <button onClick={()=> setInput(input+'2')}>2</button>
        <button onClick={()=> setInput(input+'3')}>3</button>
        <button onClick={()=> setInput(input+'4')}>4</button> <br />
        <button onClick={()=> setInput(input+'5')}>5</button>
        <button onClick={()=> setInput(input+'6')}>6</button>
        <button onClick={()=> setInput(input+'7')}>7</button>
        <button onClick={()=> setInput(input+'8')}>8</button> <br />
        <button onClick={()=> setInput(input+'9')}>9</button>
        <button onClick={()=> setInput(input+'0')}>0</button>
        <button onClick={()=> setInput('')} >clr</button>
        <button onClick={()=> setInput(input+'+')}>+</button> <br />
        <button onClick={()=> setInput(input+'-')}>-</button>
        <button onClick={()=> setInput(input+'/')}>/</button>
        <button onClick={()=> setInput(input+'%')}>%</button>
        <button onClick={()=> setResult(eval(input))}>=</button> <br />


      


      </center>
      </div>
      
    
  )
}
