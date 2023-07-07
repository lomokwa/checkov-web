import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { useState } from "react";



export default function Todo() {
  const [todoItems, setTodoItems] = useState();
  return(
    <main className="bg-rose-800 min-h-screen text-gray-50 px-4 py-8 text-center">
      <h1 className="text-3xl font-semibold mb-4 text-amber-400">Checkov Todo List</h1>
      <AddTodo setTodoItems={setTodoItems}/>
      <TodoList todoItems={todoItems} setTodoItems={setTodoItems}/>
    </main>
  )
  
}