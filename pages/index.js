import Head from "next/head";
// import styles from '../styles/Home.module.css'
import TodosList from "@/components/todos/TodosList";
import TodoForm from "@/components/todos/TodoForm";
import { useState } from "react";
import { MongoClient } from "mongodb";

function Home(props) {
  const [isAdd, setIsAdd] = useState(false);
  const addNewTodoHandler = () => {
    setIsAdd(true);
  };
  const cancelAddTodoHandler = () => {
    setIsAdd(false);
  };
  return (
    <div>
      <TodosList todos={props.todos} />

      {!isAdd && <button onClick={addNewTodoHandler}>Add a new Todo</button>}
      {isAdd && <TodoForm onCancel={cancelAddTodoHandler} />}
    </div>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://kesav:rollno1212@cluster0.cedis9y.mongodb.net/todos?retryWrites=true&w=majority"
  );
  const db = client.db();

  const todosCollection = db.collection("todos");
  const todos = await todosCollection.find().toArray();
  client.close();

  return {
    props: {
      todos: todos.map((todo) => ({
        title: todo.title,
        description: todo.description,
        id: todo._id.toString(),
      })),
    },
    revalidate: 2,
  };
}

export default Home;
