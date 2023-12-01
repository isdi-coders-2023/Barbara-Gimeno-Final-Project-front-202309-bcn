import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/maven-pro";
import "@fontsource/kameron";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "./components/App/App";
import GlobalStyle from "./styles/GlobalStyle";
import { mainTheme } from "./styles/mainTheme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
