import { renderHook, screen, waitFor } from "@testing-library/react";
import { PoolsStateStructure } from "../../store/features/pools/types";
import poolsMocks from "../../mocks/poolsMocks";
import usePoolsApi from "../usePoolsApi";
import providerWrapper from "../../testUtils/providerWrapper";
import { customRenderProvider } from "../../testUtils/customRenderProvider";
import App from "../../components/App/App";
import { server } from "../../mocks/msw/node";
import { errorHandlers } from "../../mocks/msw/errorHandlers";

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
  describe("When it uses it's method getPools to fetch from te API", () => {
    test("Then it should a toast message with text 'Error laoding pools'", async () => {
      server.use(...errorHandlers);

      const expectedText = "Error loading pools";

      customRenderProvider(<App />);

      const coso = await screen.findAllByText(expectedText);
      await waitFor(() => {
        coso.forEach((coso) => {
          expect(coso).toBeInTheDocument();
        });
      });
    });
  });
});
