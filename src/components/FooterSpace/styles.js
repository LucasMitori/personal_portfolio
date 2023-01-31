import styled, { keyframes } from "styled-components";
import Beach from "../../assets/img/beach.gif";

/****************************************

    Author: Lucas Mitori Oliveira Okumura
    contact: lucas.mitori@hotmail.com
    cel: +55 (11) 9-7749-2121
    Name: Personal Portfolio Styles
    Description: Using styled-components to improve Footer Space.
    ~ *   Footer Styles   * ~

            Version: 1.0

****************************************/

const Pulse = keyframes`
  0% {background: var(--color-navigation);}
  50% {background: var(--color-navigation);}
  100% {background: var(--color-navigation);}
`;

const FirstMove = keyframes`
  0% {
    transform: rotate(0deg);
    opacity: 0.5;
  }
  
  50% {
    width: 1000px;
    height: 1000px;
  }
  
  100% {
     transform: rotate(1000deg);
    opacity: 1;
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: var(--color-navigation);
  z-index: -1;
  animation: ${Pulse} 5s infinite;
  overflow: hidden;
  box-shadow: 0px 0px 14px 25px var(--color-primary);

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
    flex-flow: row nowrap;
    height: 80vh;
  }
  @media screen and (max-width: 1920px) {
  }
`;
/*------------------------- Skip line -------------------------*/

export const ElementDiv = styled.div`
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
`;

export const SquaresDiv1 = styled.div`
  border: 10px dashed var(--color-white-mode);
  width: 500px;
  height: 500px;
  animation: ${FirstMove} 100s infinite;
  animation-timing-function: linear;
`;
export const SquaresDiv2 = styled.div`
  animation: ${FirstMove} 180s infinite;
  animation-timing-function: linear;
  width: 1110px;
  height: 1110px;
  border: 10px dashed var(--color-secondary);
`;
export const SquaresDiv3 = styled.div`
  width: 600px;
  height: 600px;
  animation: ${FirstMove} 120s infinite;
  animation-timing-function: linear;
  border: 10px dashed var(--color-white-mode);
`;

/*------------------------- Skip line -------------------------*/

export const MediaInformationSpace = styled.div`
  position: absolute;
  width: 90%;
  height: 65vh;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--blur-effect-02);
  border: 2px solid var(--color-primary);
  border-radius: var(--radius-8);

  & > h1 {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-subtitle-20);
    font-weight: var(--font-weight-600);
    color: var(--color-white-mode);
  }

  & > p {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-subtitle-18);
    font-weight: var(--font-weight-300);
    color: var(--color-white-mode);
    text-align: center;
    line-height: var(--font-line-height-28);
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
    width: 700px;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
  }
`;

export const MediasSpace = styled.ul`
  width: 90%;
  height: 40%;
  background-color: var(--blur-effect-01);
  border: 1px solid var(--color-senary);
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  border-radius: var(--radius-8);

  & > li {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    padding-left: 50px;
  }

  & > li > a {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-subtitle-18);
    font-weight: var(--font-weight-700);
    color: var(--color-white-mode);
    text-decoration: none;
    letter-spacing: 2px;
    padding-left: 50px;
  }
`;

export const StitchSpace = styled.div`
  width: 90%;
  height: 30%;
  background-image: url(${Beach});
  background-position: center;
  background-size: cover;
  border-radius: var(--radius-8);

  & > img {
    margin-top: 30px;
    width: 100%;
    height: 100%;
    transform: scale(0.5);
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 500px) {
    width: 400px;
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
