import styled from "styled-components";

const PoolCardStyled = styled.article`
  width: 275px;
  height: 474px;
  flex-shrink: 0;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-family: ${({ theme }) => theme.typography.fontFamily};
  color: ${({ theme }) => theme.colors.darkColor};
  background-color: ${({ theme }) => theme.colors.cardBackgroundColor};

  .card {
    &__title {
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 100%; /* 20px */
      letter-spacing: -1px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    &__image {
      border-radius: 10px;
      border: 1px solid #000;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      backdrop-filter: blur(2px);
      margin: 10px 18px;
      display: flex;
    }

    &__measures-long,
    &__measures-high,
    &__measures-wide {
      text-align: center;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 100%; /* 20px */
      letter-spacing: -1px;
    }

    &__since {
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 100%; /* 20px */
      letter-spacing: -1px;
    }
  }
`;

export default PoolCardStyled;
