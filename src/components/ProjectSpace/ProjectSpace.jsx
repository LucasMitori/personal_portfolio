import { IconContext } from "react-icons";
import {
  ContentDiv,
  LinkSpace,
  ShowcaseProjects,
  UlProjectCards,
} from "./styles";
import { FaGithub } from "react-icons/fa";
import { RxTrackNext } from "react-icons/rx";
import { useTranslation } from "react-i18next";

const ProjectSpace = () => {
  const { t } = useTranslation();

  return (
    <>
      <ShowcaseProjects id="section-projects">
        <ContentDiv>
          <UlProjectCards>
            <li>
              <h2>{t("Portfolio - First model")}</h2>
              <h3>
                {t("Primary Language")}:<span>Javascript</span>
              </h3>
              <h3>
                {t("Main design")}:<span>Front-end</span>
              </h3>
              <LinkSpace>
                <a href="https://github.com/LucasMitori/Portfolio">
                  <IconContext.Provider
                    value={{
                      color: "var(--color-grey-0)",
                      size: "1.5em",
                    }}
                  >
                    <FaGithub />
                  </IconContext.Provider>
                  <span>Github</span>
                </a>
                <a href="https://portifolio-lucas-mitori-lucasmitori.vercel.app/">
                  <IconContext.Provider
                    value={{
                      color: "var(--color-grey-0)",
                      size: "1.5em",
                    }}
                  >
                    <RxTrackNext />
                  </IconContext.Provider>
                  <span>See Demo</span>
                </a>
              </LinkSpace>
            </li>

            <li>
              <h2>Api for my Portfolio</h2>
              <h3>
                Primary Tech:<span>Node JS</span>
              </h3>
              <h3>
                {t("Main design")}:<span>Back-end</span>
              </h3>
              <LinkSpace>
                <a href="https://github.com/LucasMitori/api-potfolio">
                  <IconContext.Provider
                    value={{
                      color: "var(--color-grey-0)",
                      size: "1.5em",
                    }}
                  >
                    <FaGithub />
                  </IconContext.Provider>
                  <span>Github</span>
                </a>
              </LinkSpace>
            </li>

            <li>
              <h2>LoopStudios - Model</h2>
              <h3>
                {t("Primary Language")}:<span>Javascript</span>
              </h3>
              <h3>
                {t("Main design")}:<span>Front-end</span>
              </h3>
              <LinkSpace>
                <a href="https://github.com/LucasMitori/loopstudios-portfolio">
                  <IconContext.Provider
                    value={{
                      color: "var(--color-grey-0)",
                      size: "1.5em",
                    }}
                  >
                    <FaGithub />
                  </IconContext.Provider>
                  <span>Github</span>
                </a>
                <a href="https://loopstudios-portfolio.vercel.app//">
                  <IconContext.Provider
                    value={{
                      color: "var(--color-grey-0)",
                      size: "1.5em",
                    }}
                  >
                    <RxTrackNext />
                  </IconContext.Provider>
                  <span>See Demo</span>
                </a>
              </LinkSpace>
            </li>

            <li>
              <h2>Rick and Morty Database</h2>
              <h3>
                {t("Primary Language")}:<span>Javascript</span>
              </h3>
              <h3>
                {t("Main design")}:<span>Front-end</span>
              </h3>
              <LinkSpace>
                <a href="https://github.com/LucasMitori/rick-and-morty-db">
                  <IconContext.Provider
                    value={{
                      color: "var(--color-grey-0)",
                      size: "1.5em",
                    }}
                  >
                    <FaGithub />
                  </IconContext.Provider>
                  <span>Github</span>
                </a>
                <a href="https://rick-and-morty-db-lucasmitori.vercel.app/welcome">
                  <IconContext.Provider
                    value={{
                      color: "var(--color-grey-0)",
                      size: "1.5em",
                    }}
                  >
                    <RxTrackNext />
                  </IconContext.Provider>
                  <span>See Demo</span>
                </a>
              </LinkSpace>
            </li>

            <li>
              <h2>Pro Support - Full stack project</h2>
              <h3>
                {t("Primary Language")}:<span>Typescript</span>
              </h3>
              <h3>
                {t("Main design")}:<span>Full Stack</span>
              </h3>
              <LinkSpace>
                <a href="https://github.com/ProSupportTechnology/ProSupport">
                  <IconContext.Provider
                    value={{
                      color: "var(--color-grey-0)",
                      size: "1.5em",
                    }}
                  >
                    <FaGithub />
                  </IconContext.Provider>
                  <span>Github</span>
                </a>
                <a href="https://pro-support.vercel.app/">
                  <IconContext.Provider
                    value={{
                      color: "var(--color-grey-0)",
                      size: "1.5em",
                    }}
                  >
                    <RxTrackNext />
                  </IconContext.Provider>
                  <span>See Demo</span>
                </a>
              </LinkSpace>
            </li>
          </UlProjectCards>
        </ContentDiv>
      </ShowcaseProjects>
    </>
  );
};

export default ProjectSpace;
