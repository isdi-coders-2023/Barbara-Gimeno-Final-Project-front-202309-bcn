import { renderHook, screen, waitFor } from "@testing-library/react";
import usePoolsApi from "../usePoolsApi";
import customRenderMemory from "../../testUtils/customRenderMemory";
import App from "../../components/App/App";
import { server } from "../../mocks/msw/node";
import poolsMocks from "../../mocks/poolsMocks";
import poolsMockId from "../../mocks/poolMockId";
import { errorHandlers } from "../../mocks/msw/errorHandlers";
import poolModifyMock from "../../mocks/poolModifyMock";
import providerWrapper from "../../testUtils/providerWrapper";
import { customProvider } from "../../testUtils/customProvider";

describe("Given a usePoolApi custom hook", () => {
  describe("When it is called with its modifyPool method with 'beach pool", () => {
    test.only("Then it should show the text 'Well done. You have modify a pool inspiration' as a feedback message", async () => {
      const expectedMessage = "Well done. You have modify a pool inspiration";

      customRenderMemory(<App />, ["pools/modify/6571d83d81f419ec2f6fc543"]);

      const {
        result: {
          current: { modifyPool },
        },
      } = renderHook(() => usePoolsApi(), { wrapper: customProvider });

      await modifyPool(poolsMocks[0]._id, poolsMockId);
      const actualFeedback = await screen.findAllByText(expectedMessage);

      await waitFor(() => {
        expect(actualFeedback).toBeInTheDocument();
      });
    });
  });

  describe("When it is called with its modifyPool method with 'beach pool` and the response fails", () => {
    test("Then it should show the text 'Error modifing pool, please try again' as a feedback message", async () => {
      server.use(errorHandlers[3]);

      const expectedPoolId = poolsMocks[0]._id;
      const feedbackMessage = "Error modifing pool, please try again";

      customRenderMemory(<App />, ["/modify-pool/6565cdaa1d9be1bc1e6af452"]);

      const {
        result: {
          current: { modifyPool: modifyPool },
        },
      } = renderHook(() => usePoolsApi(), { wrapper: providerWrapper });

      await modifyPool(expectedPoolId, poolModifyMock);

      const actualFeedback = await screen.findAllByText(feedbackMessage);

      expect(actualFeedback[0]).toBeInTheDocument();
    });
  });
});
