import { IconContext } from "react-icons";
import {
  AboutMeSection,
  FirstSection,
  MainInformation,
  MainPhoto,
  PersonalInformation,
  PikachuSpace,
} from "./styles";
import "../../utils/i18n";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MdDoubleArrow } from "react-icons/md";
import Pikachu from "../../assets/img/pikachu_01.gif";

const AboutMeSpace = ({ show, setShow }) => {
  const [animationValueContact, setAnimationValueContact] = useState();

  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting === true) {
          setAnimationValueContact(entry.isIntersecting);
        } else {
          setAnimationValueContact(entry.isIntersecting);
        }
      });
    });

    observer.observe(document.getElementById("first"));
  }, []);

  return (
    <>
      <AboutMeSection id="section-about" show={show}>
        <FirstSection id="first" animationValueContact={animationValueContact}>
          <PersonalInformation
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            // initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 3, repeat: 2 }}
          >
            <MainPhoto />

            <MainInformation>
              <h2>{t("Full Stack Developer")}</h2>
              <p>{t("Below there are more personal information about me.")}</p>
              <ul>
                <li>
                  <IconContext.Provider
                    value={{
                      color: "var(--color-grey-0)",
                      size: "1em",
                    }}
                  >
                    <MdDoubleArrow />
                  </IconContext.Provider>
                  <span>{t("Birthday")}:</span> {t("01 / 18 / 1995")}
                </li>
                <li>
                  <IconContext.Provider
                    value={{
                      color: "var(--color-grey-0)",
                      size: "1em",
                    }}
                  >
                    <MdDoubleArrow />
                  </IconContext.Provider>
                  <span>Website:</span> https://linktr.ee/lucasmitori
                </li>
                <li>
                  <IconContext.Provider
                    value={{
                      color: "var(--color-grey-0)",
                      size: "1em",
                    }}
                  >
                    <MdDoubleArrow />
                  </IconContext.Provider>
                  <span>{t("Phone")}:</span> +55 (11) 9-7749-2121
                </li>
                <li>
                  <IconContext.Provider
                    value={{
                      color: "var(--color-grey-0)",
                      size: "1em",
                    }}
                  >
                    <MdDoubleArrow />
                  </IconContext.Provider>
                  <span>{t("City")}:</span> São Paulo, SP - {t("BRAZIL")}
                </li>
                <li>
                  <IconContext.Provider
                    value={{
                      color: "var(--color-grey-0)",
                      size: "1em",
                    }}
                  >
                    <MdDoubleArrow />
                  </IconContext.Provider>
                  <span>{t("Age")}:</span> 27 years
                </li>
                <li>
                  <IconContext.Provider
                    value={{
                      color: "var(--color-grey-0)",
                      size: "1em",
                    }}
                  >
                    <MdDoubleArrow />
                  </IconContext.Provider>
                  <span>{t("Degree")}:</span> {t("Master")}
                </li>
                <li>
                  <IconContext.Provider
                    value={{
                      color: "var(--color-grey-0)",
                      size: "1em",
                    }}
                  >
                    <MdDoubleArrow />
                  </IconContext.Provider>
                  <span>Email</span>: lucas.mitori@hotmail.com
                </li>
                <li>
                  <IconContext.Provider
                    value={{
                      color: "var(--color-grey-0)",
                      size: "1em",
                    }}
                  >
                    <MdDoubleArrow />
                  </IconContext.Provider>
                  <span>Freelance:</span> {t("Available")}
                </li>
              </ul>
            </MainInformation>
          </PersonalInformation>
          <PikachuSpace>
            <img src={Pikachu} alt="Pikachu moving" />
          </PikachuSpace>
        </FirstSection>
      </AboutMeSection>
    </>
  );
};

export default AboutMeSpace;
