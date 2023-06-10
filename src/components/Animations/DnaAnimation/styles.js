import styled from "styled-components";

export const StrainSection = styled.section`
  width: 30%;
  height: 100%;
  opacity: 0.5;
  display: none;

  @media screen and (min-width: 370px) {
  }
  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    display: block;
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
  }
`;

export const Strains = styled.div`
  width: 155px;
  height: 1px;
  background-color: var(--color-white-mode);
  position: relative;
  margin: 0px auto;
  margin-top: 28px;
  margin-bottom: 28px;
  -webkit-animation-name: rotate-strain;
  animation-name: rotate-strain;
  -webkit-animation-duration: 1.7s;
  animation-duration: 1.7s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-play-state: running;
  animation-play-state: running;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: var(--color-primary);
    left: 0;
    margin-top: -9px;
    margin-left: -9px;
    -webkit-animation-name: strain-size-left;
    animation-name: strain-size-left;
    -webkit-animation-duration: 1.7s;
    animation-duration: 1.7s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-play-state: running;
    animation-play-state: running;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: var(--main-dark-color);
    right: 0;
    margin-top: -9px;
    margin-right: -9px;
    -webkit-animation-name: strain-size-right;
    animation-name: strain-size-right;
    -webkit-animation-duration: 1.7s;
    animation-duration: 1.7s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-play-state: running;
    animation-play-state: running;
  }

  &:nth-child(1),
  &:nth-child(1):before,
  &:nth-child(1):after {
    -webkit-animation-delay: 0.15s;
    animation-delay: 0.15s;
  }
  &:nth-child(2),
  &:nth-child(2):before,
  &:nth-child(2):after {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }
  &:nth-child(3),
  &:nth-child(3):before,
  &:nth-child(3):after {
    -webkit-animation-delay: 0.45s;
    animation-delay: 0.45s;
  }
  &:nth-child(4),
  &:nth-child(4):before,
  &:nth-child(4):after {
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
  }
  &:nth-child(5),
  &:nth-child(5):before,
  &:nth-child(5):after {
    -webkit-animation-delay: 0.75s;
    animation-delay: 0.75s;
  }
  &:nth-child(6),
  &:nth-child(6):before,
  &:nth-child(6):after {
    -webkit-animation-delay: 0.9s;
    animation-delay: 0.9s;
  }
  &:nth-child(7),
  &:nth-child(7):before,
  &:nth-child(7):after {
    -webkit-animation-delay: 1.05s;
    animation-delay: 1.05s;
  }
  &:nth-child(8),
  &:nth-child(8):before,
  &:nth-child(8):after {
    -webkit-animation-delay: 1.2s;
    animation-delay: 1.2s;
  }
  &:nth-child(9),
  &:nth-child(9):before,
  &:nth-child(9):after {
    -webkit-animation-delay: 1.35s;
    animation-delay: 1.35s;
  }
  &:nth-child(10),
  &:nth-child(10):before,
  &:nth-child(10):after {
    -webkit-animation-delay: 1.5s;
    animation-delay: 1.5s;
  }
  &:nth-child(11),
  &:nth-child(11):before,
  &:nth-child(11):after {
    -webkit-animation-delay: 1.65s;
    animation-delay: 1.65s;
  }
  &:nth-child(12),
  &:nth-child(12):before,
  &:nth-child(12):after {
    -webkit-animation-delay: 1.8s;
    animation-delay: 1.8s;
  }
  &:nth-child(13),
  &:nth-child(13):before,
  &:nth-child(13):after {
    -webkit-animation-delay: 0.15s;
    animation-delay: 0.15s;
  }
  &:nth-child(14),
  &:nth-child(14):before,
  &:nth-child(14):after {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }
  &:nth-child(15),
  &:nth-child(15):before,
  &:nth-child(15):after {
    -webkit-animation-delay: 0.45s;
    animation-delay: 0.45s;
  }
  &:nth-child(16),
  &:nth-child(16):before,
  &:nth-child(16):after {
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
  }
  &:nth-child(17),
  &:nth-child(17):before,
  &:nth-child(17):after {
    -webkit-animation-delay: 0.75s;
    animation-delay: 0.75s;
  }
  &:nth-child(18),
  &:nth-child(18):before,
  &:nth-child(18):after {
    -webkit-animation-delay: 0.9s;
    animation-delay: 0.9s;
  }
  &:nth-child(19),
  &:nth-child(19):before,
  &:nth-child(19):after {
    -webkit-animation-delay: 1.05s;
    animation-delay: 1.05s;
  }
  &:nth-child(20),
  &:nth-child(20):before,
  &:nth-child(20):after {
    -webkit-animation-delay: 1.2s;
    animation-delay: 1.2s;
  }
  &:nth-child(21),
  &:nth-child(21):before,
  &:nth-child(21):after {
    -webkit-animation-delay: 1.35s;
    animation-delay: 1.35s;
  }
  &:nth-child(22),
  &:nth-child(22):before,
  &:nth-child(22):after {
    -webkit-animation-delay: 1.5s;
    animation-delay: 1.5s;
  }
  &:nth-child(23),
  &:nth-child(23):before,
  &:nth-child(23):after {
    -webkit-animation-delay: 1.65s;
    animation-delay: 1.65s;
  }
  &:nth-child(24),
  &:nth-child(24):before,
  &:nth-child(24):after {
    -webkit-animation-delay: 1.8s;
    animation-delay: 1.8s;
  }
  &:nth-child(25),
  &:nth-child(25):before,
  &:nth-child(25):after {
    -webkit-animation-delay: 0.15s;
    animation-delay: 0.15s;
  }
  &:nth-child(26),
  &:nth-child(26):before,
  &:nth-child(26):after {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }
  &:nth-child(27),
  &:nth-child(27):before,
  &:nth-child(27):after {
    -webkit-animation-delay: 0.45s;
    animation-delay: 0.45s;
  }
  &:nth-child(28),
  &:nth-child(28):before,
  &:nth-child(28):after {
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
  }
  &:nth-child(29),
  &:nth-child(29):before,
  &:nth-child(29):after {
    -webkit-animation-delay: 0.75s;
    animation-delay: 0.75s;
  }
  &:nth-child(30),
  &:nth-child(30):before,
  &:nth-child(30):after {
    -webkit-animation-delay: 0.9s;
    animation-delay: 0.9s;
  }
  &:nth-child(31),
  &:nth-child(31):before,
  &:nth-child(31):after {
    -webkit-animation-delay: 1.05s;
    animation-delay: 1.05s;
  }
  &:nth-child(32),
  &:nth-child(32):before,
  &:nth-child(32):after {
    -webkit-animation-delay: 1.2s;
    animation-delay: 1.2s;
  }
  &:nth-child(33),
  &:nth-child(33):before,
  &:nth-child(33):after {
    -webkit-animation-delay: 1.35s;
    animation-delay: 1.35s;
  }
  &:nth-child(34),
  &:nth-child(34):before,
  &:nth-child(34):after {
    -webkit-animation-delay: 1.5s;
    animation-delay: 1.5s;
  }
  &:nth-child(35),
  &:nth-child(35):before,
  &:nth-child(35):after {
    -webkit-animation-delay: 1.65s;
    animation-delay: 1.65s;
  }
  &:nth-child(36),
  &:nth-child(36):before,
  &:nth-child(36):after {
    -webkit-animation-delay: 1.8s;
    animation-delay: 1.8s;
  }
  &:nth-child(37),
  &:nth-child(37):before,
  &:nth-child(37):after {
    -webkit-animation-delay: 0.15s;
    animation-delay: 0.15s;
  }
  &:nth-child(38),
  &:nth-child(38):before,
  &:nth-child(38):after {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }
  &:nth-child(39),
  &:nth-child(39):before,
  &:nth-child(39):after {
    -webkit-animation-delay: 0.45s;
    animation-delay: 0.45s;
  }
  &:nth-child(40),
  &:nth-child(40):before,
  &:nth-child(40):after {
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
  }

  @-webkit-keyframes rotate-strain {
    0% {
      width: 155px;
    }
    25% {
      width: 0;
    }
    50% {
      width: 155px;
    }
    75% {
      width: 0;
    }
    100% {
      width: 155px;
    }
  }

  @keyframes rotate-strain {
    0% {
      width: 155px;
    }
    25% {
      width: 0;
    }
    50% {
      width: 155px;
    }
    75% {
      width: 0;
    }
    100% {
      width: 155px;
    }
  }
  @-webkit-keyframes strain-size-left {
    0% {
      transform: scale(1) translateX(0px);
    }
    25% {
      transform: scale(0.5);
    }
    50% {
      transform: scale(1) translateX(155px);
    }
    75% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1) translateX(0px);
    }
  }
  @keyframes strain-size-left {
    0% {
      transform: scale(1) translateX(0px);
    }
    25% {
      transform: scale(0.5);
    }
    50% {
      transform: scale(1) translateX(155px);
    }
    75% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1) translateX(0px);
    }
  }
  @-webkit-keyframes strain-size-right {
    0% {
      transform: scale(1) translateX(0px);
    }
    25% {
      transform: scale(1.5);
    }
    50% {
      transform: scale(1) translateX(-155px);
    }
    75% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1) translateX(0px);
    }
  }
  @keyframes strain-size-right {
    0% {
      transform: scale(1) translateX(0px);
    }
    25% {
      transform: scale(1.5);
    }
    50% {
      transform: scale(1) translateX(-155px);
    }
    75% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1) translateX(0px);
    }
  }
`;
