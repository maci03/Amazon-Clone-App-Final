import React, { useState } from "react";
import styled from "styled-components";
import { useTheme } from "./ThemeContext";


const ToggleButton = styled.button`
  // styling for the toggle button
`;

const DarkModeToggle: React.FC = () => {
  const { ToggleTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    ToggleTheme();
  };
  return(
      <ToggleButton onClick={handleToggle}>
          dark mode
      </ToggleButton>
  
  )
};

export default DarkModeToggle;
