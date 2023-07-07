import { MongoClient } from "mongodb";
import TodosList from "@/components/todos/TodosList";
import Card from "@/components/ui/Card";

const CompletedTasks = (props) => {
  const todos = props.todos.filter((todo) => todo.status === "Completed");
  const data = todos.map((todo) => (
    <Card key={todo.id}>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
    </Card>
  ));
  return (
    <>
      <h2>Completed Todos</h2>
      {data}
    </>
  );
};
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
        status: todo.status,
        id: todo._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
export default CompletedTasks;
