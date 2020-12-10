import React, { useState, useCallback, useEffect } from 'react';
//import './styles/main.css'
import { TaskList, Filter, Input } from './index'

const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("ALL");

    const handleSubmit = useCallback((input) => {     
        setTasks([...tasks, input])
        setTimeout(console.log(tasks), 1000);
        
    }, [setTasks]);

    const handleFilter = useCallback((filter) => {
        setFilter(filter);
    }, [setFilter]);

    const handleCheck = useCallback((key) => {
        const arrCopy = [...tasks];
        const idx = arrCopy.findIndex(e => e.key === key);
        arrCopy[idx].done = !arrCopy[idx].done;
        setTasks(arrCopy);
    }, [setTasks]);
   
    return (
        <>
            <div>
                <Input submit={handleSubmit} />
            </div>
            <div>
                <div>
                    <Filter filter={handleFilter} />
                </div>
                <div>
                    <TaskList filter={filter} tasks={tasks} func={handleCheck} />
                </div>
            </div>
        </>
    );
}
export default Todo;