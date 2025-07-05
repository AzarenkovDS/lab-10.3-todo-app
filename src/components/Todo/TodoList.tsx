import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import TodoItem from "./TodoItem";
import { FilterContext } from "../../context/FilterContext";

function TodoList() {
  const { todoItems, toggleTodo, editTodo, deleteTodo, clearCompleted } =
    useContext(TodoContext);

  const completedCount = todoItems.filter(
    (todoItem) => todoItem.completed
  ).length;
  const activeCount = todoItems.length - completedCount;

  const { filter } = useContext(FilterContext);

  const filteredTodoItems = todoItems.filter((todoItem) => {
    if (filter === "active") {
      return !todoItem.completed;
    } else if (filter === "completed") {
      return todoItem.completed;
    }

    return true;
  });

  return (
    <div className="my-5">
      {todoItems.length !== 0 && (
        <>
          {filteredTodoItems.map((todoItem) => (
            <TodoItem
              key={todoItem.id}
              todoItem={todoItem}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
            />
          ))}
          <hr className="text-gray-300 dark:text-gray-600" />
          <div className="flex justify-between dark:text-white px-4 py-2">
            <div>
              {activeCount} {activeCount === 1 ? "item" : "items"} left
            </div>

            {completedCount !== 0 && (
              <div>
                <button
                  onClick={clearCompleted}
                  className="underline text-green-600"
                >
                  Clear Completed ({completedCount})
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default TodoList;
