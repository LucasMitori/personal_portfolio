import styled, { keyframes } from "styled-components";

/****************************************

    Author: Lucas Mitori Oliveira Okumura
    contact: lucas.mitori@hotmail.com
    cel: +55 (11) 9-7749-2121
    Name: Portfolio Styles
    Description: Using styled-components to improve main Page.
    ~ *   The Page Styles   * ~

            Version: 1.0

****************************************/

const Wave = keyframes`

    0%, 100% {
        clip-path: polygon(
        0% 45%,
        16% 44%,
        33% 50%,
        54% 60%,
        70% 61%,
        84% 59%,
        100% 52%,
        100% 100%,
        0% 100%
        );
    }

    50% {
        clip-path: polygon(
        0% 60%,
        15% 65%,
        34% 66%,
        51% 62%,
        67% 50%,
        84% 45%,
        100% 46%,
        100% 100%,
        0% 100%
        );
    }
`;

const Gradient = keyframes`

    0% {
        background-position: 0% 0%;
    }
    50% {
        background-position: 100% 100%;
    }
    100% {
        background-position: 0% 0%;
    }

`;

const Waves = keyframes`
    2% {
        transform: translateX(1);
    }

    25% {
        transform: translateX(-25%);
    }

    50% {
        transform: translateX(-50%);
    }

    75% {
        transform: translateX(-25%);
    }

    100% {
        transform: translateX(1);
    }
`;

const Background = keyframes`
    0% {
        transform: rotate(0deg);
    }
`;

const theme = keyframes`
     0% {
        background: var(--color-bubbles-green);
    }
    
    16% {
        background: var(--color-bubbles-beige);
    }
    
    33% {
        background: var(--color-bubbles-brown);
    }
    
    50% {
        background: var(--color-grey-4);
    }
    
    66% {
        background: var(--color-grey-2);
    }    
    
    83% {
        background: var(--color-bubbles-brown);
    }

    100% {
        background: var(--color-bubbles-brown);
    }
`;

export const SectionTitle = styled.section`
  width: 100%;
  height: 10vh;

  /* animation: ${theme} 21s linear infinite;

  &:after,
  &:before {
    content: "";
    display: block;
    position: fixed;
    z-index: -1;
    top: 0;
    width: 10vw; // IE/Edge
    height: 10vh; // fallback
    width: 10vmax;
    height: 10vmax;
    background: rgba(0, 0, 0, 0.05);
    animation: ${Background} 90s linear infinite;
  }

  &:after {
    left: 15vw;
  }

  &:before {
    right: 15vw;
    animation-delay: -30s;
    animation-direction: reverse;
  } */

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

export const SkillsTitle = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid var(--color-secondary);
  & > h2 {
    color: var(--color-white-mode);
    font-size: 4em;
    font-family: var(--font-primary-nunito);
    position: absolute;
  }

  & > h2:nth-child(1) {
    color: transparent;
    -webkit-text-stroke: 2px var(--color-bubbles-pink);
  }

  & > h2:nth-child(2) {
    color: var(--color-royalblue);
    animation: ${Wave} 4s ease-in-out infinite;
  }
`;

/*------------------------- Skip line -------------------------*/

export const WavesSection = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  overflow: hidden;
  background: linear-gradient(
    315deg,
    rgba(28, 28, 28, 1) 3%,
    rgba(59, 59, 59, 1) 38%,
    rgba(255, 130, 40, 1) 68%,
    rgba(255, 182, 6, 1) 98%
  );
  animation: ${Gradient} 15s ease infinite;
  background-size: 400% 400%;
  background-attachment: fixed;
`;

export const WavesDiv = styled.div`
  background: rgb(255 255 255 / 25%);
  border-radius: 1000% 1000% 0 0;
  position: fixed;
  width: 200%;
  height: 12em;
  animation: wave 10s -3s linear infinite;
  transform: translate3d(0, 0, 0);
  opacity: 0.8;
  bottom: 0;
  left: 0;
  z-index: -1;

  &:nth-of-type(2) {
    bottom: -1.25em;
    animation: ${Waves} 18s linear reverse infinite;
    opacity: 0.8;
  }

  &:nth-of-type(3) {
    bottom: -2.5em;
    animation: ${Waves} 20s -1s reverse infinite;
    opacity: 0.9;
  }
`;

/*------------------------- Skip line -------------------------*/
