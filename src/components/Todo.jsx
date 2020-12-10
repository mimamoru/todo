import React, { useState, useCallback, useEffect } from 'react';
import { TaskList, Filter, Input } from './index'

const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("All");

    const handleSubmit = useCallback((input) => {
        console.log([...[], input]);
        console.log([...tasks, input]);
        setTasks(pre => [...pre, input]);
        console.log(tasks);
    }, [setTasks]);


    const handleFilter = useCallback((filter) => {
        setFilter(filter);
    }, [setFilter]);

    const handleCheck = useCallback((key) => {
        const arrCopy = [...tasks];
        const idx = tasks.findIndex(e => e.key === key);
        console.log(tasks);
        //arrCopy[idx]["done"] = !arrCopy[idx]["done"];
        //setTasks(arrCopy);
    }, [setTasks]);
    return (
        <>
            <div>
                <Input push={handleSubmit} />
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