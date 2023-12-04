import { configureStore } from "@reduxjs/toolkit";
import { PropsWithChildren } from "react";
import { poolsReducer } from "../store/features/pools/poolsSlice";
import poolsMocks from "../mocks/poolsMocks";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const providerWrapper = ({ children }: PropsWithChildren) => {
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

export default providerWrapper;
