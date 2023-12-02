import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  min-height: 55px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: ${({ theme }) => theme.borderRadius};

  .header {
    &__background-image {
      object-fit: contain;
      height: 82px;
      background-image: url("/image/waterpool.webp");
    }

    &__title {
      font-family: ${({ theme }) => theme.typography.appName};
      color: ${({ theme }) => theme.colors.lightColor};
      font-size: 30px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
    }
  }
`;

export default HeaderStyled;
