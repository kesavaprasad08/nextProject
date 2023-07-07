import Head from "next/head";
// import styles from '../styles/Home.module.css'
import TodosList from "@/components/todos/TodosList";
import TodoForm from "@/components/todos/TodoForm";
import { useState } from "react";

const DUMMY_LIST = [
  {
    id: "m1",
    title: "Gym",
  },
  {
    id: "m2",
    title: "Learn web dev",
  },
];
export default function Home() {
  const [isAdd, setIsAdd] = useState(false);
  const addNewTodoHandler = () => {
    setIsAdd(true);
  };
  const cancelAddTodoHandler=() => {
    setIsAdd(false);
  }
  return (
    <div>
      <TodosList todos={DUMMY_LIST} />

      {!isAdd && <button onClick={addNewTodoHandler}>Add a new Todo</button>}
      {isAdd && <TodoForm onCancel={cancelAddTodoHandler}/>}
    </div>
  );
}
