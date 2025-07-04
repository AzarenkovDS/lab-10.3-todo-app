import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todoItems, editTodo, deleteTodo } = useContext(TodoContext);

  return (
    <div className="my-5">
      {todoItems.map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          todoItem={todoItem}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
