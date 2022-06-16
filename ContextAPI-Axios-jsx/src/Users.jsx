import React from "react";
import { useAPI } from "./apiContext";

export default function Users() {
  const { users } = useAPI();
  console.log(users);
  return (
    <ul>
      {users.map(u => (
        <li key={u.id}>Username: {u.username} | Email: {u.email}</li>
      ))}
    </ul>
  );
}
