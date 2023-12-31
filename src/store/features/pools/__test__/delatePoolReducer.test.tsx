import poolsMocks from "../../../../mocks/poolsMocks";
import { deletePoolActionCreator, poolsReducer } from "../poolsSlice";
import { PoolsStateStructure } from "../types";

describe("Given a poolsSlice deletePool reducer", () => {
  describe("When it receives a list of pools and a correct id from beach pool", () => {
    test("Then it should return the list of pools with beach pool removed", () => {
      const initialState: PoolsStateStructure = { pools: poolsMocks };
      const expectedDeletedName = "beach pool";

      const actualPoolsState = poolsReducer(
        initialState,
        deletePoolActionCreator("6565cdaa1d9be1bc1e6af452"),
      );

      actualPoolsState.pools.forEach((pool) => {
        expect(pool).not.toHaveProperty("name", expectedDeletedName);
      });
    });
  });
});
