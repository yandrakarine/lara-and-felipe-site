import "./index.css";
import PinIcon from "./assets/icons/svg/map-pin-line.svg";
import GiftIcon from "./assets/icons/svg/gift.svg";
import GlobeIcon from "./assets/icons/svg/globe.svg";
import UserCherckIcon from "./assets/icons/svg/user-check.svg";
import PointIcon from "./assets/icons/svg/hand-pointing.svg";
import Ramo1Img from "./assets/icons/image/ramo-1.png";
import LogoImg from "./assets/icons/image/logo-l-e-f.png";
import UsImg from "./assets/icons/image/lara-e-felipe.jpeg";
import Ramo1Icon from "./assets/icons/svg/ramo-svg.svg";
import Ramo2Icon from "./assets/icons/svg/ramo-2-svg.svg";
import RamoCompostoIcon from "./assets/icons/svg/ramo-composto.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// import confetti from "canvas-confetti";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    // confetti({
    //   particleCount: 150,
    //   spread: 80,
    //   origin: { y: 0.6 },
    // });
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 40, behavior: "smooth" });

      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 500);
    }, 10000);

    return () => clearTimeout(timeout);
  }, []);

  const Logo = () => {
    return (
      <div className="flex gap-2">
        <img src={LogoImg} alt="Logo" className="h-20 lg:h-25" />
      </div>
    );
  };

  const buttonsContent = [
    {
      title: "Cerimônia e recepção",
      iconPath: PinIcon,
      alt: "map pin icon",
      href: "https://www.google.com/maps/dir//Resid.+Iparana+-+R.+Luiz+Paiva,+75+-+Iparana,+Caucaia+-+CE,+61627-090/@-3.688084,-38.7135447,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x7c735ef032d79ef:0x7d80b9d6dcb0c893!2m2!1d-38.631134!2d-3.6881523?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      title: "Nosso site",
      iconPath: GlobeIcon,
      alt: "globe icon",
      href: "https://noivos.casar.com/yandra-e-will",
    },
    {
      title: "Confirme presença",
      iconPath: UserCherckIcon,
      alt: "user with check",
      href: "https://noivos.casar.com/yandra-e-will#/rsvp",
    },
    {
      title: "Lista de presentes",
      iconPath: GiftIcon,
      alt: "gift icon",
      href: "https://noivos.casar.com/yandra-e-will#/presentes",
    },
  ];

  return (
    <div className="relative bg-[#ffffff] bg-[url(https://www.transparenttextures.com/patterns/paper.png)] px-4 min-h-fit max-w-[80rem] mx-auto overflow-hidden">
      <img
        data-aos="fade-up-right"
        src={RamoCompostoIcon}
        alt=""
        className="absolute -top-[1%] -left-[17%] z-10 w-60"/>
      
      <section
        data-aos="fade-down"
        className="flex flex-col items-center justify-center gap-8 mb-8 mt-18 lg:mt-20 lg:gap-12 lg:mb-12"
      >
        <Logo />
        <span className="font-[CormorantGaramondItalic] text-md text-center px-8 sm:px-0 lg:text-xl">
          "Que o amor seja a melhor forma de começar e terminar o nosso dia."
        </span>
      </section>

      <section 
      data-aos="fade-up"
      >
        <div className="flex flex-col items-center justify-center gap-5 mb-8 lg:gap-8 lg:mb-12">
          <p className="font-[CormorantGaramondRegular] text-slate-800 text-base text-center uppercase lg:text-xl">
            Com o amor e a alegria de nossas famílias
          </p>
          <h1 className="font-[CormorantGaramondRegular] text-7xl text-black lg:text-9xl">
            Lara e Felipe
          </h1>
          <p className="font-[CormorantGaramondRegular] text-slate-800 text-base text-center uppercase lg:text-xl">
            convidam para a cerimônia de seu casamento
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-3 mb-6 lg:gap-5 lg:mb-24">
          <p className="font-[CormorantGaramondRegular] text-3xl mb-4 uppercase lg:text-4xl">
            02.09.2026
          </p>
          <p className="font-[MontserratRegular] text-base text-center lg:text-md">
          Às 19h no Casa Maraponga, <br className="lg:hidden" />
            <br className=" lg:hidden" /> localizado na R. Paurilo Barroso, 521 - Jardim Cearense
          </p>
          <p className="font-[MontserratRegular] text-base text-center lg:text-md">
            Após a cerimônia haverá a recepção no local.
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center mb-12">
        <div className="flex justify-around gap-2 px-2 max-w-2xl mb-20">
          {buttonsContent.map((item) => {
            return (
              <div className="flex flex-col items-center justify-center gap-3 h-full w-1/5">
                <a
                  target="_blank"
                  href={item.href}
                  className="flex cursor-pointer bg-slate-700 p-2 rounded-full hover:bg-slate-800 hover:-translate-y-1.5 ease-in-out items-center justify-center shrink-0 lg:p-3"
                >
                  <img
                    src={item.iconPath}
                    alt={item.alt}
                    className="h-7 lg:h-10"
                  />
                </a>
                <span className="font-[MontserratRegular] text-[0.625rem] text-slate-600 text-center lg:text-sm">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center gap-2 animate-pulse">
          <img src={PointIcon} alt="" className="h-7 animate-bounce" />
          <p className="font-[CormorantGaramondRegular] text-slate-600 text-sm text-center uppercase lg:text-base">
            clique nos icones para acessar
          </p>
        </div>
      </section>

      <section
        id="paralax_section"
        className="relative flex min-h-[60dvh] items-center justify-center mb-10"
      >
        <div
          id="parallax_bg"
          className={`absolute rounded-2xl left-0 top-0 right-0 bg-fixed h-140 bg-no-repeat bg-cover bg-center bg-[url(./assets/icons/image/lara-e-felipe.jpeg)] lg:h-150`}
          style={{ backgroundImage: UsImg }}
        ></div>
      </section>
      <div className="flex flex-col gap-6 mt-35 mb-12 shrink-0 2xl:mt-0">
        <span className="font-[CormorantGaramondRegular] pl-5 text-base text-left lg:text-2xl">
          Aguardamos você! Com carinho,
        </span>
        <span className="font-[HalimunRegular] text-3xl text-slate-600 text-left pl-10 lg:text-4xl">
          Lara e Felipe
        </span>
      </div>
      <img
        src={Ramo1Icon}
        alt=""
        className="absolute -bottom-[3%] -right-[14%] z-10 w-40 -rotate-20"
      />
    </div>
  );
}

export default App;
