import { IconContext } from "react-icons";
import {
  ContentDiv,
  FooterClock,
  FooterComment,
  LinkSpace,
  NoticeBoard,
  NoticeCard,
  NoticeCardBody,
  NoticeCardCategory,
  NoticeCardDate,
  NoticeCardDay,
  NoticeCardFooter,
  NoticeCardHeader,
  NoticeCardMonth,
  ShowcaseProjects,
  UlProjectCards,
} from "./styles";
import { FaGithub } from "react-icons/fa";
import { RxTrackNext } from "react-icons/rx";
import { useTranslation } from "react-i18next";
import { BsClockHistory } from "react-icons/bs";
import { AiOutlineComment } from "react-icons/ai";
import banner01 from "../../assets/img/background/github.png";
import banner02 from "../../assets/img/background/github.png";
import banner03 from "../../assets/img/background/github.png";
import banner04 from "../../assets/img/background/github.png";

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

        <NoticeBoard>
          <NoticeCard>
            <NoticeCardHeader className="headerS">
              <a href="index.html">
                <img src={banner01} alt="blabla" className="imageS" />
              </a>
            </NoticeCardHeader>
            <NoticeCardDate>
              <NoticeCardDay>11</NoticeCardDay>
              <br />
              <NoticeCardMonth>Jan</NoticeCardMonth>
            </NoticeCardDate>
            <NoticeCardBody className="cardBodyS">
              <NoticeCardCategory>
                <a href="index.html">pet</a>
              </NoticeCardCategory>
              <h2>
                <a href="index.html">Comming Soon！</a>
              </h2>
              <h3>In construction！</h3>
              <p className="cardPS">
                5. Pour the mixture into a non-stick container and then freeze
                overnight. Take treating your dog a step further by turning it
                into an ice cream sundae party!
              </p>
            </NoticeCardBody>
            <NoticeCardFooter>
              <FooterClock>
                <IconContext.Provider
                  value={{
                    color: "var(--color-white-mode)",
                    size: "1.5em",
                  }}
                >
                  <BsClockHistory />
                </IconContext.Provider>
                <span>10 mins ago</span>
              </FooterClock>
              <FooterComment>
                <IconContext.Provider
                  value={{
                    color: "var(--color-white-mode)",
                    size: "1.5em",
                  }}
                >
                  <AiOutlineComment />
                </IconContext.Provider>
                <span>10 mins ago</span>
              </FooterComment>
            </NoticeCardFooter>
          </NoticeCard>
          <NoticeCard>
            <NoticeCardHeader className="headerS">
              <a href="index.html">
                <img src={banner02} alt="blabla" className="imageS" />
              </a>
            </NoticeCardHeader>
            <NoticeCardDate>
              <NoticeCardDay>11</NoticeCardDay>
              <br />
              <NoticeCardMonth>Jan</NoticeCardMonth>
            </NoticeCardDate>
            <NoticeCardBody className="cardBodyS">
              <NoticeCardCategory>
                <a href="index.html">pet</a>
              </NoticeCardCategory>
              <h2>
                <a href="index.html">Comming soon！</a>
              </h2>
              <h3>Inconstruction！</h3>
              <p className="cardPS">
                5. Pour the mixture into a non-stick container and then freeze
                overnight. Take treating your dog a step further by turning it
                into an ice cream sundae party!
              </p>
            </NoticeCardBody>
            <NoticeCardFooter>
              <FooterClock>
                <IconContext.Provider
                  value={{
                    color: "var(--color-white-mode)",
                    size: "1.5em",
                  }}
                >
                  <BsClockHistory />
                </IconContext.Provider>
                <span>10 mins ago</span>
              </FooterClock>
              <FooterComment>
                <IconContext.Provider
                  value={{
                    color: "var(--color-white-mode)",
                    size: "1.5em",
                  }}
                >
                  <AiOutlineComment />
                </IconContext.Provider>
                <span>10 mins ago</span>
              </FooterComment>
            </NoticeCardFooter>
          </NoticeCard>
          <NoticeCard>
            <NoticeCardHeader className="headerS">
              <a href="index.html">
                <img src={banner03} alt="blabla" className="imageS" />
              </a>
            </NoticeCardHeader>
            <NoticeCardDate>
              <NoticeCardDay>11</NoticeCardDay>
              <br />
              <NoticeCardMonth>Jan</NoticeCardMonth>
            </NoticeCardDate>
            <NoticeCardBody className="cardBodyS">
              <NoticeCardCategory>
                <a href="index.html">pet</a>
              </NoticeCardCategory>
              <h2>
                <a href="index.html">Comming soon！</a>
              </h2>
              <h3>In construction！</h3>
              <p className="cardPS">
                5. Pour the mixture into a non-stick container and then freeze
                overnight. Take treating your dog a step further by turning it
                into an ice cream sundae party!
              </p>
            </NoticeCardBody>
            <NoticeCardFooter>
              <FooterClock>
                <IconContext.Provider
                  value={{
                    color: "var(--color-white-mode)",
                    size: "1.5em",
                  }}
                >
                  <BsClockHistory />
                </IconContext.Provider>
                <span>10 mins ago</span>
              </FooterClock>
              <FooterComment>
                <IconContext.Provider
                  value={{
                    color: "var(--color-white-mode)",
                    size: "1.5em",
                  }}
                >
                  <AiOutlineComment />
                </IconContext.Provider>
                <span>10 mins ago</span>
              </FooterComment>
            </NoticeCardFooter>
          </NoticeCard>
          <NoticeCard>
            <NoticeCardHeader className="headerS">
              <a href="index.html">
                <img src={banner04} alt="blabla" className="imageS" />
              </a>
            </NoticeCardHeader>
            <NoticeCardDate>
              <NoticeCardDay>11</NoticeCardDay>
              <br />
              <NoticeCardMonth>Jan</NoticeCardMonth>
            </NoticeCardDate>
            <NoticeCardBody className="cardBodyS">
              <NoticeCardCategory>
                <a href="index.html">pet</a>
              </NoticeCardCategory>
              <h2>
                <a href="index.html">Comming soon！</a>
              </h2>
              <h3>In construction！</h3>
              <p className="cardPS">
                5. Pour the mixture into a non-stick container and then freeze
                overnight. Take treating your dog a step further by turning it
                into an ice cream sundae party!
              </p>
            </NoticeCardBody>
            <NoticeCardFooter>
              <FooterClock>
                <IconContext.Provider
                  value={{
                    color: "var(--color-white-mode)",
                    size: "1.5em",
                  }}
                >
                  <BsClockHistory />
                </IconContext.Provider>
                <span>10 mins ago</span>
              </FooterClock>
              <FooterComment>
                <IconContext.Provider
                  value={{
                    color: "var(--color-white-mode)",
                    size: "1.5em",
                  }}
                >
                  <AiOutlineComment />
                </IconContext.Provider>
                <span>10 mins ago</span>
              </FooterComment>
            </NoticeCardFooter>
          </NoticeCard>
        </NoticeBoard>
      </ShowcaseProjects>
    </>
  );
};

export default ProjectSpace;
