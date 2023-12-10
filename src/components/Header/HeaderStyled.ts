import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;

  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.25);
  border-radius: ${({ theme }) => theme.borderRadius};

  .header {
    &__background-image {
      display: flex;
      width: 100%;
      height: 60px;
      padding: 20px;
      justify-content: flex-start;
      background-size: cover;
      background-position: bottom;
      align-items: center;
      background-image: url("/image/wave.webp");
    }

    &__title {
      color: ${({ theme }) => theme.colors.buttonColor};
      font-size: 30px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`;

export default HeaderStyled;
