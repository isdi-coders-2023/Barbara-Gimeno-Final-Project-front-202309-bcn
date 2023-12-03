import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PoolsStateStructure, PoolStructure } from "./types";

const initialPoolsState: PoolsStateStructure = {
  pools: [],
};

const poolsSlice = createSlice({
  name: "pools",
  initialState: initialPoolsState,
  reducers: {
    loadPools: (
      currentState: PoolsStateStructure,
      action: PayloadAction<PoolStructure[]>,
    ): PoolsStateStructure => ({ ...currentState, pools: action.payload }),
  },
});

export const { loadPools: loadPoolsActionCreator } = poolsSlice.actions;

export const poolsReducer = poolsSlice.reducer;
