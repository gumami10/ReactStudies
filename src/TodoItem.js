import React from "react";

function TodoItem(props) {
  console.log(props);
  return (
    <div className="todo-item">
      <input type="checkbox" defaultChecked={props.items.completed} />
      <p>{props.items.text}</p>
    </div>
  );
}

export default TodoItem;