import React, { PropsWithChildren, useState } from "react";

export type ThemeContextValue = {
  theme: "light" | "dark";
  themeToggler: (currentTheme: "light" | "dark") => void;
};

export const ThemeContext = React.createContext<ThemeContextValue>({
  theme: "light",
  themeToggler: () => {},
});

export function ThemeContextProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const themeToggler = (currentTheme: "light" | "dark") => {
    currentTheme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeToggler,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
