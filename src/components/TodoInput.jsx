import React, { useState } from "react";

function TodoInput({ onAdd }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    onAdd(input);
    setInput("");
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        className="flex-grow p-2 border rounded"
        type="text"
        placeholder="Enter a todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleAdd}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add
      </button>
    </div>
  );
}

export default TodoInput;
