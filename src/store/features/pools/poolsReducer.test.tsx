import poolsMocks from "../../../mocks/poolsMocks";
import { loadPoolsActionCreator, poolsReducer } from "./poolsSlice";
import { PoolsStateStructure } from "./types";

describe("Given a poolsReducer", () => {
  describe("When it receives the action of load 2 pools and an initial state without pools", () => {
    test("Then it should return a list with 2 new pools", () => {
      const currentPoolsList: PoolsStateStructure = {
        pools: [],
      };

      const expectedPoolsList: PoolsStateStructure = {
        pools: poolsMocks,
      };

      const poolsList = poolsReducer(
        currentPoolsList,
        loadPoolsActionCreator(poolsMocks),
      );

      expect(poolsList).toStrictEqual(expectedPoolsList);
    });
  });
});
