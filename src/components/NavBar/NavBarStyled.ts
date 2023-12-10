import styled from "styled-components";

const NavBarStyled = styled.ul`
  bottom: 0;
  display: flex;
  justify-content: space-around;
  background-color: #c0dbe6;
  border-radius: 0px 0px 4px 4px;
  align-items: center;
  padding: 2px;

  .navigation {
    &__home {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
    }
    &__create {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
    }

    &__text {
      color: ${({ theme }) => theme.colors.darkColor};
      font-size: 18px;
      font-weight: 680;
    }
  }

  .active {
    color: ${({ theme }) => theme.colors.lightColor};
    font-size: 22px;
    font-weight: 750;
  }
`;

export default NavBarStyled;
