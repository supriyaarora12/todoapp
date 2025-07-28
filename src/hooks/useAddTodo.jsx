import { useState } from "react";

export default function useAddTodo() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (text.trim()) {
      setTodos([...todos, { text, isEditing: false }]);
    }
  };

  const updateTodo = (index, newText) => {
    const updated = [...todos];
    updated[index].text = newText;
    setTodos(updated);
  };

  return { todos, addTodo, updateTodo };
}
