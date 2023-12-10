import styled from "styled-components";

const Loading = styled.span`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundColor};

  .loading {
    &__text {
      margin: 15px 15px;
      display: flex;
      justify-content: center;
      text-align: center;
      font-size: 1.8rem;
      font-style: italic;
      font-weight: bold;
      line-height: 140%;
      color: ${({ theme }) => theme.colors.darkColor};
    }
  }

  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ellipsis div {
    position: absolute;
    width: 14px;
    height: 14px;
    border-radius: 30%;
    background: #000;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.7s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.7s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.7s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.7s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`;

export default Loading;
