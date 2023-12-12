import styled from "styled-components";

const PoolCardStyled = styled.article`
  width: 275px;
  height: 380px;
  flex-shrink: 0;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20px 0px;
  color: ${({ theme }) => theme.colors.darkColor};
  background-color: ${({ theme }) => theme.colors.cardBackgroundColor};
  padding: 20px;

  .card {
    &__container {
      display: flex;
      flex: 1 1 auto;
      flex-direction: column;
      gap: 5px;
    }
    &__title {
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 100%; /* 20px */
      letter-spacing: -1px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-top: 20px;
    }

    &__image {
      height: auto;
      max-width: 100%;
      vertical-align: middle;
      border-radius: 20px 0px;
    }
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
`;

export default PoolCardStyled;
