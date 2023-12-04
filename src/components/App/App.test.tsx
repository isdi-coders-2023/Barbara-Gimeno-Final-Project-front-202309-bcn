import { screen } from "@testing-library/react";
import { customRenderProvider } from "../../testUtils/customRenderProvider";
import App from "./App";

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a Header with a title 'Poolisher' on a heading", () => {
      const expectedText = "Poolisher";

      customRenderProvider(<App />);

      const expectedTitle = screen.getByRole("heading", {
        name: expectedText,
      });

      expect(expectedTitle).toBeInTheDocument();
    });
  });
});
