import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PoolsStateStructure, PoolStructure } from "./types";

const initialPoolsState: PoolsStateStructure = {
  pools: [],
  selectedPool: {} as PoolStructure,
};

const poolsSlice = createSlice({
  name: "pools",
  initialState: initialPoolsState,
  reducers: {
    loadPools: (
      currentState: PoolsStateStructure,
      action: PayloadAction<PoolStructure[]>,
    ): PoolsStateStructure => ({ ...currentState, pools: action.payload }),

    deletePool: (
      currentState: PoolsStateStructure,
      action: PayloadAction<string>,
    ): PoolsStateStructure => ({
      ...currentState,
      pools: currentState.pools.filter((pool) => pool._id !== action.payload),
    }),

    addPool: (
      currentState: PoolsStateStructure,
      action: PayloadAction<PoolStructure>,
    ): PoolsStateStructure => ({
      ...currentState,
      pools: [...currentState.pools, action.payload],
    }),

    loadSelectedPool: (
      currentState: PoolsStateStructure,
      action: PayloadAction<PoolStructure>,
    ): PoolsStateStructure => ({
      ...currentState,
      selectedPool: action.payload,
    }),

    modifyPool: (
      currentState: PoolsStateStructure,
      action: PayloadAction<PoolStructure>,
    ): PoolsStateStructure => ({
      ...currentState,
      pools: currentState.pools.map((pool) =>
        pool._id !== action.payload._id ? pool : action.payload,
      ),
    }),
  },
});

export const {
  loadPools: loadPoolsActionCreator,
  deletePool: deletePoolActionCreator,
  addPool: addPoolActionCreator,
  loadSelectedPool: loadSelectedPoolActionCreator,
  modifyPool: modifyPoolActionCreator,
} = poolsSlice.actions;

export const poolsReducer = poolsSlice.reducer;
