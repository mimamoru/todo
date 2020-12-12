import { Task } from './index'

const TaskList = (props) => {
    const displayList = props.tasks.filter(
        e => { return props.filter === "All" ? true : props.filter === "Done" ? e.done : !e.done });
    return (
        <ul>
            {displayList.map(e => {
                return <Task key={e.key} id={e.key} func={props.func} task={e.text} state={e.done} />
            })}

        </ul>
    )
}
export default TaskList;