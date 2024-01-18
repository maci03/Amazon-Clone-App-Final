// GlobalStyles.ts

import { createGlobalStyle, ThemedStyledProps } from "styled-components";
import { MyTheme } from "../themes/Themes";

const GlobalStyles = createGlobalStyle<MyTheme>`
  body {
    background-color: ${(props) => props.theme?.body};
  }
`;

export default GlobalStyles;
