import React, {useState} from 'react';
//import './styles/main.css'

const Input=(props)=>{
    const [input,setInput] = useState("");
    
    const getKey = () => Math.random().toString(32).substring(2);
    
    const handleSubmit =()=>{   
        console.log(input)     
        props.push({
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