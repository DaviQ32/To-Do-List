import { useState } from "react";
import TaskInput from "./componentes/TaskInput";
import "./Index.css";
import Status from './componentes/Status'
import TaskItem from "./componentes/TaskItem";

export default function App() {
  const [toDoList, setToDoList] = useState([]);

  const addTarefa = (tarefaNome) => {
    const newTarefa = { tarefaNome, checked: false };
    setToDoList([...toDoList, newTarefa]);
  };

  function deleteTarefa(deleteTarefaNome) {
    setToDoList(toDoList.filter((tarefa) => tarefa.tarefaNome !== deleteTarefaNome));
  }

  function toggleCheck(tarefaNome) {
    setToDoList((prevToDoList) =>
      prevToDoList.map((tarefa) =>
        tarefa.tarefaNome === tarefaNome ? { ...tarefa, checked: !tarefa.checked } : tarefa
      )
    );
  }

 

  return (
    <>
      <div className="container">
        <h1>To Do List</h1>

        <TaskInput addTarefa={addTarefa} />

        <div className="toDoList">
          <span>Para fazer:</span>
          <ul className="list-items">
            {toDoList.map((tarefa, key) => (
              <TaskItem
                task={tarefa}
                key={key}
                deleteTarefa={deleteTarefa}
                toggleCheck={toggleCheck}
              />
            ))}
          </ul>
        </div>
      </div>
      <Status toDoList={toDoList} />
    </>
  );
}







