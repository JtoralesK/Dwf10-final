import styled from "styled-components";
export const MpLoader = styled.div`
  position: relative;
  width: 68px;
  height: 68px;
  background: var(--fourth-color);
  transform: rotateX(65deg) rotate(45deg);
  // remove bellows command for perspective change
  //transform: perspective(200px) rotateX(65deg) rotate(45deg);
  color: #fff;
  animation: layers1 1s linear infinite alternate;

  &:after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.7);
    animation: layerTr 1s linear infinite alternate;
  }

  @keyframes layers1 {
    0% {
      box-shadow: 0px 0px 0 0px;
    }
    90%,
    100% {
      box-shadow: 20px 20px 0 -4px;
    }
  }
  @keyframes layerTr {
    0% {
      transform: translate(0, 0) scale(1);
    }
    100% {
      transform: translate(-25px, -25px) scale(1);
    }
  }
`;
