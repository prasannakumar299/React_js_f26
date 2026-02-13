import React from "react";
import { UserTableListProps, TodoProps } from "../../modals/UserInterface";

const UserTableList: React.FC<UserTableListProps & TodoProps> = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.userId}</td>
            <td>{user.title}</td>
            <td>{user.completed ? "Completed" : "In-Completed"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTableList;
