
const Task=(props)=>{
    
    return (
        <li>
        <label>
      <input
        type="checkbox"
        checked={props.state}
        onChange={()=>props.func(props.id)}
      />
      <span>
        {props.task}
      </span>
    </label>
    </li>
      );
}
export default Task;