import { Link } from "react-router-dom";
import styled from "styled-components";

/****************************************

    Author: Lucas Mitori Oliveira Okumura
    contact: lucas.mitori@hotmail.com
    cel: +55 (11) 9-7749-2121
    Name: Personal Portifólio Design
    Description: Using styled-components to improve Header Space.
    ~ *   Header Styles   * ~

            Version: 1.0

****************************************/

export const Header = styled.header`
  width: 300px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--color-navigation);
  z-index: 1001;
  transform: ${({ show }) => (show ? "translateX(0)" : "translateX(-100%)")};
  transition: 0.7s ease-in-out;

  @media screen and (min-width: 370px) {
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    transform: none;
    width: 100%;
    height: 160px;
    position: fixed;
    top: 0;
    bottom: 0;
    background-color: var(--blur-effect-02);
    z-index: 1002;
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
  }
`;

/*------------------------- Skip line -------------------------*/

export const InformationSpace = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 30px;

  & > img {
    width: 30%;
    height: 10%;
    transform: scale(0.7);
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
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
  }
`;

export const ImageDiv = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  flex-flow: column nowrap;

  & > h2 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-24);
    font-weight: var(--font-weight-700);
    color: var(--color-white-mode);
    margin-top: 30px;
    width: 100%;
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
    width: 15%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    & > h2 {
      margin: 0;
      font-size: var(--font-subtitle-24);
      width: 100%;
      text-align: center;
    }
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
  }
`;

export const NavBar = styled.nav`
  width: 100%;
  height: 50%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: flex-start;

  @media screen and (min-width: 370px) {
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    width: 60%;
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
  }
`;

export const NavBarItems = styled.div`
  width: 90%;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  padding-left: 20px;
  align-items: center;

  & > a {
    padding-left: 20px;
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-20);
    color: var(--color-grey-0);
    text-decoration: none;
  }
  & > a:hover {
    color: var(--color-secondary);
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
    padding: 0;

    & > a {
      font-size: var(--font-subtitle-18);
    }
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
  }
`;

export const SpaceBtn = styled.div`
  width: 90%;
  height: 20%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 20px;

  & > h3 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-20);
    color: var(--color-grey-0);
    font-weight: var(--font-weight-400);
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
    display: flex;
    flex-flow: column nowrap;
    width: 20%;
    height: 100%;
    margin: 0;

    & > h3 {
      font-size: var(--font-subtitle-18);
    }
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
  }
`;

export const BrazilBtn = styled.button`
  width: 35%;
  height: 30px;
  border-radius: var(--radius-4);
  background-color: var(--color-quinternary);
  border: 2px solid
    ${(currentLanguage) =>
      currentLanguage.currentLanguage === "pt"
        ? "var(--button-color-red)"
        : "transparent"};
`;

export const USABtn = styled.button`
  width: 35%;
  height: 30px;
  border-radius: var(--radius-4);
  background-color: var(--color-quinternary);
  border: 2px solid
    ${(currentLanguage) =>
      currentLanguage.currentLanguage === "en"
        ? "var(--button-color-red)"
        : "transparent"};
`;

export const DashboardAdm = styled(Link)`
  width: 100%;
  height: 70%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  & > img {
    width: 100px;
    height: 100px;
    border-radius: var(--radius-half);
    border: 10px solid var(--color-grey-4);
  }
`;
