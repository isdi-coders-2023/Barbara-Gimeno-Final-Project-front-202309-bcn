import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Header from "./Header";
import { mainTheme } from "../../styles/mainTheme";
import GlobalStyle from "../../styles/GlobalStyle";

describe("Given a Header component", () => {
  describe("When it is renderen on screen", () => {
    test("Then it should a text 'Poolisher' on an heading", () => {
      const expectedText = "Poolisher";
      render(
        <ThemeProvider theme={mainTheme}>
          <GlobalStyle />
          <Header />
        </ThemeProvider>,
      );

      const header = screen.getByRole("heading", { name: expectedText });

      expect(header).toBeInTheDocument();
    });
  });
});
