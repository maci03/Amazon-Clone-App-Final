import { createGlobalStyle, DefaultTheme } from "styled-components";


export interface MyTheme extends DefaultTheme {
  body: string;
  fontColor: string;
}

export const lightTheme: MyTheme = {
  body: "#fff",
  fontColor: "#000",
};

export const darkTheme: MyTheme = {
  body: "#000",
  fontColor: "#fff",
};
export const GlobalStyles = createGlobalStyle`

	body {

		background-color: ${(props) => props.theme.body};

	}

`;