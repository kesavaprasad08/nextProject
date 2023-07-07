import { useState } from "react";
import Card from "../ui/Card";

function TodoItem(props) {
    let completed =false;
if(props.status === 'Completed'){
completed=true;
}
  const markAsDoneHandler = async () => {
    console.log(props)
    const data = {
      id: props.id,
      title: props.title,
      description: props.description,
      status: "Completed",
    };
    const response = await fetch("/api/edit-todo", {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const done = await response.json();
    console.log(done);
  };
  return (
    <Card>
      <h5>{props.title}</h5>
      <p>{props.description}</p>
      <p>{props.status}</p>
      {!completed &&<button onClick={markAsDoneHandler}>Mark as Done</button>}
      <button>Delete</button>
    </Card>
  );
}

export default TodoItem;
