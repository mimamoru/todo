import React, { useState, useCallback, useEffect } from 'react';
import './styles/main.css'
import { Task} from './index'

const TaskList = (props) => {

    const displayList =props.tasks.filter(
        e=>props.filter==="ALL"?true:props.filter=="DONE"?e.done:!e.done);
    return (
        <ul>
            {displayList.map((e=>{
                (<Task task={e}/>)
            }))}
            <Task/>
           
        </ul>
    )
}
export default TaskList;