export type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
};

export interface TodoContextType {
  todoItems: TodoItem[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
  deleteTodo: (id: number) => void;
  clearCompleted: () => void;
}

export type themeOptions = "light" | "dark";

export interface ThemeContextType {
  theme: themeOptions;
  toggleTheme: () => void;
}

export type TodoItemProps = {
  todoItem: TodoItem;
  toggleTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
  deleteTodo: (id: number) => void;
};

export type filterOptions = "all" | "active" | "completed";

export interface FilterContextType {
  filter: filterOptions;
  switchFilter: (newFilter: filterOptions) => void;
}
