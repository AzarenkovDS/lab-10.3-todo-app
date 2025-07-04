import { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext";

function TodoInput() {
  const [inputText, setInputText] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleAddTodo = () => {
    if (inputText.trim()) {
      addTodo(inputText);
      setInputText("");
    }
  };

  return (
    <div className="my-5">
      <input
        type="text"
        placeholder="What needs to be done?"
        aria-label="What needs to be done?"
        required
        className="px-4 py-2 rounded font-medium transition-colors bg-white text-black border border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 mr-3"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button
        onClick={handleAddTodo}
        className="px-4 py-2 rounded font-medium transition-colors bg-white text-black border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700"
      >
        Add Todo
      </button>
    </div>
  );
}

export default TodoInput;
