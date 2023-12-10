import { screen } from "@testing-library/react";
import { customRenderProvider } from "../../testUtils/customRenderProvider";
import CreatePoolPage from "./CreatePoolPage";

describe("Given a CreatePoolPage component", () => {
  describe("When it's called", () => {
    test("Then it should show a text 'CREATE A NEW POOL INSPIRATION' in a heading", () => {
      const expectedText = "CREATE A NEW POOL INSPIRATION";

      customRenderProvider(<CreatePoolPage />);

      const text = screen.getByRole("heading", { name: expectedText });

      expect(text).toBeInTheDocument();
    });
  });
});
