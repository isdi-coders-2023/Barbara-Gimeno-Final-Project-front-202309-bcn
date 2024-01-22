import styled from "styled-components";

const ButtonStyles = styled.button`
  left: auto;
  background-color: ${({ theme }) => theme.colors.lightColor};
  border-radius: 10px 0;
  display: flex;
  flex-direction: column;
  color: #000;
  padding: 5px;
  font-size: 18px;
  font-weight: 500;
  margin-top: 10px;
  align-items: center;

  .button {
    &__text {
      width: 60px;
      display: flex;
      width: 50px;
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
