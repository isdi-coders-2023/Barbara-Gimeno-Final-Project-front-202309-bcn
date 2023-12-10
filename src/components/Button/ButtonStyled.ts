import styled from "styled-components";

const ButtonStyles = styled.button`
  background: #ffffff;
  color: #000;
  border-radius: 5px 0;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
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
