import styled from "styled-components";

/****************************************

    Author: Lucas Mitori Oliveira Okumura
    contact: lucas.mitori@hotmail.com
    cel: +55 (11) 9-7749-2121
    Name: Personal Portfolio Styles
    Description: Using styled-components to improve Skills Space.
    ~ *   Skills Styles   * ~

            Version: 1.0

****************************************/

export const ShowcaseSpace = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: var(--color-navigation);
  z-index: 1001;
  box-shadow: 0px 0px 14px 25px var(--color-senary);

  & > h1 {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-subtitle-32);
    font-weight: var(--font-weight-700);
    color: white;
    background-color: var(--color-black-1);
    padding: 18px;
    font-size: 25px;
    letter-spacing: 5px;
    text-transform: uppercase;
    margin: 30px 0px;
    border-radius: var(--radius-8);
    border: 2px solid var(--color-primary);
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
  @media screen and (max-width: 1920px) {
  }
`;

/*------------------------- Skip line -------------------------*/

export const UlSkills = styled.ul`
  width: 90%;
  height: 80vh;
  margin: 30px auto;
  overflow: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 0px;

  ::-webkit-scrollbar-track {
    border: 5px solid var(--color-white-mode);
    background-color: var(--color-scrollbar-1);
  }

  ::-webkit-scrollbar {
    width: 15px;
    background-color: var(--color-scrollbar-2);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--color-scrollbar-3);
    border-radius: 10px;
  }

  & > li {
    width: 130px;
    height: 150px;
    margin-bottom: 30px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1;
    outline: calc(130px / 2) solid var(--blur-effect-01);
    outline-offset: calc(130px / -2);
    cursor: pointer;
    transition: 0.3s;
    border-radius: var(--radius-8);
  }

  & > li:hover {
    outline: 8px solid var(--color-primary);
    outline-offset: 14px;
    border-radius: var(--radius-8);
  }

  & > li > h2 {
    margin-top: 10px;
    font-family: var(--font-primary-nunito);
    color: var(--color-white-mode);
    font-size: var(--font-text-16);
    font-weight: var(--font-weight-600);
    text-transform: uppercase;
  }

  @media screen and (min-width: 370px) {
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 900px) {
    justify-content: flex-start;
    height: 70vh;
    align-items: center;
    margin: 100px auto;

    & > li {
      margin-right: 30px;
      margin-bottom: 20px;
    }
  }
  @media screen and (min-width: 1024px) {
    margin: 150px auto;
    height: 65vh;
    & > li {
      margin-right: 20px;
      margin-bottom: 10px;
    }
  }
  @media screen and (min-width: 1200px) {
    padding: 30px;
  }
  @media screen and (min-width: 1920px) {
  }
`;

/*------------------------- Skip line -------------------------*/

export const UlCircles = styled.ul`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: var(--blur-effect-01);

  @keyframes animate {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      border-radius: 0;
    }

    100% {
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
      border-radius: 50%;
    }
  }

  & > li {
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 25s linear infinite;
    bottom: -150px;
  }

  & > li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
  }

  & > li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
  }

  & > li:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
  }

  & > li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
  }

  & > li:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
  }

  & > li:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
  }

  & > li:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
  }

  & > li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
  }

  & > li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
  }

  & > li:nth-child(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
  }
  & > li:nth-child(11) {
    left: 25%;
    width: 90px;
    height: 90px;
    animation-delay: 0s;
    animation-duration: 11s;
  }
  & > li:nth-child(12) {
    left: 30%;
    width: 30px;
    height: 30px;
    animation-delay: 0s;
    animation-duration: 11s;
  }
  & > li:nth-child(13) {
    left: 15%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
  }
  & > li:nth-child(14) {
    left: 50%;
    width: 180px;
    height: 180px;
    animation-delay: 0s;
    animation-duration: 11s;
  }
  & > li:nth-child(15) {
    left: 45%;
    width: 70px;
    height: 70px;
    animation-delay: 0s;
    animation-duration: 11s;
  }
  & > li:nth-child(16) {
    left: 35%;
    width: 30px;
    height: 30px;
    animation-delay: 0s;
    animation-duration: 11s;
  }
`;
