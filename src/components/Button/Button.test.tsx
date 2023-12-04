import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";
import customRenderProvider from "../../testUtils/customRenderProvider";

beforeEach(() => {
  vi.resetAllMocks();
});

describe("Given a Button component", () => {
  describe("When it receives an action and the user clicks the button", () => {
    test("Then it should call the received action", async () => {
      const expectedAction = vi.fn();

      customRenderProvider(
        <Button type="button" actionOnClick={expectedAction} text="test" />,
      );
      const button = screen.getByRole("button", { name: "test" });
      await userEvent.click(button);

      expect(expectedAction).toHaveBeenCalled();
    });
  });
});
