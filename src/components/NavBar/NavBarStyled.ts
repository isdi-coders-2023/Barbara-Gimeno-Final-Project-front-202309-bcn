import styled from "styled-components";

const NavBarStyled = styled.ul`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding-top: 12px;
  padding-bottom: 22px;
  display: flex;
  justify-content: space-around;
  min-height: 75px;
  background-color: ${({ theme }) => theme.colors.buttonColor};
  box-shadow: 0 0.01px 6px ${({ theme }) => theme.colors.darkColor};

  .navigation {
    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
    }

    &__text {
      color: ${({ theme }) => theme.colors.darkColor};
      font-size: 24px;
      font-weight: 400;
    }

    &__text-active {
      color: ${({ theme }) => theme.colors.lightColor};
      font-size: 26px;
      font-weight: 500;
    }
  }
`;

export default NavBarStyled;
