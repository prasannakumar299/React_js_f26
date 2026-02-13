import todoInstatodoInstance from "../api/todoInstance";

export const getTodoItems = (id:number)=>{
    return todoInstatodoInstance.get(`/todos/${id}`);
}