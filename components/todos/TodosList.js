import TodoItem from "./TodoItem";

function TodosList(props) {
    return <>
        <h1> Tasks</h1>
        {props.todos.map((todo) => (
            <TodoItem 
            key={todo.id}
            id={todo.id}
            title={todo.title}
            description={todo.description}
            status={todo.status}
            />
        ))}
    </>
}

export default TodosList;