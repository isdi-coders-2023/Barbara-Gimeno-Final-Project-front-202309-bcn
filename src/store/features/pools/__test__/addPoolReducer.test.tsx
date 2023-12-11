import poolsMocks from "../../../../mocks/poolsMocks";
import { addPoolActionCreator, poolsReducer } from "../poolsSlice";
import { PoolsStateStructure } from "../types";

describe("Given a poolsSlice reducer", () => {
  describe("When it receives a pool list with the action to add a new pool", () => {
    test("Then it should return a list of pools with the new pool", () => {
      const initialState: PoolsStateStructure = {
        pools: poolsMocks,
      };

      const expectedNewpoolsState: PoolsStateStructure = {
        pools: [...poolsMocks, poolsMocks[0]],
      };

      const addPoolAction = addPoolActionCreator(poolsMocks[0]);
      const newState: PoolsStateStructure = poolsReducer(
        initialState,
        addPoolAction,
      );

      expect(newState).toStrictEqual(expectedNewpoolsState);
    });
  });
});
