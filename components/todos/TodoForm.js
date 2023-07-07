import Card from "../ui/Card";
// import { useRouter } from "next/router";
import classes from "./TodoForm.module.css";
import { useRef } from "react";

function TodoForm(props) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  async function formSubmitHandler(e) {
    e.preventDefault();

    const data = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      status:'incomplete'
    };
    const response = await fetch("/api/new-todo", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json", 
      },
    });
    const done = await response.json();

    titleRef.current.value ='';
    descriptionRef.current.value='';
    props.onCancel();
  }

  return (
    <Card>
      <h2 className={classes.heading}> Add a Todo</h2>
      <form onSubmit={formSubmitHandler}>
        <input placeholder="Task Name" ref={titleRef} required />
        <input placeholder="Description" ref={descriptionRef} required/>
        <button onClick={props.onCancel}>Cancel</button>
        <button>Add Task</button>
      </form>
    </Card>
  );
}
export default TodoForm;
