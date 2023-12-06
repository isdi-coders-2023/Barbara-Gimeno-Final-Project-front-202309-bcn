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

    delatePool: (
      currentState: PoolsStateStructure,
      action: PayloadAction<string>,
    ): PoolsStateStructure => ({
      ...currentState,
      pools: currentState.pools.filter((pool) => pool._id !== action.payload),
    }),
  },
});

export const {
  loadPools: loadPoolsActionCreator,
  delatePool: delatePoolActionCreator,
} = poolsSlice.actions;

export const poolsReducer = poolsSlice.reducer;
