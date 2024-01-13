import React, { createContext, useContext, useState } from "react";
import { lightTheme, darkTheme } from "./themes";


interface ThemeContextType {
    theme: DefaultTheme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined > (undefined);