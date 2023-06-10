import styled from "styled-components";

/****************************************
    Author: Lucas Mitori dev front-end
    Name:  Design
    Description: Using styled-components to improve Header Space.
    ~ *   Header Styles   * ~
            Version: 1.0
****************************************/

export const BoxContainer = styled.div`
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

export const BoxItem = styled.div`
  position: relative;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  width: 250px;
  height: 300px;
  margin: 20px;
`;

export const FlipBox = styled.div`
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  perspective: 1000px;
  -webkit-perspective: 1000px;

  &:hover .flipFront {
    -ms-transform: rotateY(-180deg);
    -webkit-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
    -webkit-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }

  &:hover .flipBack {
    -ms-transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
    -webkit-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }

  & .inner {
    position: absolute;
    left: 0;
    width: 100%;
    padding: 30px;
    outline: 1px solid transparent;
    -webkit-perspective: inherit;
    perspective: inherit;
    z-index: 2;

    transform: translateY(-50%) translateZ(60px) scale(0.94);
    -webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);
    -ms-transform: translateY(-50%) translateZ(60px) scale(0.94);
    top: 50%;
  }

  .flipFront,
  .flipBack {
    background-size: cover;
    background-position: center;
    border-radius: 8px;
    min-height: 300px;
    -ms-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    -webkit-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    text-align: center;
  }
`;

export const FlipBoxFront = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  -ms-transform: rotateY(0deg);
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
  -webkit-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
  border: 1px solid var(--color-primary);
  box-shadow: 0px 0px 12px 10px var(--color-primary);
`;
export const FlipBoxBack = styled.div`
  background-image: url(${(props) => props.backgroundImage2});
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  -ms-transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
  -webkit-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
  border: 1px solid var(--color-primary);
  box-shadow: 0px 0px 12px 10px var(--color-primary);
`;

export const FlipInner = styled.div`
  height: 90%;
  width: 90%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;

  & > h3 {
    font-size: var(--font-subtitle-34);
    color: var(--color-white-mode);
    font-family: var(--font-primary-nunito);
    font-weight: var(--font-weight-700);
  }

  & > p {
    font-size: var(--font-subtitle-24);
    font-family: var(--font-secondary-inter);
    line-height: 1.5em;
    color: var(--color-white-mode);
  }

  & > img {
    margin-top: 25px;
  }
`;

export const FlipButton = styled.a`
  background-color: transparent;
  border: 2px solid #fff;
  border-radius: 2px;
  color: #fff;
  cursor: pointer;
  font-size: var(--font-title-18);
  font-family: var(--font-secondary-inter);
  font-weight: bold;
  margin-top: 25px;
  padding: 15px 20px;
  text-transform: uppercase;
  margin-top: 20px;
  text-decoration: none;
`;
/*------------------------- Skip line -------------------------*/
