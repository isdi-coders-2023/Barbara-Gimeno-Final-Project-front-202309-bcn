import { screen, waitFor } from "@testing-library/react";
import poolsMocks from "../../mocks/poolsMocks";
import { PoolStructure } from "../../store/features/pools/types";
import { customRenderProvider } from "../../testUtils/customRenderProvider";
import PoolCard from "./PoolCard";
import userEvent from "@testing-library/user-event";

describe("Given a PoolCard Component", () => {
  describe("When it receives a pool 'beach pool'", () => {
    const pool: PoolStructure = poolsMocks[0];

    test("Then it shoud show the title 'beach pool' on a heading ", () => {
      const expectedTitle = pool.title;

      customRenderProvider(<PoolCard pool={pool} />);
      const heading = screen.getByRole("heading", { name: expectedTitle });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show a 'Measures 15 x 10 x 1 m' on a title ", () => {
      const expectedSpan = "Measures 15 x 10 x 1 m";

      customRenderProvider(<PoolCard pool={pool} />);

      const span = screen.getByText(expectedSpan);

      expect(span).toBeInTheDocument();
    });
    test("Then it should show a 'Since 2018' on a title", () => {
      const expectedSpanTitle = "Since 2018";

      customRenderProvider(<PoolCard pool={pool} />);

      const spanTitle = screen.getByText(expectedSpanTitle);

      expect(spanTitle).toBeInTheDocument();
    });
    test("Then it should show an image with 'beach pool'", () => {
      const expectedAltText = pool.title;

      customRenderProvider(<PoolCard pool={pool} />);

      const altText = screen.getByAltText(expectedAltText);

      expect(altText).toBeInTheDocument();
    });
  });
  describe("When it is rendered on screen and receives a pool with title beach pool and a click to delete it", () => {
    const expectedButtonName = "Delete";

    test("Then it should delete the beach pool", async () => {
      const expectedMovieTitle = "beach pool";

      customRenderProvider(<PoolCard pool={poolsMocks[0]} />);

      const deleteButton = screen.getByRole("button", {
        name: expectedButtonName,
      });

      const deleteTitle = screen.getByRole("heading", {
        name: expectedMovieTitle,
      });

      await userEvent.click(deleteButton);

      waitFor(() => {
        expect(deleteTitle).not.toBeInTheDocument();
      });
    });
  });
});
