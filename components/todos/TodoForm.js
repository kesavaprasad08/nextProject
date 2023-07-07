import Card from "../ui/Card"
import classes from './TodoForm.module.css'

function TodoForm(props){
function formSubmitHandler(e) {
    e.preventDefault();

}

    return<Card>
        <h2  className={classes.heading}> Add a Todo</h2>
        <form onSubmit={formSubmitHandler}>
            <input placeholder="Task Name"/>
            <input placeholder="Description" />
            <button onClick={props.onCancel}>Cancel</button>
            <button>Add Task</button>
        </form>
    </Card>
};
export default TodoForm;

