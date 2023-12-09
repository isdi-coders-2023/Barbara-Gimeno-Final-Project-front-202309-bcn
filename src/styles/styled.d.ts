import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    buttonBorderRatius: string;
    typography: {
      fontFamily: string;
      buttonFontSize: string;
    };
    colors: {
      darkColor: string;
      backgroundColor: string;
      cardBackgroundColor: string;
      lightColor: string;
      buttonColor: string;
      errorColor: string;
      rightColor: string;
    };
  }
}
