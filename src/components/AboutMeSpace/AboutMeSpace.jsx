import { IconContext } from "react-icons";
import {
  AboutMeSection,
  CircleImage,
  Divider,
  FirstSection,
  MainInformation,
  MainPhoto,
  PersonalInformation,
  PikachuSpace,
  SecondSection,
  SquareImage,
  SwiperImgDiv,
  ValueImgSpace,
  WaveDnaBot,
  WaveDnaUp,
  XImage,
} from "./styles";
import "../../utils/i18n";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MdDoubleArrow } from "react-icons/md";
import Pikachu from "../../assets/img/pikachu_01.gif";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Scrollbar } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import banner01 from "../../assets/img/main_background_05.jpg";
import banner02 from "../../assets/img/main_background_06.jpg";
import banner03 from "../../assets/img/main_background_07.jpg";
import banner04 from "../../assets/img/main_background_08.jpg";
// import banner05 from "../../../assets/img/main_background_09.jpg";
import mainPhoto01 from "../../assets/img/akshan.gif";
import mainPhoto02 from "../../assets/img/viktor.gif";
import mainPhoto03 from "../../assets/img/leona.gif";
import mainPhoto04 from "../../assets/img/neko.gif";
import mainPhoto05 from "../../assets/img/shen.gif";

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
        <SecondSection>
          <Swiper
            modules={[Autoplay, Pagination, Scrollbar]}
            slidesPerView={1}
            scrollbar={{
              hide: true,
            }}
            autoplay={{
              delay: 3500,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            loop
            className="mySwiper"
          >
            <SwiperSlide>
              <SwiperImgDiv>
                <img src={banner01} alt="#" />
              </SwiperImgDiv>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperImgDiv>
                <img src={banner02} alt="#" />
              </SwiperImgDiv>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperImgDiv>
                <img src={banner03} alt="#" />
              </SwiperImgDiv>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperImgDiv>
                <img src={banner04} alt="#" />
              </SwiperImgDiv>
            </SwiperSlide>
          </Swiper>

          <h2>Meus valores Profissionais</h2>
          <ValueImgSpace>
            <SquareImage>
              <img src={mainPhoto01} alt="ref value 01" />
              <figcaption>Responsabilidade</figcaption>
            </SquareImage>
            <CircleImage>
              <img src={mainPhoto05} alt="ref value 02" />
              <figcaption>Compromisso</figcaption>
            </CircleImage>
            <XImage>
              <img src={mainPhoto04} alt="ref value 02" />
              <figcaption>Honestidade</figcaption>
            </XImage>
            <SquareImage>
              <img src={mainPhoto03} alt="ref value 01" />
              <figcaption>Respeito</figcaption>
            </SquareImage>
            <CircleImage>
              <img src={mainPhoto02} alt="ref value 02" />
              <figcaption>Ética</figcaption>
            </CircleImage>
          </ValueImgSpace>
          {/* <Divider>
            <WaveDnaUp>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </WaveDnaUp>
            <WaveDnaBot>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </WaveDnaBot>
          </Divider> */}
        </SecondSection>
      </AboutMeSection>
    </>
  );
};

export default AboutMeSpace;
