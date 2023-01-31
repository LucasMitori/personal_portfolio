import { motion } from "framer-motion";
import PersonalImage from "../../assets/personal/image03.jpeg";
import Forest from "../../assets/img/forest.gif";
import styled, { keyframes } from "styled-components";

/****************************************

    Author: Lucas Mitori Oliveira Okumura
    contact: lucas.mitori@hotmail.com
    cel: +55 (11) 9-7749-2121
    Name: Personal Portfolio Styles
    Description: Using styled-components to improve About Page.
    ~ *   About Page Styles   * ~

            Version: 1.0

****************************************/

const MoveLeft = keyframes`
0% {
  transform: translateX(-10rem);

}

100% {
  transform: translateX(0);
}
`;

export const AboutMeSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--color-navigation);
  z-index: -1;
  box-shadow: 0px 0px 14px 25px var(--color-royalblue);

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
  @media screen and (max-width: 1920px) {
  }
`;

/*------------------------- Skip line -------------------------*/

export const FirstSection = styled.section`
  width: 100%;
  height: 90%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 30px;
  animation-name: ${(props) => {
    if (props.animationValueContact === true) {
      return MoveLeft;
    }
  }};
  animation-duration: 2s;

  & > h2 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-32);
    color: var(--color-grey-0);
    margin-bottom: 20px;
  }

  & > p {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-text-16);
    color: var(--color-white-mode);
    line-height: var(--font-line-height-24);
    font-weight: var(--font-weight-300);
  }

  & > p > b {
    color: var(--color-secondary);
  }

  @media screen and (min-width: 360px) {
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
  @media screen and (max-width: 1920px) {
  }
`;

export const PersonalInformation = styled(motion.div)`
  width: 90%;
  height: 65%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
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
  @media screen and (max-width: 1920px) {
  }
`;

export const MainPhoto = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  background: url(${PersonalImage});
  background-position: center;
  background-size: cover;
  border: 3px solid var(--color-primary);

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const MainInformation = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-top: 30px;

  & > h2 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-28);
    color: var(--color-grey-0);
    margin-bottom: 2vh;
    width: 100%;
    text-align: center;
  }

  & > p {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-text-16);
    color: var(--color-white-mode);
    line-height: var(--font-line-height-24);
    font-weight: var(--font-weight-300);
    margin-bottom: 3vh;
  }

  & > ul {
    width: 100%;
    height: 60%;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    align-items: center;
    overflow: auto;
  }

  & > ul > li {
    height: 25%;
    font-family: var(--font-primary-nunito);
    font-size: var(--font-text-16);
    color: var(--color-white-mode);
    font-weight: var(--font-weight-300);
  }

  & > ul > li > svg {
    margin-right: 10px;
    align-self: center;
  }

  & > ul > li > span {
    color: var(--color-tertiary);
    align-self: center;
    margin-right: 10px;
  }

  @media screen and (min-width: 360px) {
    & > ul li {
      margin-right: 15px;
    }
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

export const PikachuSpace = styled.div`
  width: 90%;
  height: 30%;
  background-image: url(${Forest});
  background-position: center;
  background-size: cover;
  border-radius: var(--radius-8);

  & > img {
    width: 100%;
    height: 100%;
    transform: scale(0.5);
    margin-top: 30px;
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
    width: 500px;
    height: 30%;

    & > img {
      margin-top: 45px;
    }
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
