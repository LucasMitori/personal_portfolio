import {
  BrazilBtn,
  DashboardAdm,
  Header,
  ImageDiv,
  InformationSpace,
  NavBar,
  NavBarItems,
  SpaceBtn,
  USABtn,
} from "./styles";
import Lucas from "../../assets/personal/admin.png";
import { IconContext } from "react-icons";
import { TiHomeOutline } from "react-icons/ti";
import "../../utils/i18n";
import { useTranslation } from "react-i18next";
import { GiSkills } from "react-icons/gi";
import { IoIosPaper } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { GiBrazilFlag } from "react-icons/gi";
import { FaFlagUsa } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useContext } from "react";
import { GeneralContext } from "../../contexts/GeneralContext";

const HeaderSpace = ({ show }) => {
  const { currentLanguage, setCurrentLanguage } = useContext(GeneralContext);

  const { t, i18n } = useTranslation();

  const changeLanguage = (value) => {
    i18n
      .changeLanguage(value)
      .then(() => {
        setCurrentLanguage(value);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header show={show}>
        <InformationSpace>
          <ImageDiv>
            <DashboardAdm to={`/login`}>
              <img src={Lucas} alt="personal" />
            </DashboardAdm>
            <h2>Lucas Mitori</h2>
          </ImageDiv>

          <NavBar>
            <NavBarItems>
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "1.8em",
                }}
              >
                <TiHomeOutline />
              </IconContext.Provider>
              <AnchorLink offset={Infinity} href="#section-home">
                {t("Home")}
              </AnchorLink>
            </NavBarItems>

            <NavBarItems>
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "1.8em",
                }}
              >
                <GiSkills />
              </IconContext.Provider>
              <AnchorLink href="#section-skills">{t("Skills")}</AnchorLink>
            </NavBarItems>

            <NavBarItems>
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "1.5em",
                }}
              >
                <CgWebsite />
              </IconContext.Provider>
              <AnchorLink href="#section-projects">{t("Projects")}</AnchorLink>
            </NavBarItems>

            <NavBarItems>
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "1.5em",
                }}
              >
                <MdContactMail />
              </IconContext.Provider>
              <AnchorLink href="#section-contactme">{t("Contact")}</AnchorLink>
            </NavBarItems>

            <NavBarItems>
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "1.5em",
                }}
              >
                <IoIosPaper />
              </IconContext.Provider>
              <AnchorLink href="#section-about">{t("About me")}</AnchorLink>
            </NavBarItems>
          </NavBar>

          <SpaceBtn>
            <h3>{t("Change the language")}:</h3>
            <BrazilBtn
              onClick={() => changeLanguage("pt")}
              currentLanguage={currentLanguage}
            >
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "2em",
                }}
              >
                <GiBrazilFlag />
              </IconContext.Provider>
            </BrazilBtn>

            <USABtn
              onClick={() => changeLanguage("en")}
              currentLanguage={currentLanguage}
            >
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "1em",
                }}
              >
                <FaFlagUsa />
              </IconContext.Provider>
            </USABtn>
          </SpaceBtn>
        </InformationSpace>
      </Header>
    </>
  );
};

export default HeaderSpace;
