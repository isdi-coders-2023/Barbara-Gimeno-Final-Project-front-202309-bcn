import { screen } from "@testing-library/react";
import customRenderProvider from "../../testUtils/customRenderProvider";
import PoolPage from "./PoolPage";

describe("Given a PoolPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a heading with the text'Inspiration pools'", () => {
      const expectedTitle = "Inspiration pools";

      customRenderProvider(<PoolPage />);

      const text = screen.getByRole("heading", { name: expectedTitle });

      expect(text).toBeInTheDocument();
    });

    test("Then it's should show a heading with the text 'Let your imagination run wild'", () => {
      const expectedSubtitle = "Let your imagination run wild";

      customRenderProvider(<PoolPage />);

      const subtitle = screen.getByText(expectedSubtitle);

      expect(subtitle).toBeInTheDocument();
    });
  });
});
