import React, { useState } from "react";

const TaskInput = ({ addTarefa }) => {
  const [tarefa, setTarefa] = useState("");

  function handleInputValue(event) {
    setTarefa(event.target.value);
  }

  function handleAddTarefa(event) {
    event.preventDefault();
    if (tarefa.trim() === "") {
      
      return;
    }
    addTarefa(tarefa);
    setTarefa("");
  }

  return (
    <form className="inputField" onSubmit={handleAddTarefa}>
      <input
        type="text"
        value={tarefa}
        placeholder="Digite uma tarefa..."
        onChange={handleInputValue}
      />
      <button type="submit" aria-label="Adicionar Tarefa">+</button>
    </form>
  );
};

export default TaskInput;