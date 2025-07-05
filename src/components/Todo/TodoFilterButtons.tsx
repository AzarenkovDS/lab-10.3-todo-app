import { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";

function TodoFilterButtons() {

const {filter, switchFilter} = useContext(FilterContext);

  return (
    <div className="my-5 flex justify-around">
      <button onClick={()=>switchFilter('all')} className={"px-4 py-2 rounded font-medium transition-colors bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700" + (filter === 'all' ? ' text-green-600 ' : ' text-black dark:text-white')}>All</button>
      <button onClick={()=>switchFilter('active')} className={"px-4 py-2 rounded font-medium transition-colors bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700" + (filter === 'active' ? ' text-green-600 ' : ' text-black dark:text-white')}>Active</button>
      <button onClick={()=>switchFilter('completed')} className={"px-4 py-2 rounded font-medium transition-colors bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700" + (filter === 'completed' ? ' text-green-600 ' : ' text-black dark:text-white')}>Completed</button>
    </div>
  );
}

export default TodoFilterButtons;
