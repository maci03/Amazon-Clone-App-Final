
import { createGlobalStyle } from "styled-components";
import { MyTheme } from "./Themes";

export const GlobalStyles = createGlobalStyle<MyTheme>`
  body {
    background-color: ${(props) => props.theme.body};
  }
`;
