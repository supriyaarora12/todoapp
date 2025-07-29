import { useState } from "react";

export default function useTodos() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (text.trim() === "") return;
    setTodos([...todos, { text, isEditing: false }]);
  };

  const updateTodo = (index, newText) => {
    const updated = [...todos];
    updated[index].text = newText;
    updated[index].isEditing = false;
    setTodos(updated);
  };

  const toggleEditing = (index) => {
    const updated = [...todos];
    updated[index].isEditing = !updated[index].isEditing;
    setTodos(updated);
  };

  const deleteTodo = (index) => {
    const filtered = todos.filter((_, i) => i !== index);
    setTodos(filtered);
  };

  return {
    todos,
    addTodo,
    updateTodo,
    toggleEditing,
    deleteTodo
  };
}
