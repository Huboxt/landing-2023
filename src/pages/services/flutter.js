import React from "react";
import Header from "@/components/Header/Header";
import GetTouch from "@/components/GetTouch/GetTouch";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import style from "@/pages/services/flutter.module.css";
import flutterHeroIcon from "../../assets/img/flutter-hero-icon.svg";
import webIcon from "../../assets/img/websapp-icon.svg";
import uiIcon from "../../assets/img/uiux-icon.svg";
import mvpIcon from "../../assets/img/mvp-icon.svg";
import marketIcon from "../../assets/img/market-icon.svg";
import qualityIcon from "../../assets/img/quality-icon.svg";
import titleBG from "../../assets/img/title-background.svg";
import numberIcon1 from "../../assets/img/numberIcon1.svg";
import numberIcon2 from "../../assets/img/numberIcon2.svg";
import numberIcon3 from "../../assets/img/numberIcon3.svg";
import flutterIcon from "../../assets/img/flutter-page-icon.svg";
import OurWorks from "@/components/OurWorks/OurWorks";
import FAQ from "@/components/FAQ/FAQ";

import { Parallax, ParallaxProvider } from "react-scroll-parallax";

const FlutterPage = () => {
  const handleClickScroll = (e) => {
    e.preventDefault();
    var element = document.getElementById("getInTouch");
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset + 1500;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className={style.container}>
      <Header showGetTouchBtn />
      <div className={style.startupsTitleContainer}>
        <div className={style.startupsTitleBlock}>
          <div>
            <div className={style.startupsTitle}>
              Flutter cross- <br /> platform <br /> mobile apps <br />{" "}
              development
            </div>
            <div className={style.startupsDescr}>
              <div>
                We develop powerful, native-like mobile apps for iOS and Android
                faster and cheaper taking a cross-platform advantage.
              </div>
            </div>
          </div>
          <div className={style.cardContainer}>
            <div className={style.cardBlock}>
              <div className={style.card1}>
                <Image
                  src={flutterHeroIcon}
                  alt="flutterHeroIcon"
                  className={style.heroImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ParallaxProvider>
        <Parallax
          startScroll={0}
          endScroll={700}
          translateY={["0px", "-200px"]}
          className={style.staticParallax}
        >
          <div className={style.whatCanDoContainer}>
            <div>
              <Image
                src={flutterIcon}
                alt="flutterIcon"
                className={style.flutterIcon}
              />
            </div>
            <Parallax
              startScroll={0}
              endScroll={500}
              translateX={["-800px", "0px"]}
              className={style.staticParallax}
            >
              <div className={style.whatCanDoTitle}>
                Flutter
                <br /> benefits
              </div>
            </Parallax>
            <div className={style.whatCanDoSubTitleBlock}>
              <div>
                <Parallax>
                  <div className={style.cardWithoutBorder}>
                    <div className={`${style.whatCanDoBlockDescr} ${style.marginDescr}`}>
                      Official website describes Flutter as an open source
                      framework by Google for building beautiful, natively
                      compiled, multi-platform applications from a single
                      codebase. Flutter makes development faster and cheaper
                      which is valuable for startups and small/medium
                      businesses. At the same time Flutter apps are as fast and
                      functional as native iOS and Android apps.
                    </div>
                  </div>
                </Parallax>

                <div className={style.cardsFirstBlock}>
                  <div
                    className={`${style.whatCanDoCard} ${style.firstCardWidth}`}
                  >
                    <Image
                      src={numberIcon1}
                      alt="numberIcon1"
                      className={style.numberIcon1}
                    />
                    <div className={style.whatCanDoBlockTitle}>
                      Faster time to <br /> market
                    </div>
                  </div>

                  <div
                    className={`${style.whatCanDoCard} ${style.firstCardWidth}`}
                  >
                    <Image
                      src={numberIcon2}
                      alt="numberIcon2"
                      className={style.numberIcon}
                    />
                    <div className={style.whatCanDoBlockTitle}>
                      Cheaper <br /> development
                    </div>
                  </div>

                  <div
                    className={`${style.whatCanDoCard} ${style.firstCardWidth}`}
                  >
                    <Image
                      src={numberIcon3}
                      alt="numberIcon3"
                      className={style.numberIcon}
                    />
                    <div className={style.whatCanDoBlockTitle}>
                      Native speed and <br /> functionality
                    </div>
                  </div>
                </div>

                <div className={style.cardsSecondBlock}>
                  <div
                    className={`${style.whatCanDoCard} ${style.secondCardWidth}`}
                  >
                    <div className={style.whatCanDoBlockTitle}>
                      Cross-platform <br /> development
                    </div>
                    <div className={style.whatCanDoBlockDescr}>
                      You write code one time and then build iOS and Android
                      apps. No need to write code two times for each platform,
                      no need to hire two developers. This is how Flutter saves
                      time and budget.
                    </div>
                  </div>

                  <div
                    className={`${style.whatCanDoCard} ${style.secondCardWidth}`}
                  >
                    <div className={style.whatCanDoBlockTitle}>
                      Native performance and features
                    </div>
                    <div className={style.whatCanDoBlockDescr}>
                      Flutter apps work as fast as native ones. They also have
                      access to hardware features such as camera, microphone,
                      GPS, compass, accelerometer etc. It makes Flutter a viable
                      alternative to native development.
                    </div>
                  </div>
                </div>

                <div className={style.whatCanDoCard}>
                  <div className={style.whatCanDoBlockTitle}>MVP</div>
                  <div className={style.whatCanDoBlockDescr}>
                    Minimal Viable Product has a minimum set of core features
                    enough for your real customers to try it. It helps to get
                    feedback from your target audience to find out if there is
                    demand and what to do next. If you have an MVP and a
                    positive market feedback your chance to get investors money
                    skyrockets 🚀
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Parallax>

        <Parallax
          startScroll={1200}
          endScroll={1900}
          translateY={["-100px", "-450px"]}
          className={style.staticParallax}
        >
          <div className={style.researchContainer}>
            <div className={style.valueTitle}>
              The value <br /> of flutter
            </div>
            <div className={style.whatCanDoSubTitleBlock}>
              <div>
                <Parallax
                  startScroll={1300}
                  endScroll={1800}
                  translateX={["-800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.researchSubTitle}>For startups</div>
                </Parallax>
                <Parallax
                  startScroll={1300}
                  endScroll={1800}
                  translateX={["-800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.cardWithoutBorderBlack}>
                    Startups often have to deal with budget limitations and high
                    competition. Cost-efficient and fast solution as Flutter is
                    a gamechanger here. Built-in libraries and cross-platform
                    capacities help you develop faster than competitors with no
                    need to extend a team.
                  </div>
                </Parallax>
              </div>
              <div>
                <Parallax
                  startScroll={1300}
                  endScroll={1900}
                  translateX={["800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.researchCard}>
                    <div className={style.whatCanDoBlockTitle}>Prototype</div>
                    <div className={style.whatCanDoBlockDescr}>
                      Flutter is the easiest way to make a clickable mobile app
                      prototype to show investors and business partners.
                    </div>
                  </div>
                </Parallax>
                <Parallax
                  startScroll={1500}
                  endScroll={2100}
                  translateX={["800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.researchCard}>
                    <div className={style.whatCanDoBlockTitle}>MVP</div>
                    <div className={style.whatCanDoBlockDescr}>
                      Hit App Store and Google Play faster than competitors,
                      attract early users and gather insightful feedback,
                      improve, find your product-market fit and win the next
                      round of funding.
                    </div>
                  </div>
                </Parallax>
                <Parallax
                  startScroll={1750}
                  endScroll={2400}
                  translateX={["800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.researchCard}>
                    <div className={style.whatCanDoBlockTitle}>SaaS</div>
                    <div className={style.whatCanDoBlockDescr}>
                      Cover all the platforms: mobile (iOS/Android), web,
                      desktop (Win/Mac) with a single codebase. Make third-party
                      integrations easily (including billing), gather insightful
                      data and be ready to grow fast with Flutter.
                    </div>
                  </div>
                </Parallax>
              </div>
            </div>
          </div>
        </Parallax>

        <Parallax
          startScroll={2500}
          endScroll={3400}
          translateY={["200px", "-650px"]}
          className={style.staticParallax}
        >
          <div className={style.whatCanDoContainer}>
            <div className={style.whatCanDoSubTitleBlock}>
              <div>
                <Parallax
                  startScroll={1300}
                  endScroll={1800}
                  translateX={["-800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.whatCanDoSubTitle}>For SMB</div>
                  <div className={style.whatCanDoSubTitleDesktop}>For SMB</div>
                </Parallax>

                <div className={style.cardWithoutBorder}>
                  <div className={style.whatCanDoBlockDescr}>
                    Small and Medium size businesses stand on firm ground of
                    their own finances, product-market fit and loyal customers.
                    However, it is important to optimize the business process
                    and budget to stay competitive and provide maximum value to
                    buyers. Flutter works here perfectly.
                  </div>
                </div>
              </div>
              <div>
                <div className={style.whatCanDoCard}>
                  <div className={style.whatCanDoBlockTitle}>
                    Apps for employees
                  </div>
                  <div className={style.whatCanDoBlockDescr}>
                    Flatter is good for custom mobile-based solutions that
                    optimize workflows and workforce. It leverages both iOS and
                    Android features like camera, flashlight, GPS, gyroscope,
                    microphone, bluetooth and speakers to scan, track, trace,
                    report, signal and do many other things that matter to your
                    business process.
                  </div>
                </div>
                <div className={style.whatCanDoCard}>
                  <div className={style.whatCanDoBlockTitle}>
                    Apps for clients
                  </div>
                  <div className={style.whatCanDoBlockDescr}>
                    Launch your app for iOS and Android to reach the majority of
                    target audience. Flutter helps you to optimize budget on
                    development and maintenance so that you can focus on
                    providing the best user experience, releasing updates faster
                    than competitors and selling more goods or services.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Parallax>

        <Parallax
          startScroll={3200}
          endScroll={3900}
          translateY={["-500px", "-850px"]}
          className={style.staticParallax}
        >
          <div className={style.researchContainer}>
            <Parallax
              startScroll={3300}
              endScroll={3900}
              translateX={["-800px", "0px"]}
              className={style.staticParallax}
            >
              <div className={style.valueTitle}>
                Our <br /> services
              </div>
            </Parallax>
            <div className={style.whatCanDoSubTitleBlock}>
              <div>
                <Parallax
                  startScroll={3900}
                  endScroll={4400}
                  translateX={["-800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.subTitleFlex}>
                    <Image
                      src={marketIcon}
                      alt="market"
                      className={style.valueSubTitleIcon}
                    />
                    <div className={style.valueSubTitle}>
                      Flutter app development
                    </div>
                    <div className={style.valueSubTitleDesktop}>
                      Flutter app development
                    </div>
                  </div>
                </Parallax>
              </div>
              <div>
                <Parallax
                  startScroll={3900}
                  endScroll={4400}
                  translateX={["800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.valueCard}>
                    <div className={style.whatCanDoBlockDescr}>
                      We can develop a mobile app from scratch for you.
                      Requirements gathering, UX/UI design, development, QA, App
                      Store and Google play publishing, post-production support.
                    </div>
                  </div>
                </Parallax>
              </div>
            </div>
            <div className={style.line}></div>

            <div className={style.whatCanDoSubTitleBlock}>
              <div>
                <Parallax
                  startScroll={4200}
                  endScroll={4700}
                  translateX={["-800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.subTitleFlex}>
                    <Image
                      src={qualityIcon}
                      alt="market"
                      className={style.valueSubTitleIcon}
                    />
                    <div className={style.valueSubTitle}>
                      Support and Maintenance
                    </div>
                    <div className={style.valueSubTitleDesktop}>
                      Support and Maintenance
                    </div>
                  </div>
                </Parallax>
              </div>
              <div>
                <Parallax
                  startScroll={4200}
                  endScroll={4700}
                  translateX={["800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.valueCard}>
                    <div className={style.whatCanDoBlockDescr}>
                      Make sure that your app is stable and works well giving a
                      pleasant experience to your customers. Fix things quickly
                      and update architecture when needed.
                    </div>
                  </div>
                </Parallax>
              </div>
            </div>
            <div className={style.line}></div>

            <div className={style.whatCanDoSubTitleBlock}>
              <div>
                <Parallax
                  startScroll={4600}
                  endScroll={5100}
                  translateX={["-800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.subTitleFlex}>
                    <Image
                      src={mvpIcon}
                      alt="market"
                      className={style.valueSubTitleIcon}
                    />
                    <div className={style.valueSubTitle}>Scaling</div>
                    <div className={style.valueSubTitleDesktop}>Scaling</div>
                  </div>
                </Parallax>
              </div>
              <div>
                <Parallax
                  startScroll={4600}
                  endScroll={5100}
                  translateX={["800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.valueCard}>
                    <div className={style.whatCanDoBlockDescr}>
                      We are ready to help you scale smoothly, improving
                      architecture, balancing load and expanding infrastructure.
                      Welcome a flow of new users without issues.
                    </div>
                  </div>
                </Parallax>
              </div>
            </div>
            <div className={style.line}></div>
          </div>
        </Parallax>

        <Parallax
          startScroll={8000}
          endScroll={12900}
          translateY={["-1300px", "0px"]}
          className={style.staticParallax}
        >
          <div className={style.ourWorksContainer}>
          <OurWorks />
          </div>
          <FAQ />
          <div className={style.getTouchWrapper}>
            <GetTouch borderRadius="60px 60px 0px 0px" />
          </div>
          <Footer />
        </Parallax>
      </ParallaxProvider>
    </div>
  );
};

export default FlutterPage;
