import { configureStore } from "@reduxjs/toolkit";
import { poolsReducer } from "../store/features/pools/poolsSlice";
import poolsMocks from "../mocks/poolsMocks";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "../styles/mainTheme";
import GlobalStyle from "../styles/GlobalStyle";
import { render } from "@testing-library/react";

const customRenderProvider = (childern: React.ReactElement) => {
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

export default customRenderProvider;
