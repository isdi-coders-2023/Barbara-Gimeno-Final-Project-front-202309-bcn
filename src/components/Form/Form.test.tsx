import { fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PoolForm from "./Form";
import { customRenderProvider } from "../../testUtils/customRenderProvider";
import poolMockWithoutId from "../../mocks/poolMockWithoutId";

describe("Given a PoolForm component", () => {
  const onSubmitMock = vi.fn();
  describe("When is rendered", () => {
    test("Then it should show the form labels 'Pool type', 'Measures long meters', 'Measures high meters', 'Measures wide meters', 'Since', 'Depuration', 'Material', 'Image (url)'", () => {
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

      customRenderProvider(<PoolForm onSubmit={onSubmitMock} />);

      labelTags.forEach((labelTag) => {
        const field = screen.getByLabelText(labelTag);
        expect(field).toBeInTheDocument();
      });
    });

    describe("When it is rendered and the create button is clicked", () => {
      test("Then it should call its onSubmit function", async () => {
        customRenderProvider(<PoolForm onSubmit={onSubmitMock} />);

        const formOfPool = screen.getByLabelText("Pool type");
        const addButton = screen.getByRole("button", {
          name: "Create",
        });

        await userEvent.click(addButton);

        fireEvent.submit(formOfPool);

        expect(onSubmitMock).toHaveBeenCalled();
      });
    });
    test("Then it should show a button with the text 'Create' inside", () => {
      const expectedTextButton = "Create";

      customRenderProvider(<PoolForm onSubmit={onSubmitMock} />);

      const button = screen.getByText(expectedTextButton);

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it is rendered with all PoolForm fields completed and the create button is clicked", () => {
    test("Then it should call onSubmit function", async () => {
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

      customRenderProvider(<PoolForm onSubmit={onSubmitMock} />);

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

      expect(onSubmitMock).toHaveBeenCalled();
    });
  });
});
