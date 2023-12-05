import { createSlice } from "@reduxjs/toolkit";
import { UiStateStructure } from "./types";

const initialState: UiStateStructure = { isLoading: false };

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    showLoading: (currentUiState: UiStateStructure) => ({
      ...currentUiState,
      isLoading: true,
    }),
    hideLoading: (currentUiState: UiStateStructure) => ({
      ...currentUiState,
      isLoading: false,
    }),
  },
});

export const {
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
