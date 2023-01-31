import styled, { keyframes } from "styled-components";
import parallaxImg01 from "../../assets/img/main_background_01.jpg";
import parallaxImg02 from "../../assets/img/main_background_02.jpg";
import parallaxImg03 from "../../assets/img/main_background_03.jpg";
import parallaxImg04 from "../../assets/img/main_background_04.jpg";
import parallaxImg05 from "../../assets/img/main_background_10.jpg";
import forest from "../../assets/img/forest_2.gif";

/****************************************

    Author: Lucas Mitori Oliveira Okumura
    contact: lucas.mitori@hotmail.com
    cel: +55 (11) 9-7749-2121
    Name: Portfolio Styles
    Description: Using styled-components to improve main Page.
    ~ *   The Page Styles   * ~

            Version: 1.0

****************************************/

const Float1 = keyframes`

  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-20px);
  }
  100% {
    transform: translatey(0px);
}`;

const Float2 = keyframes`
  0% {
    line-height: 30px;
    transform: translatey(0px);
  }
  55% {
    transform: translatey(-20px);
  }
  60% {
    line-height: 10px;
  }
  100% {
    line-height: 30px;
    transform: translatey(0px);
}`;

export const InitialParallax = styled.main`
  position: relative;
  opacity: 0.7;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  padding-top: 100px;
  justify-content: flex-start;
  align-items: center;
  background-image: url(${parallaxImg01});
  background-repeat: no-repeat;
  background-position: 30% 75%;
  background-size: cover;
  background-attachment: fixed;

  & > h1 {
    font-size: var(--font-subtitle-32);
    color: white;
    background-color: var(--color-black-1);
    padding: 18px;
    font-size: 25px;
    letter-spacing: 5px;
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
    padding-top: 200px;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;

/*------------------------- Skip line -------------------------*/

export const NavBarMenuBtn = styled.button`
  width: 70px;
  height: 50px;
  position: fixed;
  top: 10%;
  left: 80%;
  background-color: var(--color-grey-2);
  border-radius: var(--radius-8);
  z-index: 1001;
  cursor: pointer;

  & > svg {
    transform: scale(1.5);
  }

  @media screen and (min-width: 370px) {
    width: 60px;
    left: 82%;
  }
  @media screen and (min-width: 480px) {
    display: block;
  }
  @media screen and (min-width: 1024px) {
    & {
      display: none;
    }
  }
`;

/*------------------------- Skip line -------------------------*/

export const FirstParallax = styled.div`
  position: relative;
  opacity: 0.7;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-image: url(${parallaxImg02});
  background-repeat: no-repeat;
  background-position: 50% 75%;
  background-size: cover;
  background-attachment: fixed;

  & > div {
    position: absolute;
    left: 0%;
    top: 45%;
    width: 100%;
    text-align: center;
  }

  & > div > span {
    color: #fff;
    background-color: #111;
    padding: 18px;
    font-size: 25px;
    letter-spacing: 5px;
    text-transform: uppercase;
  }
`;

/*------------------------- Skip line -------------------------*/

export const SecondParallax = styled.div`
  position: relative;
  opacity: 0.7;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-image: url(${parallaxImg03});
  background-repeat: no-repeat;
  background-position: 45% 75%;
  background-size: cover;
  z-index: -1;
  background-attachment: fixed;

  & > div {
    position: absolute;
    left: 0%;
    top: 45%;
    width: 100%;
    text-align: center;
  }

  & > div > span {
    color: #fff;
    background-color: #111;
    padding: 18px;
    font-size: 25px;
    letter-spacing: 5px;
    text-transform: uppercase;
  }
`;

/*------------------------- Skip line -------------------------*/

export const ThirdParallax = styled.div`
  position: relative;
  opacity: 0.7;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-image: url(${parallaxImg04});
  background-repeat: no-repeat;
  background-position: 30% 75%;
  background-size: cover;
  z-index: -1;
  background-attachment: fixed;

  & > div {
    position: absolute;
    left: 0%;
    top: 45%;
    width: 100%;
    text-align: center;
  }

  & > div > span {
    color: var(--color-white-mode);
    background-color: #111;
    padding: 18px;
    font-size: 25px;
    letter-spacing: 5px;
    text-transform: uppercase;
  }
`;

/*------------------------- Skip line -------------------------*/

export const FourthParallax = styled.div`
  position: relative;
  opacity: 0.7;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-image: url(${parallaxImg05});
  background-repeat: no-repeat;
  background-position: 30% 75%;
  background-size: cover;
  z-index: -1;
  background-attachment: fixed;

  & > div {
    position: absolute;
    left: 0%;
    top: 45%;
    width: 100%;
    text-align: center;
  }

  & > div > span {
    color: var(--color-white-mode);
    background-color: #111;
    padding: 18px;
    font-size: 25px;
    letter-spacing: 5px;
    text-transform: uppercase;
  }
`;

/*------------------------- Skip line -------------------------*/

export const TypingEffect = styled.div`
  height: 80px;
  width: 90%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  background-color: var(--blur-effect-02);
  border: 1px solid var(--color-primary);
  border-radius: var(--radius-8);

  h2 {
    font-size: var(--font-subtitle-24);
    color: var(--color-grey-0);
  }

  b {
    text-decoration: underline;
    text-decoration-color: var(--color-feedback-info);
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
    width: 60%;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;

/*------------------------- Skip line -------------------------*/

export const TotoroSpace = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 30vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: flex-end;
  background-image: url(${forest});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border: 1px solid var(--color-black-1);
  border-radius: var(--radius-8);

  @media screen and (min-width: 370px) {
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 500px) {
    width: 450px;
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

export const Totoro = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: flex-end;

  @keyframes moveLeft {
    from {
      transform: translateX(0%);
    }

    to {
      transform: translateX(-20%);
    }
  }
  @keyframes moveRight {
    from {
      transform: translateX(-20%);
    }

    to {
      transform: translateX(0%);
    }
  }

  & > div {
    width: 100%;
    height: 100%;
    animation: moveLeft 5s ease-in-out infinite alternate,
      2s moveRight 5s ease-in-out infinite alternate;
  }

  & > div > img {
    transform: scale(0.6);
  }

  & > p {
    width: 180px;
    transform: translatey(0px);
    animation: ${Float1} 5s ease-in-out infinite;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
    font-size: var(--font-text-16);
    color: var(--color-bubbles-brown);
    background-color: var(--color-bubbles-beige);
    padding: 20px 0px;
    border-radius: 11px;
    position: relative;
    box-shadow: 15px 15px var(--color-bubbles-blue);
    font-family: var(--font-primary), cursive;
    animation: moveLeft 5s ease-in-out infinite alternate,
      2s moveRight 5s ease-in-out infinite alternate;
  }

  & > p::after {
    transform: translatey(0px);
    animation: ${Float2} 5s ease-in-out infinite;
    content: ".";
    font-weight: bold;
    -webkit-text-fill-color: var(--color-bubbles-beige);
    text-shadow: 22px 22px var(--color-bubbles-blue);
    text-align: left;
    font-size: 55px;
    width: 55px;
    height: 11px;
    line-height: 20px;
    border-radius: 11px;
    background-color: var(--color-bubbles-beige);
    position: absolute;
    display: block;
    bottom: -30px;
    left: 0;
    box-shadow: 22px 22px var(--color-bubbles-blue);
  }

  @media screen and (min-width: 370px) {
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 510px) {
    @keyframes moveLeft {
      from {
        transform: translateX(0%);
      }

      to {
        transform: translateX(10%);
      }
    }
    @keyframes moveRight {
      from {
        transform: translateX(10%);
      }

      to {
        transform: translateX(0%);
      }
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
