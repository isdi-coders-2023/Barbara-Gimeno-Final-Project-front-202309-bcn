import styled from "styled-components";
import PoolPageStyled from "../PoolPage/PoolPageStyled";

const CreatePoolPageStyled = styled(PoolPageStyled)`
  .create {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 800;
    font-size: 1.5rem;
    text-align: center;
    text-transform: uppercase;
    padding: 10px;
  }
`;

export default CreatePoolPageStyled;
