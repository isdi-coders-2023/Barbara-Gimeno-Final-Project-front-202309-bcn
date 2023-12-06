import styled from "styled-components";

const ButtonStyles = styled.button`
  background: ${({ theme }) => theme.colors.buttonColor};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  color: ${({ theme }) => theme.colors.darkColor};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: ${({ theme }) => theme.buttonBorderRatius};
  font-size: ${({ theme }) => theme.typography.buttonFontSize};
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 20px */
  letter-spacing: -1px;

  .button {
    &__delete {
      display: flex;
      width: 103px;
      height: 47px;
      padding: 8px 16px;
      justify-content: center;
      align-items: center;
      gap: 5px;

      backdrop-filter: blur(2px);
    }
  }
`;

export default ButtonStyles;
