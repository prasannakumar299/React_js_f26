import React, { useEffect, useState } from "react";
import Todo from "./components/Todo";
import UserTableList from "./components/UserList/UserTableList";
import { User, TodoItem, UserCollection } from "./modals/UserInterface";
import Counter from "./components/Count/Counter";
import { getTodoItems } from "./services/collectionService";

const myTodoItems: TodoItem[] = [
  {
    title: "Eat",
    id: 1,
  },
  {
    title: "Sleep",
    id: 2,
  },
  {
    title: "Code",
    id: 3,
  },
  {
    title: "build",
    id: 4,
  },
];

const myUsers: User[] = [
  {
    name: "John Doe",
    email: "johnd@gmail.com",
  },
  {
    name: "prasanna Doe",
    email: "prasanna@gmail.com",
  },
];

const App: React.FC = () => {
  const [state, setState] = useState<boolean>(true);
  const [todoItems, setTodoItems] = useState<UserCollection[]>([]);

  useEffect(() => {
    getTodoItems(2)
      .then((response) => {
        setTodoItems([response.data]);
        console.log(response.data, todoItems);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const stateUpdateHandler = () => {
    setState(!state);
  };

  return (
    <div className="components-container">
      <Todo items={myTodoItems} />
      
      <UserTableList users={todoItems} items={myTodoItems} />

      <button onClick={stateUpdateHandler}>Toggle for Counter Component</button>

      {state ? <Counter /> : null}
    </div>
  );
};

export default App;
