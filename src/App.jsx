import React, { useState } from "react";
import useTodos from "./hooks/useTodos";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [input, setInput] = useState("");
  const { todos, addTodo, updateTodo, toggleEditing, deleteTodo } = useTodos();

  const handleAdd = () => {
    addTodo(input);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>
        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            className="flex-1 border p-2 rounded"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a todo..."
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
        <div className="space-y-3">
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              index={index}
              onUpdate={updateTodo}
              onEdit={toggleEditing}
              onDelete={deleteTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
