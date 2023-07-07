import Card from "../ui/Card";

function TodoItem(props) {
  return (
    <Card>
      <h5>{props.title}</h5>
      <p>{props.description}</p>
      <p>{props.status}</p>
      <button>Delete</button>
    </Card>
  );
}

export default TodoItem;
