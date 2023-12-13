import styled from "styled-components";

const PoolFormStyled = styled.form`
  .form {
    &__wrapper {
      gap: 1rem;
      padding: 15px;
      max-width: 600px;
      display: flex;
      flex-direction: column;

      justify-content: center;
      text-align: center;

      background-color: ${({ theme }) => theme.colors.cardBackgroundColor};
      &__title {
        gap: 1rem;
        padding: 15px;
        max-width: 600px;
        display: flex;
        flex-direction: column;

        justify-content: center;
        text-align: center;
        padding: 15px;
        border-radius: 20px 0 0 0;
        background-color: ${({ theme }) => theme.colors.cardBackgroundColor};
      }
      &__image {
        gap: 1rem;
        padding: 15px 20px;
        max-width: 600px;
        display: flex;
        flex-direction: column;

        justify-content: center;
        text-align: center;
        padding: 15px;
        border-radius: 0px 0 20px 0;
        background-color: ${({ theme }) => theme.colors.cardBackgroundColor};
      }
    }

    &__control {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-size: 1rem;
      margin-left: 8px;
    }

    &__input {
      border-radius: 8px 0;
      height: 100%;
      padding: 10px;
      width: 250px;
      text-align: left;
      background-color: ${({ theme }) => theme.colors.lightColor};
      margin-left: 8px;
    }

    &__text-area {
      border-radius: 8px 0px;
      border-color: ${({ theme }) => theme.colors.lightColor};
      height: 100%;
      padding: 10px;
      color: ${({ theme }) => theme.colors.darkColor};
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      align-self: stretch;
      resize: none;
      margin-left: 8px;
    }
  }
`;

export default PoolFormStyled;
