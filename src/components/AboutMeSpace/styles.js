import { motion } from "framer-motion";
import PersonalImage from "../../assets/img/random.gif";
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

const Move = keyframes`
    0%{
    transform: translateY(0px);
    }
    25%{
        transform: translateY(88px);
    }
    50%{
        transform: translateY(0px);
    }
    75%{
        transform: translateY(88px);
    }
    100%{
        transform: translateY(0px);
    }
`;

const Grow = keyframes`
    0%, 50%, 75%, 100% {
    transform: scaleX(0.7) scaleY(0.7);
    }
    10%, 60% {
        transform: scaleX(1) scaleY(1);
    }
    35%, 85% {
        transform: scaleX(0.4) scaleY(0.4);
    }
`;

export const AboutMeSection = styled.section`
  width: 100%;
  height: 200vh;
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
    flex-flow: row nowrap;
    height: 100vh;
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
  background-color: var(--blur-effect-01);
  border-radius: var(--radius-8);
  border: 1px solid var(--color-primary);
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

export const SecondSection = styled.div`
  width: 90%;
  height: 100%;

  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;

  & > h2 {
    color: var(--color-white-mode);
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-32);
    font-weight: var(--font-weight-700);
    text-align: center;
  }

  .mySwiper {
    width: 90%;
    height: 40vh;
    background-color: var(--color-primary);
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
    width: 30%;
  }
  @media screen and (min-width: 1024px) {
    width: 60%;
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
  }
`;

export const SwiperImgDiv = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  z-index: 1;

  & > img {
    width: 100%;
    height: 100%;
  }
`;

export const ValueImgSpace = styled.div`
  width: 100%;
  height: 30vh;
  display: grid;
  grid-auto-flow: column;
  place-content: center;
  gap: 40px;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1300px) {
    justify-content: space-evenly;
  }
  @media screen and (min-width: 1920px) {
  }
`;

export const XImage = styled.figure`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  width: 180px;
  height: 180px;

  & > img {
    width: 150px;
    height: 150px;
    --g: #0000, #000 0.5deg 90deg, #0000 91deg;
    --m: conic-gradient(from 45deg, var(--g)) 20px 0 no-repeat,
      conic-gradient(from 135deg, var(--g)) 0 20px no-repeat,
      conic-gradient(from 225deg, var(--g)) -20px 0 no-repeat,
      conic-gradient(from 315deg, var(--g)) 0 -20px no-repeat;
    -webkit-mask: var(--m);
    mask: var(--m);
    transition: 0.3s linear;
    filter: grayscale(0.5);
    cursor: pointer;
  }

  & > img:hover {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
    filter: grayscale(0);
  }

  & > figcaption {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-18);
    font-weight: var(--font-weight-700);
    color: var(--color-white-mode);
  }
`;

export const CircleImage = styled.figure`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  width: 180px;
  height: 180px;

  & > img {
    width: 150px;
    height: 150px;
    --m: radial-gradient(circle farthest-side at right, #000 99%, #0000) 0 100%/46%
        92% no-repeat,
      radial-gradient(circle farthest-side at left, #000 99%, #0000) 100% 0/46%
        92% no-repeat;
    -webkit-mask: var(--m);
    mask: var(--m);
    filter: grayscale(0.5);
    transition: 0.3s linear;
    cursor: pointer;
  }

  & > img:hover {
    -webkit-mask-position: 7.5% 50%, 92.5% 50%;
    mask-position: 7.5% 50%, 92.5% 50%;
    filter: grayscale(0);
  }

  & > figcaption {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-18);
    font-weight: var(--font-weight-700);
    color: var(--color-white-mode);
  }
`;

export const SquareImage = styled.figure`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  width: 180px;
  height: 180px;

  & > img {
    width: 150px;
    height: 150px;
    --_g: 10% /45% 45% no-repeat linear-gradient(#000 0 0);
    --m: left var(--_i, 0%) top var(--_g), bottom var(--_i, 0%) left var(--_g),
      top var(--_i, 0%) right var(--_g), right var(--_i, 0%) bottom var(--_g);
    -webkit-mask: var(--m);
    mask: var(--m);
    filter: grayscale();
    transition: 0.3s linear;
    cursor: pointer;
  }

  & > img:hover {
    --_i: 10%;
    filter: grayscale(0);
  }

  & > figcaption {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-18);
    font-weight: var(--font-weight-700);
    color: var(--color-white-mode);
  }
`;

export const Divider = styled.div`
  width: 50%;
  height: 98px;
  display: flex;
  position: relative;
`;

export const WaveDnaUp = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  perspective: 100px;

  & > div {
    position: relative;
    width: 16px;
    height: 16px;
    border-radius: 100%;
  }

  & > div::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-black-mode);
    border-radius: 50%;
    border: 1px solid black;
  }

  & > div::before {
    background-color: var(--color-primary);
  }

  & > div {
    animation: ${Move} 3s ease-in-out infinite reverse;
  }

  & > div::before {
    animation: ${Grow} 3s linear infinite reverse;
  }

  & > div:nth-child(10) {
    animation-delay: 0s;
  }
  & > div:nth-child(9) {
    animation-delay: -0.1s;
  }
  & > div:nth-child(8) {
    animation-delay: -0.2s;
  }
  & > div:nth-child(7) {
    animation-delay: -0.3s;
  }
  & > div:nth-child(6) {
    animation-delay: -0.4s;
  }
  & > div:nth-child(5) {
    animation-delay: -0.5s;
  }
  & > div:nth-child(4) {
    animation-delay: -0.6s;
  }
  & > div:nth-child(3) {
    animation-delay: -0.7s;
  }
  & > div:nth-child(2) {
    animation-delay: -0.8s;
  }
  & > div:nth-child(1) {
    animation-delay: -0.9s;
  }
`;

export const WaveDnaBot = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  perspective: 100px;

  & > div {
    position: relative;
    width: 16px;
    height: 16px;
    border-radius: 100%;
  }

  & > div::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-senary);
    border-radius: 50%;
    border: 1px solid black;
  }

  & > div {
    animation: ${Move} 3s ease-in-out infinite;
  }

  & > div::before {
    animation: ${Grow} 3s linear infinite;
  }

  & > div:nth-child(10) {
    animation-delay: 0.75s;
  }
  & > div:nth-child(9) {
    animation-delay: 0.65s;
  }
  & > div:nth-child(8) {
    animation-delay: 0.55s;
  }
  & > div:nth-child(7) {
    animation-delay: 0.45s;
  }
  & > div:nth-child(6) {
    animation-delay: 0.35s;
  }
  & > div:nth-child(5) {
    animation-delay: 0.25s;
  }
  & > div:nth-child(4) {
    animation-delay: 0.15s;
  }
  & > div:nth-child(3) {
    animation-delay: 0.05s;
  }
  & > div:nth-child(2) {
    animation-delay: -0.05s;
  }
  & > div:nth-child(1) {
    animation-delay: -0.15s;
  }
`;
