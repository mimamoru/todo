import React, { useState, useCallback, useEffect } from 'react';
//import './styles/main.css'
import { Task} from './index'

const TaskList = (props) => {
    console.log(props.tasks)
    const displayList =props.tasks.filter(
        e=>{return props.filter==="ALL"?true:props.filter=="DONE"?e.done:!e.done});
        console.log(displayList)
    return (
        <ul>
            {displayList.map((e=>{
                (<Task key={e.key} func={e.func} task={e.task} state={e.done}/>)
            }))}
          
           
        </ul>
    )
}
export default TaskList;