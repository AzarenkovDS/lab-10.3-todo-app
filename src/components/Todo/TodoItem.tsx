import type { TodoItemProps } from "../../types";

function TodoItem({ todoItem, editTodo, deleteTodo }: TodoItemProps) {
  return (
    <div className="flex justify-between items-center border border-gray-300 dark:border-gray-600 rounded mb-3 px-4 py-2">
      <div className="flex gap-3">
        <input type="checkbox" />
        <div className="dark:text-white">{todoItem.text}</div>
      </div>
      <div className="flex gap-3">
        <button className="px-4 py-2 rounded font-medium transition-colors bg-white text-black border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700" onClick={() => editTodo(todoItem.id)}>Edit</button>
        <button className="px-4 py-2 rounded font-medium transition-colors bg-white text-black border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700" onClick={() => deleteTodo(todoItem.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
