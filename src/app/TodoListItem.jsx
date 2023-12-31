import { useContext, useState } from "react";
import { AuthContext } from "../App";

export function TodoListItem({ item, setTodoItems }) {
  const { user } = useContext(AuthContext);

  const markDone = () => {
    const updatedItem = { 
      id: item.id,
      done: true
    }
    fetch(`https://checkov-api-lmkw.web.app/tasks/${user.uid}`, {
      method: "PATCH",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(updatedItem),
    })
      .then(res => res.json())
      .then((data) => {
        setTodoItems(data);
      })
      .catch(alert)
  }

  const itemClass = (item.done) ? 'text-zinc-500 line-through' : 'text-zinc-50 '

  return(
    <li className="flex items-center p-4 cursor-pointer select-none hover:bg-rose-700">
      <div className="flex-1 pl-1 mr-16 font-medium text-gray-50 text-left ">
        <span className={itemClass}>{item.title}</span>
      </div>
      <div onClick={markDone} className={`w-10 h-10 mr-4 ${item.done ? 'text-zinc-500' : 'text-green-500'}`}>
        <svg 
          class="w-6 h-6 mr-2" 
          xmlns="http://www.w3.org/2000/svg" 
          width="6" 
          height="6" 
          stroke="currentColor" 
          fill="currentColor" 
          viewBox="0 0 1792 1792">
          <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
        </svg>
      </div>
    </li>
  )
  
}