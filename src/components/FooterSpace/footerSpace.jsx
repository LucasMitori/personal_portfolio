import { IconContext } from "react-icons";
import {
  Footer,
  MediaInformationSpace,
  MediasSpace,
  SquaresDiv1,
  SquaresDiv2,
  SquaresDiv3,
  StitchSpace,
} from "./styles";
import {
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiOutlineLinkedin,
} from "react-icons/ai";
import Stitch from "../../assets/img/stitch_02.gif";
import { useTranslation } from "react-i18next";

const FooterSpace = () => {
  const { t } = useTranslation();

  return (
    <>
      <Footer>
        <SquaresDiv1 />
        <SquaresDiv2 />
        <SquaresDiv3 />

        <MediaInformationSpace>
          <h1>{t("Thank you!")}</h1>
          <p>{t("Let's create solutions and solve problems together.")}</p>

          <MediasSpace>
            <li>
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "3em",
                }}
              >
                <AiOutlineWhatsApp />
              </IconContext.Provider>
              <a href="https://api.whatsapp.com/send?phone=5511977492121">
                {t("Talk with me")}
              </a>
            </li>
            <li>
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "3em",
                }}
              >
                <AiOutlineMail />
              </IconContext.Provider>
              <a href="mailto:lucas.mitori@live.com">{t("Send an e-mail")}</a>
            </li>
            <li>
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "3em",
                }}
              >
                <AiOutlineLinkedin />
              </IconContext.Provider>
              <a href="https://www.linkedin.com/in/lucas-okumura-2446a478/">
                {t("Go to Linkedin")}
              </a>
            </li>
          </MediasSpace>

          <StitchSpace>
            <img src={Stitch} alt="stitch gif" />
          </StitchSpace>
        </MediaInformationSpace>
      </Footer>
    </>
  );
};

export default FooterSpace;
