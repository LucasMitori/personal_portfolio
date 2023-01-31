import { IconContext } from "react-icons";
import { ShowcaseSpace, UlCircles, UlSkills } from "./styles";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiCss3 } from "react-icons/di";
import { DiPostgresql } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { FaGit } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import TitleSpace from "../TitleSpace/titleSpace";

const SkillSpace = ({ show }) => {
  return (
    <>
      <ShowcaseSpace id="section-skills" show={show}>
        <TitleSpace />
        <UlCircles>
          <UlSkills>
            <li>
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "6em",
                }}
              >
                <FaReact />
              </IconContext.Provider>
              <h2>React</h2>
            </li>
            <li>
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "6em",
                }}
              >
                <IoLogoJavascript />
              </IconContext.Provider>
              <h2>Javascript</h2>
            </li>
            <li>
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "6em",
                }}
              >
                <DiCss3 />
              </IconContext.Provider>
              <h2>CSS3</h2>
            </li>
            <li>
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "6em",
                }}
              >
                <AiFillHtml5 />
              </IconContext.Provider>
              <h2>HTML 5</h2>
            </li>
            <li>
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "6em",
                }}
              >
                <DiPostgresql />
              </IconContext.Provider>
              <h2>Postgres</h2>
            </li>
            <li>
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "6em",
                }}
              >
                <FaNodeJs />
              </IconContext.Provider>
              <h2>Node JS</h2>
            </li>
            <li>
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "6em",
                }}
              >
                <SiTypescript />
              </IconContext.Provider>
              <h2>Typescript</h2>
            </li>
            <li>
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "6em",
                }}
              >
                <FaPython />
              </IconContext.Provider>
              <h2>Python</h2>
            </li>
            <li>
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "6em",
                }}
              >
                <FaDocker />
              </IconContext.Provider>
              <h2>Docker</h2>
            </li>
            <li>
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "6em",
                }}
              >
                <DiDjango />
              </IconContext.Provider>
              <h2>Django</h2>
            </li>
            <li>
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "6em",
                }}
              >
                <FaGit />
              </IconContext.Provider>
              <h2>Git</h2>
            </li>
            <li>
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "6em",
                }}
              >
                <SiMongodb />
              </IconContext.Provider>
              <h2>MongoDB</h2>
            </li>
            <li>
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "6em",
                }}
              >
                <FaAws />
              </IconContext.Provider>
              <h2>AWS</h2>
            </li>
            <li>
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "6em",
                }}
              >
                <AiFillGithub />
              </IconContext.Provider>
              <h2>GitHub</h2>
            </li>
          </UlSkills>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </UlCircles>
      </ShowcaseSpace>
    </>
  );
};

export default SkillSpace;
