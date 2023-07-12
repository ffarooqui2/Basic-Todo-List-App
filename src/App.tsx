import { useEffect, useState } from "react";
import { NewToDoForm } from "./NewToDoForm"
import { ToDoList } from "./ToDoList"

import "./styles.css";

export default function App() {

  // hooks

  const [toDo, setToDo] = useState(() => {
    const localValue = localStorage.getItem("ITEM");
    if (localValue == null) return []

    return JSON.parse(localValue)
  }); //empty array default


  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(toDo))
  }, [toDo])


  // helper functions
  function addTodo(title) {
    setToDo((currentTodo) => {
      return [
        ...currentTodo,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleToDo(id, completed) {
    setToDo((currentTodo) => {
      return currentTodo.map((toDo) => {
        if (toDo.id === id) {
          return { ...toDo, completed };
        }
        return toDo;
      });
    });
  }

  function deleteToDo(id) {
    setToDo((currentTodo) => {
      return currentTodo.filter((toDo) => toDo.id !== id);
    });
  }
  return (
    <>
      <NewToDoForm onSubmit={addTodo} />
      <h1>TO DO LIST</h1>
      <ToDoList toDo={toDo} toggleToDo = {toggleToDo} deleteToDo = {deleteToDo}/>
    </>
  );
}
