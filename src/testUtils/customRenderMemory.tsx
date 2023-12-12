import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "../styles/GlobalStyle";
import { InitialEntry } from "@remix-run/router";
import { mainTheme } from "../styles/mainTheme";
import { configureStore } from "@reduxjs/toolkit";
import poolsMocks from "../mocks/poolsMocks";
import { poolsReducer } from "../store/features/pools/poolsSlice";
import { uiReducer } from "../store/features/ui/uiSlice";

const customRenderMemory = (
  children: React.ReactElement,
  initialEntries: InitialEntry[] | undefined,
) => {
  const mockStore = configureStore({
    reducer: {
      poolsState: poolsReducer,
      uiState: uiReducer,
    },
    preloadedState: {
      poolsState: { pools: poolsMocks },
      uiState: { isLoading: false },
    },
  });

  render(
    <MemoryRouter initialEntries={initialEntries}>
      <Provider store={mockStore}>
        <ThemeProvider theme={mainTheme}>
          <ToastContainer />
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </Provider>
    </MemoryRouter>,
  );
};
export default customRenderMemory;
