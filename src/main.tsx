import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/maven-pro";
import "@fontsource/kameron";
import "@fontsource/baloo-2";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "./components/App/App";
import GlobalStyle from "./styles/GlobalStyle";
import { mainTheme } from "./styles/mainTheme";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <Provider store={store}>
        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);
