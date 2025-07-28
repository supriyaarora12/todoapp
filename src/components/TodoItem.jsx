import React, { useState, useEffect} from "react";

function TodoItem({ todo, index, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

   useEffect(() => {
    setText(todo.text);
  }, [todo.text]);

  const handleSave = () => {
    if (text.trim()) {
      onUpdate(index, text);
      setIsEditing(false);
    }
  };

  return (
    <li
      className="p-2 border rounded bg-white shadow-sm hover:bg-gray-50 flex justify-between items-center"
    >
      {isEditing ? (
        <input
          className="border p-1 flex-grow mr-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={handleSave}
          onKeyDown={(e) => e.key === "Enter" && handleSave()}
          autoFocus
        />
      ) : (
        <span
          className="flex-grow cursor-pointer"
          onDoubleClick={() => setIsEditing(true)}
        >
          {todo.text}
        </span>
      )}
      <button
        className="text-sm text-blue-500 hover:underline ml-2"
        onClick={() => setIsEditing(true)}
      >
        Edit
      </button>
    </li>
  );
}

export default TodoItem;
