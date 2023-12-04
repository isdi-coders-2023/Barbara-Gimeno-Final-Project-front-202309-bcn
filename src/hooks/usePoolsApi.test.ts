import { renderHook } from "@testing-library/react";
import { PoolsStateStructure } from "../store/features/pools/types";
import poolsMocks from "../mocks/poolsMocks";
import usePoolsApi from "./usePoolsApi";
import providerWrapper from "../testUtils/providerWrapper";

describe("Given a usePoolsApi custom hook", () => {
  describe("When it uses it's method getPools to fetch from te API", () => {
    test("Then it should return the available pools in the API", async () => {
      const expectedPools: PoolsStateStructure = { pools: poolsMocks };

      const {
        result: {
          current: { getPools },
        },
      } = renderHook(() => usePoolsApi(), { wrapper: providerWrapper });

      const pools = await getPools();

      expect(pools).toStrictEqual(expectedPools);
    });
  });
});
