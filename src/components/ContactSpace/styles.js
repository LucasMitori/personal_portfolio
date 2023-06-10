import styled, { keyframes } from "styled-components";

/****************************************

    Author: Lucas Mitori Oliveira Okumura
    contact: lucas.mitori@hotmail.com
    cel: +55 (11) 9-7749-2121
    Name: Personal Portfolio Styles
    Description: Using styled-components to improve Contact Page.
    ~ *   Contact Page Styles   * ~

            Version: 1.0

****************************************/

const Gradient = keyframes`
    0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Cube = keyframes`
    from {
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
    opacity: 1;
  }
  to {
    transform: scale(20) rotate(960deg) translate(-50%, -50%);
    opacity: 0;
  }
`;

const MoveRight = keyframes`
    0% {
    transform: translateX(10rem);

    }

    100% {
    transform: translateX(0);
    }
`;

const BounceIn = keyframes`
0% {
    -webkit-transform: translateY(-500px);
            transform: translateY(-500px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateY(-65px);
            transform: translateY(-65px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateY(-28px);
            transform: translateY(-28px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
`;

export const ContactSection = styled.section`
  width: 100%;
  height: 150vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: var(--color-navigation);
  z-index: -1;
  box-shadow: 0px 0px 14px 25px var(--color-senary);
  position: relative;

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 900px) {
  }
  @media screen and (min-width: 1024px) {
    flex-flow: row nowrap;
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;

/*------------------------- Skip line -------------------------*/

export const ContentDiv = styled.div`
  width: 80%;
  height: 90%;
  margin: auto;
  background: linear-gradient(132deg, #fc415a, #591bc5, #212335);
  background-size: 400% 400%;
  animation: ${Gradient} 15s ease infinite;
  position: relative;
  overflow: hidden;
  padding: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  border-radius: var(--radius-8);
  -webkit-box-shadow: 0px 0px 0px 8px #000000, 0px 0px 0px 16px #4b4c4b,
    0px 0px 0px 24px #828482, 0px 0px 0px 31px #b2b5b2, 0px 0px 0px 39px #daddda,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 0px 0px 0px 8px #000000, 0px 0px 0px 16px #4b4c4b,
    0px 0px 0px 24px #828482, 0px 0px 0px 31px #b2b5b2, 0px 0px 0px 39px #daddda,
    5px 5px 15px 5px rgba(0, 0, 0, 0);

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 900px) {
    width: 700px;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const CubesDiv = styled.div`
  position: absolute;
  top: 80vh;
  left: 45vw;
  width: 10px;
  height: 10px;
  border: solid 1px #d7d4e4;
  transform-origin: top left;
  transform: scale(0) rotate(0deg) translate(-50%, -50%);
  animation: ${Cube} 12s ease-in forwards infinite;

  &:nth-child(2n) {
    border-color: #fff;
  }
  &:nth-child(2) {
    animation-delay: 2s;
    left: 25vw;
    top: 40vh;
  }
  &:nth-child(3) {
    animation-delay: 4s;
    left: 75vw;
    top: 50vh;
  }
  &:nth-child(4) {
    animation-delay: 6s;
    left: 90vw;
    top: 10vh;
  }
  &:nth-child(5) {
    animation-delay: 8s;
    left: 10vw;
    top: 85vh;
  }
  &:nth-child(6) {
    animation-delay: 10s;
    left: 50vw;
    top: 10vh;
  }
`;

/*------------------------- Skip line -------------------------*/

export const ArticleCard = styled.div`
  width: 90%;
  background-color: var(--color-navigation);
  height: 15vh;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  margin: 20px auto;
  padding: 10px;
  border: 1px solid var(--color-primary);
  border-radius: var(--radius-8);

  animation-name: ${(props) => {
    if (props.animationValueContact === true) {
      return MoveRight;
    }
  }};

  animation-duration: 2s;

  & > svg {
    margin-left: 20px;
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
  @media screen and (min-width: 1400px) {
  }

  @media screen and (max-width: 1920px) {
  }
`;

export const ArticleCardText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-left: 20px;

  & > h2 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-24);
    color: var(--color-grey-0);
  }
  & > h4 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-text-16);
    color: var(--color-grey-0);
  }
`;

export const FormSpace = styled.aside`
  width: 95%;
  height: 80vh;
  display: flex;
  background-color: var(--blur-effect-01);
  border: 2px solid var(--color-secondary);
  border-radius: var(--radius-4);
  margin: 0 auto;

  animation-name: ${(props) => {
    if (props.animationValueContact === true) {
      return BounceIn;
    }
  }};

  animation-duration: 2s;

  & > form {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: flex-start;
  }

  & > form > label {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-text-16);
    color: var(--color-primary);
  }

  & > form > input {
    width: 100%;
    height: 40px;
    border: 1px solid var(--color-grey-5);
    background-color: var(--color-grey-0);
    border-radius: var(--radius-4);
    padding-left: 20px;
  }

  & > form > input:focus {
    outline: none;
    border: 2px solid var(--color-shadow-box-03);
  }

  & > form > textarea {
    width: 100%;
    height: 40%;
    padding: 20px;
    resize: none;
  }

  & > form > textarea:focus {
    outline: none;
    border: 2px solid var(--color-shadow-box-03);
  }

  & > form > button {
    width: 100%;
    height: 40px;
    border: 1px solid var(--color-primary);
    background-color: var(--color-quinternary);
    color: var(--color-grey-0);
    font-family: var(--font-primary-nunito);
    font-size: var(--font-text-16);
    text-transform: uppercase;
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
  @media screen and (min-width: 1400px) {
  }

  @media screen and (max-width: 1920px) {
  }
`;
