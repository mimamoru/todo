import React, {useState, useCallback, useEffect} from 'react';
import './styles/main.css'
//import {TaskList,Filter,Input} from './index'

const Filter=(props)=>{
    const fiilerList=["All","TODO","DONE"]
    
    return (
        <>
        {fiilerList.map(e=>(<a 
        onClick={()=>props.handleFilter(e)}>{e}</a>))}
        </>
    );
}
export default Filter;