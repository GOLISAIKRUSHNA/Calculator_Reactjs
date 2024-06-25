import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";

export default function App() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: ""
  });

  const { username, email, password, confirmpassword } = data;

  const handle = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    var see=0;
    if(username.length<=5){
    alert("please enter greater than five character's")
    }
    else if(password===confirmpassword){
      console.log(data);
    }
    else if(see===0)
    {
      see=0;
    }
   
  };

  return (
    <div>
      <center>
        <form onSubmit={submit}>
          <h2>Login in</h2>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={handle}
          />
          <br />
          <input type="text" name="email" value={email} onChange={handle} placeholder="Email" required />
          <br />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handle}
          />
          <br />
          <input
          type="password"
          name="confirmpassword"
          value={confirmpassword}
          placeholder="Confirm Password"
          onChange={handle}
          >
          </input>
          
          <br />

          <input type="submit" name="submit" placeholder="submit" />
          {password!=confirmpassword?  <p>rewrite password again</p>:null}
        </form>
      </center>
    </div>
  );
}
