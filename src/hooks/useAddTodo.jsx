import { useState } from "react";

export default function useAddTodo() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (text.trim()) {
      setTodos([...todos, text]);
    }
  };

  return { todos, addTodo };
}
