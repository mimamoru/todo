import React, {useState, useCallback, useEffect} from 'react';
//import './styles/main.css'
//import {TaskList,Filter,Input} from './index'

const Task=(props)=>{
    return (
        <li>
        <label>
      <input
        type="checkbox"
        checked={props.done}
        onChange={()=>props.func(props.key)}
      />
      <span>
        {props.task}
      </span>
    </label>
    </li>
      );
}
export default Task;