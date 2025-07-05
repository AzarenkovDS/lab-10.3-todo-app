import { createContext, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { TodoContextType, TodoItem } from "../types";

export const TodoContext = createContext<TodoContextType>({
  todoItems: [],
  addTodo: (text: string) => console.warn("no todo provider"),
  toggleTodo: (id: number) => console.warn("no todo provider"),
  editTodo: (id: number) => console.warn("no todo provider"),
  deleteTodo: (id: number) => console.warn("no todo provider"),
  clearCompleted: () => console.warn("no todo provider"),
});

function TodoProvider({ children }: { children: ReactNode }) {
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);

  const addTodo = (text: string): void => {
    const newItem = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodoItems((prev) => [...prev, newItem]);
  };

  const toggleTodo = (id: number): void => {
    setTodoItems((prev) => {
      return prev.map((todoItem) =>
        todoItem.id === id
          ? { ...todoItem, completed: !todoItem.completed }
          : todoItem
      );
    });
  };

  const editTodo = (id: number, newText: string): void => {
    setTodoItems((prev) => {
      return prev.map((todoItem) =>
        todoItem.id === id ? { ...todoItem, text: newText } : todoItem
      );
    });
  };

  const deleteTodo = (id: number): void => {
    setTodoItems((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const clearCompleted = (): void => {
    setTodoItems((prev) => {
      return prev.filter((todoItem) => !todoItem.completed);
    });
  };

  const todoValue = useMemo(
    () => ({
      todoItems,
      addTodo,
      toggleTodo,
      editTodo,
      deleteTodo,
      clearCompleted,
    }),
    [todoItems]
  );

  return (
    <TodoContext.Provider value={todoValue}>{children}</TodoContext.Provider>
  );
}

export default TodoProvider;
