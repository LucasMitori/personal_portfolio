import styled, { keyframes } from "styled-components";

/****************************************
    Author: Lucas Mitori dev front-end
    Name:  Design
    Description: Using styled-components to improve Header Space.
    ~ *   Header Styles   * ~
            Version: 1.0
****************************************/

const Squares = keyframes`
    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }
`;

export const AnimationUl = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
  background-color: var(--blur-effect-01);

  & > li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: var(--blur-effect-02);
    animation: ${Squares} 25s linear infinite;
    bottom: -150px;
    z-index: -1;
  }

  & > li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
    z-index: -1;
  }

  & > li:nth-child(2) {
    left: 10%;
    width: 40px;
    height: 40px;
    animation-delay: 10s;
    z-index: -1;
  }
  & > li:nth-child(3) {
    left: 35%;
    width: 20px;
    height: 20px;
    animation-delay: 8s;
    z-index: -1;
  }
  & > li:nth-child(4) {
    left: 45%;
    width: 50px;
    height: 50px;
    animation-delay: 3s;
    z-index: -1;
  }
  & > li:nth-child(5) {
    left: 40%;
    width: 10px;
    height: 10px;
    animation-delay: 2s;
    z-index: -1;
  }
  & > li:nth-child(6) {
    left: 55%;
    width: 60px;
    height: 60px;
    animation-delay: 8s;
    z-index: -1;
  }
  & > li:nth-child(7) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 4s;
    z-index: -1;
  }
  & > li:nth-child(8) {
    left: 63%;
    width: 30px;
    height: 30px;
    animation-delay: 12s;
    z-index: -1;
  }
  & > li:nth-child(9) {
    left: 78%;
    width: 70px;
    height: 70px;
    animation-delay: 7s;
    z-index: -1;
  }
  & > li:nth-child(10) {
    left: 37%;
    width: 20px;
    height: 20px;
    animation-delay: 5s;
    z-index: -1;
  }
  & > li:nth-child(11) {
    left: 23%;
    width: 24px;
    height: 24px;
    animation-delay: 1s;
    z-index: -1;
  }

  & > li:nth-child(12) {
    left: 17%;
    width: 100px;
    height: 100px;
    animation-delay: 5s;
    z-index: -1;
  }
  & > li:nth-child(13) {
    left: 48%;
    width: 90px;
    height: 90px;
    animation-delay: 4s;
    z-index: -1;
  }
  & > li:nth-child(14) {
    left: 79%;
    width: 89px;
    height: 89px;
    animation-delay: 8s;
    z-index: -1;
  }
  & > li:nth-child(15) {
    left: 43%;
    width: 40px;
    height: 40px;
    animation-delay: 4s;
    z-index: -1;
  }
  & > li:nth-child(16) {
    left: 63%;
    width: 63px;
    height: 63px;
    animation-delay: 6s;
    z-index: -1;
  }
  & > li:nth-child(17) {
    left: 5%;
    width: 38px;
    height: 38px;
    animation-delay: 4s;
    z-index: -1;
  }
  & > li:nth-child(18) {
    left: 93%;
    width: 80px;
    height: 80px;
    animation-delay: 2s;
    z-index: -1;
  }
  & > li:nth-child(19) {
    left: 48%;
    width: 48px;
    height: 48px;
    animation-delay: 6s;
    z-index: -1;
  }
  & > li:nth-child(20) {
    left: 59%;
    width: 59px;
    height: 59px;
    animation-delay: 1s;
    z-index: -1;
  }

  @media screen and (min-width: 370px) {
  }
  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
  }
`;

/*------------------------- Skip line -------------------------*/
