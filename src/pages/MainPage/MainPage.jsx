import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import "../../utils/i18n";
import { useTranslation } from "react-i18next";
import {
  FirstParallax,
  FourthParallax,
  InitialParallax,
  NavBarMenuBtn,
  SecondParallax,
  ThirdParallax,
  Totoro,
  TotoroSpace,
  TypingEffect,
} from "./styles";
import TypeIt from "typeit-react";
import totoroRight from "../../assets/img/totoro_right.gif";
import SkillSpace from "../../components/SkillSpace/skillSpace";
import FooterSpace from "../../components/FooterSpace/footerSpace";
import ProjectSpace from "../../components/ProjectSpace/ProjectSpace";
import ContactSpace from "../../components/ContactSpace/ContactSpace";
import AboutMeSpace from "../../components/AboutMeSpace/AboutMeSpace";
import { useContext } from "react";
import { GeneralContext } from "../../contexts/GeneralContext";
import HeaderSpace from "../../components/HeaderSpace/HeaderSpace";

const MainPage = () => {
  const { show, setShow } = useContext(GeneralContext);

  function openMenu() {
    setShow((current) => !current);
  }

  const { t } = useTranslation();
  return (
    <>
      <HeaderSpace show={show} />
      <NavBarMenuBtn onClick={() => openMenu()}>
        <IconContext.Provider
          value={{
            color: "var(--color-grey-0)",
          }}
        >
          <GiHamburgerMenu />
        </IconContext.Provider>
      </NavBarMenuBtn>
      <InitialParallax id="section-home" show={show}>
        <h1>{t("Portifólio")}</h1>
        <TypingEffect>
          <h2>
            {t("I'm a")}{" "}
            <TypeIt
              options={{
                loop: true,
                speed: 200,
              }}
              getBeforeInit={(instance) => {
                instance
                  .type("Developer")
                  .pause(700)
                  .delete(9)
                  .type("Student")
                  .pause(700)
                  .delete(7)
                  .type("Freelancer")
                  .pause(700)
                  .delete(10)
                  .type("Programmer")
                  .pause(500)
                  .delete(11);

                return instance;
              }}
            />
          </h2>
        </TypingEffect>

        <TotoroSpace>
          <Totoro>
            <p>
              <TypeIt
                options={{
                  loop: true,
                  speed: 200,
                }}
                getBeforeInit={(instance) => {
                  instance
                    .type("Hello World!")
                    .pause(700)
                    .delete(12)
                    .type("Welcome")
                    .pause(700)
                    .delete(7)
                    .type("Enjoy!")
                    .pause(700)
                    .delete(6)
                    .type("Contact me")
                    .pause(500)
                    .delete(10);

                  return instance;
                }}
              />
            </p>
            <div>
              <img src={totoroRight} alt="Totoro" />
            </div>
          </Totoro>
        </TotoroSpace>
      </InitialParallax>

      <SkillSpace />

      <FirstParallax>
        <div>
          <span>{t("Projects")}</span>
        </div>
      </FirstParallax>

      <ProjectSpace />

      <SecondParallax>
        <div>
          <span>{t("Contact me")}</span>
        </div>
      </SecondParallax>

      <ContactSpace />

      <ThirdParallax>
        <div>
          <span>{t("About me")}</span>
        </div>
      </ThirdParallax>

      <AboutMeSpace />

      <FourthParallax>
        <div>
          <span>{t("The End")}</span>
        </div>
      </FourthParallax>

      <FooterSpace />
    </>
  );
};

export default MainPage;
