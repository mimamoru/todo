import Checkbox from '@material-ui/core/Checkbox';
const Task = (props) => {

  return (
    <div>
      <label>
        <Checkbox
          checked={props.state}
          onChange={() => props.func(props.id)}
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        <span>
          {props.task}
        </span>
      </label>
    </div>
  );
}
export default Task;