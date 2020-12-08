import React, {useState, useCallback, useEffect} from 'react';
import './styles/main.css'
//import {TaskList,Filter,Input} from './index'

const Input=(props)=>{
    const [input,setInput] = useState("");
    return (
        <>
        <input type="text" onChange={handleChange}/>
        <button onClick={()=>props.submit(input)}></button>
        </>
    );
}
export default Input;