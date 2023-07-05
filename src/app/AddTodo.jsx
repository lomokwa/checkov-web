import { useContext } from "react";
import { AuthContext } from "../App";

export default function AddTodo({ setTodoItems }) {

  const { user } = useContext(AuthContext);
  
  const addNewItem = (e) => {
    e.preventDefault();
    const newTodoItem = {
      uid: user.uid,
      title: e.target.todo.value,
    }
    fetch(`https://checkov-api-lmkw.web.app/tasks/${user.uid}`, {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(newTodoItem),
    })
      .then(res => res.json())
      .then((data) => {
        setTodoItems(data);
        e.target.todo.value = "";
      })
      .catch(alert)
  }

  return(
    <section>
      <form onSubmit={addNewItem}>
        <input type="text" name="todo" placeholder="New Todo Item" />
        <input type="submit" value="Add"/>
      </form>
    </section>
  )
  
}