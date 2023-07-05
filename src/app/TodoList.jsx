import { useEffect, useContext } from "react";
import { AuthContext } from "../App";

export default function TodoList({ todoItems, setTodoItems }) {
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
    <section>
      {todoItems.map(item => (
        <p key={item.id}>{item.title}</p>
      ))}
    </section>
  )
}