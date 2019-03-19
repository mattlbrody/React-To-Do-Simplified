import './ToDoList.css';
import React from 'react';

const ToDoList = (props) => {

  const toDoList = props.data.map(item => {
    return (
      <div key={item.id}>
        <li className="collection-item">{item.item}</li>
      </div>
    );
  })

  return (
    <div>
      <ul className="collection">
        {toDoList}
      </ul>
    </div>
  );
}

export default ToDoList;