import { IconContext } from "react-icons";
import {
  BoxItem,
  FlipBox,
  FlipBoxBack,
  FlipBoxFront,
  FlipButton,
  FlipInner,
} from "./styles";

const CardFlip = ({ treasure }) => {
  const {
    icon: Icon,
    title,
    description,
    subtitle,
    time,
    link,
    backgroundImage,
    backgroundImage2,
  } = treasure;

  const calculateTimeDuration = () => {
    const startDate = new Date(time);
    const currentDate = new Date();

    const yearsDiff = currentDate.getFullYear() - startDate.getFullYear();
    const monthsDiff = currentDate.getMonth() - startDate.getMonth();

    const totalMonths = yearsDiff * 12 + monthsDiff;

    return totalMonths;
  };

  const timeDuration = calculateTimeDuration();

  return (
    <>
      <BoxItem>
        <FlipBox className="flipBox">
          <FlipBoxFront className="flipFront" backgroundImage={backgroundImage}>
            <FlipInner className="inner">
              <h3>{title}</h3>
              <p>{description}</p>
              <IconContext.Provider
                value={{
                  color: "var(--color-primary)",
                  size: "6em",
                }}
              >
                <Icon />
              </IconContext.Provider>
            </FlipInner>
          </FlipBoxFront>
          <FlipBoxBack className="flipBack" backgroundImage2={backgroundImage2}>
            <FlipInner className="inner">
              <h3>{subtitle}</h3>
              <p>{`${timeDuration} mês(es)`}</p>
              <FlipButton href={link} target="_blank">
                Saiba mais!
              </FlipButton>
            </FlipInner>
          </FlipBoxBack>
        </FlipBox>
      </BoxItem>
    </>
  );
};

export default CardFlip;
