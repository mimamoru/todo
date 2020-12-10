import React, {useState, useCallback, useEffect} from 'react';
//import './styles/main.css'
//import {TaskList,Filter,Input} from './index'

const Input=(props)=>{
    const [input,setInput] = useState("");
    
    const getKey = () => Math.random().toString(32).substring(2);
    
    const handleSubmit =()=>{        
        props.submit({
            key: getKey(),
            text: input,
            done: false
          }
          );
        setInput("");
    }
    return (
        <>
        <input type="text" onChange={(e)=>{setInput(e.target.value)}} value={input}/>
        <button onClick={handleSubmit}>add</button>
        </>
    );
}
export default Input;