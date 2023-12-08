import { renderHook } from "@testing-library/react";
import providerWrapper from "../../testUtils/providerWrapper";
import usePoolsApi from "../usePoolsApi";

describe("Given a usePoolsApi custom hook", () => {
  describe("When it calls its deletePool method with an id for the pool beach pool", () => {
    test.only("Then it should delete the pool beach pool from the API", async () => {
      const expectedPoolId = "6565cdaa1d9be1bc1e6af452";

      const {
        result: {
          current: { deletePool },
        },
      } = renderHook(() => usePoolsApi(), { wrapper: providerWrapper });

      const response = await deletePool(expectedPoolId);

      const expectedEmptyObject = {};

      expect(response).toStrictEqual(expectedEmptyObject);
    });
  });
});
