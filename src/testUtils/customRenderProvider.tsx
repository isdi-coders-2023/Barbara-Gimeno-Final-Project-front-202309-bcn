import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { poolsReducer } from "../store/features/pools/poolsSlice";
import poolsMocks from "../mocks/poolsMocks";
import { mainTheme } from "../styles/mainTheme";
import GlobalStyle from "../styles/GlobalStyle";
import { uiReducer } from "../store/features/ui/uiSlice";

export const customRenderProvider = (children: React.ReactElement) => {
  const mockStore = configureStore({
    reducer: {
      poolsState: poolsReducer,
      uiState: uiReducer,
    },
    preloadedState: { poolsState: { pools: poolsMocks } },
  });

  render(
    <Provider store={mockStore}>
      <BrowserRouter>
        <ThemeProvider theme={mainTheme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </BrowserRouter>
    </Provider>,
  );
};
