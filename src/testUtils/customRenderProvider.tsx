import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "@reduxjs/toolkit";
import { ThemeProvider } from "styled-components";
import { store } from "../store";
import GlobalStyle from "../styles/GlobalStyle";
import { mainTheme } from "../styles/mainTheme";

const customRenderProvider = (
  children: React.ReactElement,
  mockedStore: Store = store,
) => {
  return render(
    <BrowserRouter>
      <Provider store={mockedStore}>
        <ThemeProvider theme={mainTheme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </Provider>
    </BrowserRouter>,
  );
};
export default customRenderProvider;
