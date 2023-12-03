import { screen } from "@testing-library/react";
import customRenderProvider from "../../testUtils/customRenderProvider";
import PoolsList from "./PoolsList";

describe("Given a PoolList component", () => {
  describe("When it receives an array of pools with 'beach pool' and 'infinity pool'", () => {
    test("Then it should create 2 listitems", () => {
      const expectedListItems = 2;

      customRenderProvider(<PoolsList />);
      const listItems = screen.getAllByRole("listitem").length;

      expect(listItems).toBe(expectedListItems);
    });
  });
});
