import { createContext, useMemo, useState, type ReactNode } from "react";
import type { FilterContextType, filterOptions } from "../types";

export const FilterContext = createContext<FilterContextType>({
  filter: "all",
  switchFilter: () => console.warn("no filter provider"),
});

function FilterProvider({ children }: { children: ReactNode }) {
  const [filter, setFilter] = useState<filterOptions>("all");

  const switchFilter = (newFilter: filterOptions) => {
    setFilter(newFilter);
  };

  const filterValue = useMemo(() => {
    return {
      filter,
      switchFilter,
    };
  }, [filter]);

  return (
    <FilterContext.Provider value={filterValue}>
      {children}
    </FilterContext.Provider>
  );
}

export default FilterProvider;
