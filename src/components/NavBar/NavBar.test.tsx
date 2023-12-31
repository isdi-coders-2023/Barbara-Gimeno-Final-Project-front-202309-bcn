import { screen } from "@testing-library/react";
import { customRenderProvider } from "../../testUtils/customRenderProvider";
import Navigation from "./NavBar";

describe("Given a NavBar component", () => {
  describe("When is rendered", () => {
    test("Then it should show the text `Home`", () => {
      const expectedText = "Home";
      const expectedAccesibelName = "home";

      customRenderProvider(<Navigation />);

      const NavLink = screen.getByRole("link", {
        name: expectedAccesibelName,
      });

      expect(NavLink).toHaveTextContent(expectedText);
    });

    test("Then it should show the text `Create`", () => {
      const expectedText = "Create";
      const expectedAccesibelText = "create pool";

      customRenderProvider(<Navigation />);

      const AddNavLink = screen.getByRole("link", {
        name: expectedAccesibelText,
      });

      expect(AddNavLink).toHaveTextContent(expectedText);
    });
  });
});
