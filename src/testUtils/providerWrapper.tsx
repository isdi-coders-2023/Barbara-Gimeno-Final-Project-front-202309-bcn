import { configureStore } from "@reduxjs/toolkit";
import { PropsWithChildren } from "react";
import { poolsReducer } from "../store/features/pools/poolsSlice";
import poolsMocks from "../mocks/poolsMocks";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { uiReducer } from "../store/features/ui/uiSlice";
import { ToastContainer } from "react-toastify";

const providerWrapper = ({ children }: PropsWithChildren) => {
  const store = configureStore({
    reducer: {
      poolsState: poolsReducer,
      uiState: uiReducer,
    },
    preloadedState: { poolsState: { pools: poolsMocks } },
  });

  return (
    <BrowserRouter>
      <ToastContainer />
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );
};

export default providerWrapper;
