import { MdDeleteSweep } from "react-icons/md";

const TaskItem = ({ task, deleteTarefa, toggleCheck }) => {
 
  const { tarefaNome, checked } = task; 

  return (
    <li className="items">
      <div className="items-text">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => toggleCheck(tarefaNome)} 
        />
        <p className={checked ? "isChecked" : ""}>{tarefaNome}</p>
      </div>
      <MdDeleteSweep className="delete-icon" onClick={() => deleteTarefa(tarefaNome)} />
    </li>
  );
};

export default TaskItem;