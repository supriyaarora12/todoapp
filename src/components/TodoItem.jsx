import React, { useState } from "react";

export default function TodoItem({ todo, index, onUpdate, onEdit, onDelete }) {
  const [newText, setNewText] = useState(todo.text);

  const handleUpdate = () => {
    onUpdate(index, newText);
  };

  return (
    <div className="flex items-center justify-between bg-white p-3 border rounded shadow">
      {todo.isEditing ? (
        <input
          className="border p-1 flex-1 mr-2"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={handleUpdate}
          autoFocus
        />
      ) : (
        <span
          className="flex-1 cursor-pointer"
          onDoubleClick={() => onEdit(index)}
        >
          {todo.text}
        </span>
      )}
      <div className="space-x-2">
        <button
          className="bg-yellow-400 hover:bg-yellow-500 px-2 py-1 rounded text-white text-sm"
          onClick={() => onEdit(index)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 px-2 py-1 rounded text-white text-sm"
          onClick={() => onDelete(index)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
