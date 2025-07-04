import "./App.css";

import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import TodoFilterButtons from "./components/Todo/TodoFilterButtons";
import TodoInput from "./components/Todo/TodoInput";
import TodoList from "./components/Todo/TodoList";

function App() {
  return (
    <div className="max-w-xl mx-auto p-4">
      <ThemeSwitcher />
      <h1 className="text-3xl dark:text-white">Todo App (Context API)</h1>

      <TodoInput />
      <TodoFilterButtons />
      <TodoList />
    </div>
  );
}

export default App;
