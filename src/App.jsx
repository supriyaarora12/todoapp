import React from "react";
import useAddTodo from "./hooks/useAddTodo";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const { todos, addTodo } = useAddTodo();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded shadow p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Todo App</h1>
        <TodoInput onAdd={addTodo} />
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
