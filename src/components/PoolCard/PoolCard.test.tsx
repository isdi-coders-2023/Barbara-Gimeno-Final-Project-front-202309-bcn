import { screen } from "@testing-library/react";
import poolsMocks from "../../mocks/poolsMocks";
import { PoolStructure } from "../../store/features/pools/types";
import { customRenderProvider } from "../../testUtils/customRenderProvider";
import PoolCard from "./PoolCard";

describe("Given a PoolCard Component", () => {
  describe("When it receives a pool 'beach pool'", () => {
    const pool: PoolStructure = poolsMocks[0];

    test("Then it shoud show the title 'beach pool' on a heading ", () => {
      const expectedTitle = pool.title;

      customRenderProvider(<PoolCard pool={pool} />);
      const heading = screen.getByRole("heading", { name: expectedTitle });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show a '15 x 10 x 1 m' on a title ", () => {
      const expectedSpan = "15 x 10 x 1 m";

      customRenderProvider(<PoolCard pool={pool} />);

      const span = screen.getByText(expectedSpan);

      expect(span).toBeInTheDocument();
    });
    test("Then it should show a '2018' on a title", () => {
      const expectedSpanTitle = pool.since;

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
});
