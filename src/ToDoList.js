import React from 'react';

const ToDoList = (props) => {

  const toDoList = props.data.map(function(item) {
    return (
      <div key={item.id}>
        <li>{item.item}</li>
      </div>
    );
  })
  
  return (
    <div>
      <ul>
        {toDoList}
      </ul>
    </div>
  );
}

export default ToDoList;