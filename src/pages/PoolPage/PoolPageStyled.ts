import styled from "styled-components";

const PoolPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  .page {
    font-family: ${({ theme }) => theme.typography.titleFont};

    &__main-title {
      font-weight: 800;
      font-size: 1.5rem;
      text-align: center;
      text-transform: uppercase;
      margin-top: 20px;
      margin-bottom: 8px;
    }

    &__subtitle {
    }
  }
`;
export default PoolPageStyled;
