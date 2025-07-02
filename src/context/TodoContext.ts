import { createContext, useState } from "react";
import type { TodoItem } from "../types";

export const TodoContext = createContext(null);

function TodoProvider() {
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);
}

export default TodoProvider;
