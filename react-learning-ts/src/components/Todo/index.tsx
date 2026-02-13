import  React from "react";
import TodoItem from "./TodoItem";
import "./style.css";
import { TodoProps } from "../../modals/UserInterface";






const Todo: React.FC<TodoProps> = (props) => {
  return (
    <div className="todo-container" >
 
 <ul>
    {
        props.items.map((item) => {
            return <TodoItem key={item.id} title={item.title} id={item.id} />
        })
    }
 </ul>
 
        </div>
        )};

export default Todo;