import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {} from "./";
import "./index.css";
import App from "./App";
import { store } from "./app/store";

import * as serviceWorker from "./reportWebVitals";
import { ThemeContextProvider } from "./context/darkModeContext";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
