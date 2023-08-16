import { useEffect, useContext } from "react";
import { AuthContext } from "../App";
import { TodoListItem } from "./TodoListItem";

export default function  TodoList({ todoItems, setTodoItems }) {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if(user) {
      fetch(`https://checkov-api-lmkw.web.app/tasks/${user.uid}`)
        .then(res => res.json())
        .then(setTodoItems)
        .catch(alert)
    }
  },[user])

  if(!todoItems) {
    return (
      <h2>Loading...</h2>
    )
  }

  return (
    <section className="container flex flex-col items-center justify-center w-full mx-auto bg-rose-900 rounded-lg shadow mt-4">
      <ul className="flex flex-col divide-y divide w-full">
        {todoItems.map(item => (
          <TodoListItem key={item.id} item={item} setTodoItems={setTodoItems}/>
        ))}
      </ul>
    </section>
  )
}