import React,{Component, useState} from "react";                          
import logo from './logo.svg';     
    

import './App.css';
import Header from './components/Header';      

function App() {
  const [value, setValue] = useState("hari");
  const hari= function(){
    setValue("hari");
  }

  const royal=function(){
    setValue("royal");
  }

  const roshan=function(){
    setValue("roshan");
  }
  return (
     <div>
        <h1> {value} </h1> 
        <div>
            <button onClick={hari}>Hari</button>
            <button onClick={royal}>Royal</button>
            <button onClick={roshan}>Roshan</button>

        </div>

     </div>

  )

}
export default App;                         
