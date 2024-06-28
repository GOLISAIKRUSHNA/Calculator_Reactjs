


import axios from "axios";
import React, {useState } from "react";

export default function App() {
  const[data,setData]=useState({
    userName:'',
    email:'',
    password:'',
    confirmpassword:''
  })
  const{userName,email,password,confirmpassword}=data
  const handler=e=>{
    setData({...data,[e.target.name]:[e.target.value]})
  }
  const sub=e=>{
    e.preventDefault();

    axios.post("https://teluguskillhub-9fb40-default-rtdb.firebaseio.com/register.json", data).then(
      ()=>{alert("successfully submitted")}
    ).catch(()=>console.log('error ayya'));
    console.log(data);

   
  }
    return (
      <div><center>
        <form action="">
            {/* <label htmlFor="">UserName:</label> */}
            <input type="text" value={userName} name='userName' onChange={handler}/><br />
            {/* <label htmlFor="">Email:</label> */}
            <input type="email" value={email}  name='email' onChange={handler }/><br />
            {/* <label htmlFor="" >Password:</label> */}
            <input type="password"  value={password} name='password'onChange={handler}/><br />
            {/* <label htmlFor="" >Confirmpassword:</label> */}
            <input type="password"  value={confirmpassword} name='confirmpassword' onChange={handler}/><br />
            
            <input type="submit" placeholder='Submit' onClick={sub} />
        </form>

        

        </center>
      </div>
    )
}
