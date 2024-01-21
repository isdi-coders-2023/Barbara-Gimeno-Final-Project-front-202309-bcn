import { configureStore } from "@reduxjs/toolkit";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../store";
import { uiReducer } from "../store/features/ui/uiSlice";
import { poolsReducer } from "../store/features/pools/poolsSlice";
import poolsMocks from "../mocks/poolsMocks";

export const customProvider = ({ children }: PropsWithChildren) => {
  return (
    <MemoryRouter>
      <Provider store={store}>{children}</Provider>
    </MemoryRouter>
  );
};

export const getMockedStore = () => {
  const mockedStore = configureStore({
    reducer: { poolsState: poolsReducer, uiState: uiReducer },
    preloadedState: {
      poolsState: { pools: poolsMocks },
      uiState: { isLoading: false },
    },
  });

  return mockedStore;
};
