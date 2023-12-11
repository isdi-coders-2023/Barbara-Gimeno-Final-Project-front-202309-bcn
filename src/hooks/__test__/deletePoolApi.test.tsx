import { renderHook, screen } from "@testing-library/react";
import providerWrapper from "../../testUtils/providerWrapper";
import usePoolsApi from "../usePoolsApi";
import { server } from "../../mocks/msw/node";
import { errorHandlers } from "../../mocks/msw/errorHandlers";

describe("Given a usePoolsApi custom hook", () => {
  describe("When it calls its deletePool method with an id for the pool beach pool", () => {
    test("Then it should delete the pool beach pool from the API", async () => {
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
    describe("When it calls deletePool method", () => {
      test("Then it should show an error message 'Ups, your pool wasn't deleted'", async () => {
        server.use(...errorHandlers);
        const expectedMessage = "Ups, your pool wasn't deleted";

        const expectedPoolId = "6565cdaa1d9be1bc1e6af452";

        const {
          result: {
            current: { deletePool },
          },
        } = renderHook(() => usePoolsApi(), { wrapper: providerWrapper });

        await deletePool(expectedPoolId);
        const coso = await screen.findByText(expectedMessage);

        expect(coso).toBeInTheDocument();
      });
    });
  });
});
