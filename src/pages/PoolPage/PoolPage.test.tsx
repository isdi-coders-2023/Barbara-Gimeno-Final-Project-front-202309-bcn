import { screen } from "@testing-library/react";
import customRenderProvider from "../../testUtils/customRenderProvider";
import PoolPage from "./PoolPage";

describe("Given a PoolPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a heading with the text'Inspiration pools'", () => {
      const expectedtext = "Inspiration pools";

      customRenderProvider(<PoolPage />);

      const text = screen.getByRole("heading", { name: expectedtext });

      expect(text).toBeInTheDocument();
    });
  });
});
