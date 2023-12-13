import { renderHook } from "@testing-library/react";
import { server } from "../../mocks/msw/node";
import poolsMocksWithoutId from "../../mocks/poolsMockWihtoutId";
import usePoolsApi from "../usePoolsApi";
import providerWrapper from "../../testUtils/providerWrapper";
import { errorHandlers } from "../../mocks/msw/errorHandlers";
import poolsMockId from "../../mocks/poolMockId";

describe("Given a usePoolsApi custom hook", () => {
  describe("When it calls its method addPool with `beach pool` pools data", () => {
    test("Then it should return `beach pool` pools data", async () => {
      const expectedNewPool = poolsMocksWithoutId;
      const expectedPool = poolsMockId;

      const {
        result: {
          current: { addPool },
        },
      } = renderHook(() => usePoolsApi(), { wrapper: providerWrapper });

      const newPool = await addPool(expectedNewPool);

      expect(newPool).toStrictEqual(expectedPool);
    });
  });

  describe("When it calls its addPool method with beach pool pool data", () => {
    describe("When it calls its addPool method with beach pool's pool data and the response error", () => {
      test("Then it should show the feedback message 'Error creating pool, please try again'", async () => {
        server.use(...errorHandlers);
        const expectedNewPool = poolsMocksWithoutId;

        const {
          result: {
            current: { addPool },
          },
        } = renderHook(() => usePoolsApi(), { wrapper: providerWrapper });

        const newPool = await addPool(expectedNewPool);

        expect(newPool).toBeUndefined();
      });
    });
  });
});
