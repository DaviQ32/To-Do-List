import React from 'react';

const Status = ({ toDoList }) => {
  const countList = toDoList.length; 

  return (
    <div className='status'>
      <p className='notify'>
        {countList === 0 ? 'Nenhuma tarefa pendente' : `${countList} tarefa(s) pendente(s)`}
      </p>
    </div>
  );
};

export default Status;