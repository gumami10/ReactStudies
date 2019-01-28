import React from "react";
import TodoItem from "./TodoItem";
import todoData from "./todoData";

function App() {
  const TodoItemMap = todoData.map(item => (
    <TodoItem key={item.id} items={item} />
  ));
  return <div className="todo-list">{TodoItemMap}</div>;
}

export default App;
