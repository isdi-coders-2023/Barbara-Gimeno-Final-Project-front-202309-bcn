import { fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PoolForm from "./Form";
import { customRenderProvider } from "../../testUtils/customRenderProvider";

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
});
