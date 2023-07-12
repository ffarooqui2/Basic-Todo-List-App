import { ToDoItem } from "./ToDoItem";

export function ToDoList ({ toDo, toggleToDo, deleteToDo }){
    return (
    <ul className = "list">
        {toDo.length === 0 && "No To Dos"}

        {toDo.map(toDo => {
            return (
            <ToDoItem completed = {toDo.completed} id = {toDo.id} title = {toDo.title} key={toDo.id} toggleToDo={toggleToDo} deleteToDo={deleteToDo}/>
            )})
        }
    </ul>
    )
}