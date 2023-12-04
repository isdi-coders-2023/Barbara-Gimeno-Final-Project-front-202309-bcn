import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import "@fontsource/maven-pro";
import "@fontsource/kameron";
import "@fontsource/baloo-2";
import App from "./components/App/App";
import GlobalStyle from "./styles/GlobalStyle";
import { mainTheme } from "./styles/mainTheme";

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
