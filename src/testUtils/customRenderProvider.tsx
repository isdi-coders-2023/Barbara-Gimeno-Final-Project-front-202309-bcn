import { configureStore } from "@reduxjs/toolkit";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { poolsReducer } from "../store/features/pools/poolsSlice";
import poolsMocks from "../mocks/poolsMocks";
import { mainTheme } from "../styles/mainTheme";
import GlobalStyle from "../styles/GlobalStyle";

export const customRenderProvider = (childern: React.ReactElement) => {
  const mockStore = configureStore({
    reducer: {
      poolsState: poolsReducer,
    },
    preloadedState: { poolsState: { pools: poolsMocks } },
  });

  render(
    <Provider store={mockStore}>
      <BrowserRouter>
        <ThemeProvider theme={mainTheme}>
          <GlobalStyle />
          {childern}
        </ThemeProvider>
      </BrowserRouter>
    </Provider>,
  );
};

export const providerWrapper = ({ children }: PropsWithChildren) => {
  const mockStore = configureStore({
    reducer: {
      poolsState: poolsReducer,
    },
    preloadedState: { poolsState: { pools: poolsMocks } },
  });

  return (
    <BrowserRouter>
      <Provider store={mockStore}>{children}</Provider>
    </BrowserRouter>
  );
};
