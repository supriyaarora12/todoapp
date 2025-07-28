import React from "react";

function TodoList({ todos }) {
  return (
    <ul className="space-y-2">
      {todos.map((todo, index) => (
        <li
          key={index}
          className="p-2 border rounded bg-white shadow-sm hover:bg-gray-50"
        >
          {todo}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
