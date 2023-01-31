import styled from "styled-components";

/****************************************

    Author: Lucas Mitori Oliveira Okumura
    contact: lucas.mitori@hotmail.com
    cel: +55 (11) 9-7749-2121
    Name: Personal Portfolio Styles
    Description: Using styled-components to improve Projects Space.
    ~ *   Projects Styles   * ~

            Version: 1.0

****************************************/

export const ShowcaseProjects = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: var(--color-navigation);
  z-index: -1;
  box-shadow: 0px 0px 14px 25px var(--color-senary);

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

export const ContentDiv = styled.div`
  width: 90%;
  height: 90%;
  margin: 0 auto;
`;
export const UlProjectCards = styled.ul`
  width: 100%;
  height: 100%;
  overflow: auto;

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
    width: 90%;
    height: 18em;
    background-color: var(--blur-effect-02);
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 30px;
    border: 1px solid var(--color-primary);
    border-radius: var(--radius-8);
    margin-bottom: 30px;
  }

  & > li > h2 {
    font-family: var(--font-tertiary-roboto);
    font-size: var(--font-subtitle-20);
    font-weight: var(--font-weight-700);
    color: var(--color-white-mode);
    margin-bottom: 20px;
  }

  & > li > h3 {
    font-family: var(--font-tertiary-roboto);
    font-size: var(--font-text-16);
    font-weight: var(--font-weight-300);
    color: var(--color-grey-5);
    margin-bottom: 20px;
  }

  & > li > h3 > span {
    background-color: var(--color-grey-2);
    font-family: var(--font-tertiary-roboto);
    font-size: var(--font-text-14);
    font-weight: var(--font-weight-300);
    color: var(--color-white-mode);
    margin-left: 20px;
    padding: 8px;
    border: 1px solid var(--color-senary);
    border-radius: var(--radius-4);
  }

  @media screen and (min-width: 370px) {
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    & > li {
      width: 380px;
      margin-right: 30px;
    }
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    & > li {
      width: 420px;
    }
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
  }
`;

export const LinkSpace = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  & > a {
    margin-left: 20px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }

  & > a > span {
    margin-left: 20px;
    font-family: var(--font-tertiary-roboto);
    font-size: var(--font-text-16);
    font-weight: var(--font-weight-300);
    color: var(--color-white-mode);
  }
`;

export const ProjectImgSpace = styled.div`
  width: 100%;
  height: 50%;
  border: 1px solid black;
  background-color: red;
`;
