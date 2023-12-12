import { screen } from "@testing-library/react";
import { customRenderProvider } from "../../testUtils/customRenderProvider";
import App from "./App";
import userEvent from "@testing-library/user-event";
import poolMockWithoutId from "../../mocks/poolMockWithoutId";
import { server } from "../../mocks/msw/node";
import { handlers } from "../../mocks/msw/handlers";
import customRenderMemory from "../../testUtils/customRenderMemory";

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

  describe("When it is rendered with all PoolForm fields completed and the create button is clicked", () => {
    test("Then it should call onSubmit function", async () => {
      server.use(...handlers);
      const expectedFeedback =
        "Well done! You have created a new pool inspiration";

      const labelTags = [
        "Pool type",
        "Measures long meters",
        "Measures high meters",
        "Measures wide meters",
        "Since",
        "Depuration",
        "Material",
        "Image (url)",
      ];

      customRenderMemory(<App />, ["/pools-create"]);

      const titleInput = screen.getByLabelText(labelTags[0]);
      const measuresLongInput = screen.getByLabelText(labelTags[1]);
      const measuresHighInput = screen.getByLabelText(labelTags[2]);
      const measuresWideInput = screen.getByLabelText(labelTags[3]);
      const sinceInput = screen.getByLabelText(labelTags[4]);
      const depurationInput = screen.getByLabelText(labelTags[5]);
      const materialInput = screen.getByLabelText(labelTags[6]);
      const imageInput = screen.getByLabelText(labelTags[7]);

      const buttonName = "Create";
      const buttonElement = screen.getByRole("button", { name: buttonName });

      const title = poolMockWithoutId[0].title;
      const measuresLong = poolMockWithoutId[0].measuresLong;
      const measuresHigh = poolMockWithoutId[0].measuresHigh;
      const measuresWide = poolMockWithoutId[0].measuresWide;
      const since = poolMockWithoutId[0].since;
      const depuration = poolMockWithoutId[0].depuration;
      const material = poolMockWithoutId[0].material;
      const image = poolMockWithoutId[0].image;

      await userEvent.type(titleInput, title);
      await userEvent.type(measuresLongInput, measuresLong.toString());
      await userEvent.type(measuresHighInput, measuresHigh.toString());
      await userEvent.type(measuresWideInput, measuresWide.toString());
      await userEvent.type(sinceInput, since.toString());
      await userEvent.type(depurationInput, depuration);
      await userEvent.type(materialInput, material);
      await userEvent.type(imageInput, image);

      await userEvent.click(buttonElement);
      const actualMessages = await screen.getAllByText(expectedFeedback);

      expect(actualMessages[0]).toBeInTheDocument();
    });
  });
});
