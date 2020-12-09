import React, {useState, useCallback, useEffect} from 'react';
import './styles/main.css'
//import {TaskList,Filter,Input} from './index'

const Input=(props)=>{
    const [input,setInput] = useState("");
    
    const getKey = () => Math.random().toString(32).substring(2);
    
    const handleSubmit =()=>{     
        props.handleSubmit({
            key: getKey(),
            text: input,
            done: false
          }
          );
        setInput("");
    }
    return (
        <>
        <input type="text" onChange={(e)=>{setInput(e.target,value)}}>{input}</input>
        <button onClick={handleSubmit}></button>
        </>
    );
}
export default Input;