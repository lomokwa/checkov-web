import { useContext } from "react";
import { AuthContext } from "../App";

export default function AddTodo({ setTodoItems }) {

  const { user } = useContext(AuthContext);
  
  const addNewItem = (e) => {
    e.preventDefault();
    if(!e.target.todo.value) return
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
    <section className="bg-rose-900 p-6 rounded-lg container w-full mx-auto mb-5">
      <form onSubmit={addNewItem} className="flex">
        <input type="text" name="todo" placeholder="New Todo Item" className=" rounded-l-lg border-gray-300 w-full py-2 px-4 bg-gray-50 text-gray-900 text-base flex-1"/>
        <input type="submit" value="Add" className="flex-shrink-0 rounded-r-lg px-4 py-2 font-semibold text-gray-50 bg-amber-400 shadow hover:bg-amber-500 cursor-pointer transition duration-300"/>
      </form>
    </section>
  )
  
}