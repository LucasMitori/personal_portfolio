import { ShowcaseSpace, UlSkills } from "./styles";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiCss3 } from "react-icons/di";
import { DiPostgresql } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiNestjs } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { FaGit } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { TbBrandNextjs } from "react-icons/tb";
import { BsFillBootstrapFill } from "react-icons/bs";
import TitleSpace from "../TitleSpace/titleSpace";
import SpinningSquaresAnimation from "../Animations/SpinningSquares/SpinningSquares";
import CardFlip from "../Animations/CardFlip/CardFlip";
import techBGv1 from "../../assets/img/tech03.gif";
import techBGv2 from "../../assets/img/tech04.gif";

const SkillSpace = ({ show }) => {
  return (
    <>
      <ShowcaseSpace id="section-skills" show={show}>
        <TitleSpace />

        <SpinningSquaresAnimation />
        <UlSkills>
          <CardFlip
            treasure={{
              icon: FaReact,
              title: "React",
              description: "React JS",
              subtitle: "Tempo de experiência",
              time: "2022-09-01",
              link: "https://react.dev/",
              backgroundImage: techBGv1,
              backgroundImage2: techBGv2,
            }}
          />
          <CardFlip
            treasure={{
              icon: AiFillGithub,
              title: "Github",
              description: "Github",
              subtitle: "Tempo de experiência",
              time: "2022-01-01",
              link: "https://www.alura.com.br/artigos/o-que-e-git-github?gclid=CjwKCAjwm4ukBhAuEiwA0zQxk6CGU7zOcPr1AdtIuKb-TcGF5AthvMXdIbMUfnniiLoEeJkgy9jFiRoCtesQAvD_BwE",
              backgroundImage: techBGv1,
              backgroundImage2: techBGv2,
            }}
          />
          <CardFlip
            treasure={{
              icon: IoLogoJavascript,
              title: "Javascript",
              description: "Javascript",
              subtitle: "Tempo de experiência",
              time: "2022-01-01",
              link: "https://blog.betrybe.com/javascript/",
              backgroundImage: techBGv1,
              backgroundImage2: techBGv2,
            }}
          />
          <CardFlip
            treasure={{
              icon: DiCss3,
              title: "CSS",
              description: "CSS3",
              subtitle: "Tempo de experiência",
              time: "2022-01-01",
              link: "https://www.hostinger.com.br/tutoriais/o-que-e-css-guia-basico-de-css",
              backgroundImage: techBGv1,
              backgroundImage2: techBGv2,
            }}
          />
          <CardFlip
            treasure={{
              icon: DiPostgresql,
              title: "Postgres",
              description: "PostgreSQL",
              subtitle: "Tempo de experiência",
              time: "2022-11-01",
              link: "https://www.postgresql.org/",
              backgroundImage: techBGv1,
              backgroundImage2: techBGv2,
            }}
          />
          <CardFlip
            treasure={{
              icon: AiFillHtml5,
              title: "HTML",
              description: "HTML5",
              subtitle: "Tempo de experiência",
              time: "2022-01-01",
              link: "https://www.hostinger.com.br/tutoriais/o-que-e-html-conceitos-basicos",
              backgroundImage: techBGv1,
              backgroundImage2: techBGv2,
            }}
          />
          <CardFlip
            treasure={{
              icon: FaAws,
              title: "AWS",
              description: "AWS",
              subtitle: "Tempo de experiência",
              time: "2023-02-01",
              link: "https://aws.amazon.com/pt/what-is-aws/",
              backgroundImage: techBGv1,
              backgroundImage2: techBGv2,
            }}
          />
          <CardFlip
            treasure={{
              icon: SiMongodb,
              title: "MongoDB",
              description: "MongoDB",
              subtitle: "Tempo de experiência",
              time: "2023-01-01",
              link: "https://www.mongodb.com/",
              backgroundImage: techBGv1,
              backgroundImage2: techBGv2,
            }}
          />
          <CardFlip
            treasure={{
              icon: FaGit,
              title: "Git",
              description: "Git",
              subtitle: "Tempo de experiência",
              time: "2022-06-01",
              link: "https://www.alura.com.br/artigos/o-que-e-git-github?gclid=CjwKCAjwm4ukBhAuEiwA0zQxk6CGU7zOcPr1AdtIuKb-TcGF5AthvMXdIbMUfnniiLoEeJkgy9jFiRoCtesQAvD_BwE",
              backgroundImage: techBGv1,
              backgroundImage2: techBGv2,
            }}
          />
          <CardFlip
            treasure={{
              icon: DiDjango,
              title: "Django",
              description: "Django Frwk",
              subtitle: "Tempo de experiência",
              time: "2022-11-01",
              link: "https://www.djangoproject.com/",
              backgroundImage: techBGv1,
              backgroundImage2: techBGv2,
            }}
          />
          <CardFlip
            treasure={{
              icon: FaPython,
              title: "Python",
              description: "Python",
              subtitle: "Tempo de experiência",
              time: "2022-11-01",
              link: "https://www.python.org/",
              backgroundImage: techBGv1,
              backgroundImage2: techBGv2,
            }}
          />
          <CardFlip
            treasure={{
              icon: FaDocker,
              title: "Docker",
              description: "Docker",
              subtitle: "Tempo de experiência",
              time: "2023-01-01",
              link: "https://www.docker.com/",
              backgroundImage: techBGv1,
              backgroundImage2: techBGv2,
            }}
          />
          <CardFlip
            treasure={{
              icon: SiTypescript,
              title: "Typescript",
              description: "Typescript",
              subtitle: "Tempo de experiência",
              time: "2022-06-01",
              link: "https://www.typescriptlang.org/",
              backgroundImage: techBGv1,
              backgroundImage2: techBGv2,
            }}
          />
          <CardFlip
            treasure={{
              icon: FaNodeJs,
              title: "Node",
              description: "Node Js express",
              subtitle: "Tempo de experiência",
              time: "2022-06-01",
              link: "https://nodejs.org/en",
              backgroundImage: techBGv1,
              backgroundImage2: techBGv2,
            }}
          />
          <CardFlip
            treasure={{
              icon: TbBrandNextjs,
              title: "Next",
              description: "Next JS",
              subtitle: "Tempo de experiência",
              time: "2023-03-01",
              link: "https://nextjs.org/",
              backgroundImage: techBGv1,
              backgroundImage2: techBGv2,
            }}
          />
          <CardFlip
            treasure={{
              icon: BsFillBootstrapFill,
              title: "Bootstrap",
              description: "Bootstrap",
              subtitle: "Tempo de experiência",
              time: "2022-01-01",
              link: "https://getbootstrap.com/",
              backgroundImage: techBGv1,
              backgroundImage2: techBGv2,
            }}
          />
          <CardFlip
            treasure={{
              icon: SiNestjs,
              title: "Nest",
              description: "Nest JS",
              subtitle: "Tempo de experiência",
              time: "2023-03-01",
              link: "https://nestjs.com/",
              backgroundImage: techBGv1,
              backgroundImage2: techBGv2,
            }}
          />
        </UlSkills>
      </ShowcaseSpace>
    </>
  );
};

export default SkillSpace;
