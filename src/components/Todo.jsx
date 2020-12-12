import React, { useState, useCallback } from 'react';
import { TaskList, Filter, Input } from './index'

const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("All");

    const handleSubmit = useCallback((task) => {
        setTasks(pre => { return [...pre, task] });
    }, [setTasks]);


    const handleFilter = useCallback((filter) => {
        setFilter(filter);
    }, [setFilter]);

    const handleCheck = useCallback((key) => {
        if (tasks.length === 0) {
            return
        }
        const arrCopy = [...tasks];
        const idx = tasks.findIndex(e => e.key === key);
        arrCopy[idx]["done"] = !arrCopy[idx]["done"];
        setTasks(arrCopy);
    }, [tasks]);
    return (
        <>
            <div>
                <Input push={handleSubmit} />
            </div>
            <div>
                <div>
                    <Filter value={filter} filter={handleFilter} />
                </div>
                <div>
                    <TaskList filter={filter} tasks={tasks} func={handleCheck} />
                </div>
            </div>
        </>
    );
}
export default Todo;