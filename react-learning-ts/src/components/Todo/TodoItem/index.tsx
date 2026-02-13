
import React from "react";
import "./style.css";

interface TodoItemProps {
    title?: string;
    id:number
}

const TodoItem: React.FC<TodoItemProps> = (props) => {    
  return (
    <div className="todo-item-container">
    <li>{props.title}</li>
    <li>{props.id}</li>
    </div>
        )};

export default TodoItem;