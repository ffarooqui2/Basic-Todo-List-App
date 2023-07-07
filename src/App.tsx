import { useState } from "react";
import { NewToDoForm } from "./NewToDoForm"

import "./styles.css";

export default function App() {
  const [toDo, setToDo] = useState([]); //empty array default

  function addToDo(title:string){

    setToDo(currentTodo => {
      return [
        ...currentTodo,
        { id: crypto.randomUUID(), title: newItem, completed: false },
        // three dots are called the spread operator, deconstructing an array/object into seperate variables
      ]
    })
  }
  
  function toggleToDo(id, completed) {
    setToDo(currentTodo => {
      return currentTodo.map(toDo => {
        if (toDo.id === id) {
          return { ...toDo, completed }
        }

        return toDo;
      })
    })
  }

  function deleteToDo(id) {
    setToDo((currentTodo) => {
      return currentTodo.filter((toDo) => toDo.id !== id);
    });
  }
  return (
    <>
      <NewToDoForm />
      <h1>TO DO LIST</h1>
      <ul className="list">

        {toDo.length === 0 && "No ToDos"}

        {toDo.map((toDo) => {
          return (
            <li key={toDo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={toDo.completed}
                  onChange={(e) => toggleToDo(toDo.id, e.target.checked)}
                />
                {toDo.title}
              </label>
              <button
                onClick={() => deleteToDo(toDo.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
