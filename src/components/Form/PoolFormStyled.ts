import styled from "styled-components";

const PoolFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  .pool-form {
    &__wrapper {
      gap: 1.8rem;
      padding: 20px;
      max-width: 600px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      text-align: center;
    }

    &__control {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
      font-size: 1rem;
    }

    &__input {
      border-radius: 8px;
      border: 1.5px solid ${({ theme }) => theme.colors.darkColor};
      height: 100%;
      padding: 10px;
      width: 250px;
      color: ${({ theme }) => theme.colors.cardBackgroundColor};
    }

    &__text-area {
      border-radius: 8px;
      border: 1.5px solid ${({ theme }) => theme.colors.darkColor};
      height: 100%;
      width: 250px;
      padding: 10px;
      color: ${({ theme }) => theme.colors.darkColor};
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      align-self: stretch;
      resize: none;
    }

    &__button {
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) => theme.colors.lightColor};
    }
  }
`;

export default PoolFormStyled;
