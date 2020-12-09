import React, {useState, useCallback, useEffect} from 'react';
import './styles/main.css'
import {TaskList,Filter,Input} from './index'

const Todo=()=>{
    const [tasks,setTasks] = useState([]);
    const [filter,setFilter] = useState("ALL");

    const handleSubmit = useCallback((input)=>{
        setTasks([...tasks,input])
    },[setTasks])

    const handleFilter = useCallback((filter)=>{
        setFilter(filter)
    },[setFilter])

    return (
        <>
        <Input submit={handleSubmit}/>
        <Filter filter={handleFilter}/>
        <TaskList filter={filter} tasks={tasks}/>
        </>
    );
}
export default Todo;