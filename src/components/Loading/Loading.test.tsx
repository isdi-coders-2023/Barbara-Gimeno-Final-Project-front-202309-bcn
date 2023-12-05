import { screen } from "@testing-library/react";
import Loading from "./Loading";
import { customRenderProvider } from "../../testUtils/customRenderProvider";

describe("Given a Loading component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 'Loading' in a heading", () => {
      customRenderProvider(<Loading />);

      const expectedText = "Loading";

      const loadingElement = screen.getByText(expectedText);

      expect(loadingElement).toBeInTheDocument();
    });
  });
});
