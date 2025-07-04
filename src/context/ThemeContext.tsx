import { createContext, useEffect, useMemo, type ReactNode } from "react";
import type { ThemeContextType, themeOptions } from "../types";
import useLocalStorage from "../hooks/useLocalStorage";

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => console.warn("no theme provider"),
});

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useLocalStorage<themeOptions>("theme", "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    console.log("toggle theme");

    const newThemeValue = theme === "light" ? "dark" : "light";

    setTheme(newThemeValue);
  };

  const themeValue = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;
