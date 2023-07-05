import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { useState } from "react";



export default function Todo() {
  const [todoItems, setTodoItems] = useState();
  return(
    <main>
      <h1>Checkov Todo List</h1>
      <AddTodo setTodoItems={setTodoItems}/>
      <TodoList todoItems={todoItems} setTodoItems={setTodoItems}/>
    </main>
  )
  
}