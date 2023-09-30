import React from "react";
import Header from "@/components/Header/Header";
import GetTouch from "@/components/GetTouch/GetTouch";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import petmateChat from "../../assets/img/petmate-chat.svg";
import petmateChatDesktop from "../../assets/img/petmate-chat-desktop.svg";
import petmateDesign1 from "../../assets/img/petmate-design1.svg";
import petmateDesign1Desktop from "../../assets/img/petmate-design1-desktop.svg";
import petmateDesign2 from "../../assets/img/petmate-design2.svg";
import petmateDesign2Desktop from "../../assets/img/petmate-design2-desktop.svg";
import petmateDesign3 from "../../assets/img/petmate-design3.svg";
import appStore from "../../assets/img/appstore-icon.svg";
import googlePlay from "../../assets/img/googleplay-icon.svg";
import petmateCard from "../../assets/img/petmateCard.svg";
import pawIcon from "../../assets/img/paw-icon.svg";
import aboutTitle from "../../assets/img/aboutTitle.svg";
import researchTitle from "../../assets/img/researchTitle.svg";
import nextIcon from "../../assets/img/stackIcons/nextjs-icon.svg";
import reactIconWhite from "../../assets/img/stackIcons/react-icon-white.svg";
import flutterIcon from "../../assets/img/stackIcons/flutter-icon.svg";
import golangIconWhite from "../../assets/img/stackIcons/golang-icon-white.svg";
import lavarelIcon from "../../assets/img/stackIcons/lavarel-icon.svg";
import lavarelIconWhite from "../../assets/img/stackIcons/lavarel-icon-white.svg";
import lavarelLine from "../../assets/img/stackIcons/lavarel-line.svg";
import openAiIcon from "../../assets/img/stackIcons/openai-icon.svg";
import phpIcon from "../../assets/img/stackIcons/php-icon.svg";
import reactLine from "../../assets/img/stackIcons/react-line.svg";
import style from "@/pages/projects/petmate.module.css";
import numberIcon1 from "../../assets/img/numberIcon1.svg";
import numberIcon2 from "../../assets/img/numberIcon2.svg";
import numberIcon3 from "../../assets/img/numberIcon3.svg";
import numberIcon4 from "../../assets/img/numberIcon4.svg";
import numberIcon5 from "../../assets/img/numberIcon5.svg";
import numberIcon6 from "../../assets/img/numberIcon6.svg";
import numberIcon7 from "../../assets/img/numberIcon7.svg";
import numberIcon8 from "../../assets/img/numberIcon8.svg";
import arrowBack from "../../assets/img/arrow-back.svg";
import Link from "next/link";

const PetmateAI = () => {
  const handleClickScroll = (e) => {
    e.preventDefault();
    var element = document.getElementById("getInTouch");
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset + 500;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className={style.container}>
      <Header showGetTouchBtn />
      <div className={style.backBtn}>
        <Link href="/our-works/our-works-page">
          <div className={style.arrow}>
            <Image src={arrowBack} alt="arrowBack" />
          </div>
        </Link>
        <div>BACK</div>
      </div>
      <div className={style.whatCanDoTitle}>PETMATEAI</div>
      <div className={style.dataConceptDescr}>
        <div>
          <div className={style.description}>
            UploadLetters is a Texas based startup that provides Petmate AI is a
            multiplatform (iOS/Android) mobile application for pet owners. It is
            a chat with AI (resembles ChatGPT experience) where you can ask any
            pet-related questions about health, treatment, training, breeding,
            feeding etc. You create your pet’s account in the app and submit
            info about sex, breed, age, and weight to receive accurate answers.
          </div>
          <button className={style.needSameButton} onClick={handleClickScroll}>
            I NEED THE SAME!
          </button>
        </div>
        <div className={style.stackContainer}>
          <div className={style.stackContainerUp}>
            <div className={style.stackBlock}>
              <Image
                src={flutterIcon}
                alt="flutterIcon"
                className={style.stackIcon}
              />
              <div className={style.stackTitle}>Flutter</div>
            </div>
            <div className={style.stackBlock}>
              <Image
                src={openAiIcon}
                alt="openAiIcon"
                className={style.stackIcon}
              />
              <div className={style.stackTitle}>Open AI</div>
            </div>
            <div className={style.stackBlock}>
              <Image
                src={nextIcon}
                alt="nextIcon"
                className={style.stackIcon}
              />
              <div className={style.stackTitle}>NextJS</div>
            </div>
            <div className={style.stackBlock}>
              <Image src={phpIcon} alt="phpIcon" className={style.stackIcon} />
              <div className={style.stackTitle}>PHP</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Image
            src={petmateChat}
            id="petmateChat"
            className={style.petmateChat}
            alt="dataConceptCard"
          />
          <Image
            src={petmateChatDesktop}
            id="petmateChatDesktop"
            className={style.petmateChatDesktop}
            alt="dataConceptCard"
          />
        </div>
        <div>
          <div
            className={`${style.aboutContainer} ${style.ideaContainerMargin}`}
          >
            <div className={style.table}>
              <div>
                <div className={style.tableTitle}>CLIENT</div>
                <div className={style.tableDescr}>PetmateAI</div>
              </div>
              <div>
                <div className={style.tableTitle}>TEAM</div>
                <div className={style.tableDescr}>5</div>
              </div>
              <div>
                <div className={style.tableTitle}>TIMELINE</div>
                <div className={style.tableDescr}>2 months</div>
              </div>
              <div>
                <div className={style.tableTitle}>SERVICES</div>
                <div className={style.tableDescr}>Development</div>
              </div>
              <Image
            src={pawIcon}
            className={style.pawIcon}
            alt="pawIcon"
          />
          <Image
            src={pawIcon}
            className={style.pawIcon2}
            alt="pawIcon2"
          />
          <Image
            src={pawIcon}
            className={style.pawIcon3}
            alt="pawIcon3"
          />
          <Image
            src={pawIcon}
            className={style.pawIcon4}
            alt="pawIcon4"
          />
            </div>
            <div>
              <div className={style.whatCanDoTitle}>IDEA</div>
            </div>
            <div>
              <div className={style.cardWithoutBorder}>
                <div className={style.aboutBlockDescr}>
                  The product owner of Petmate AI is a tech-savvy person and a
                  keen pet owner. The idea came unexpectedly when she was
                  ambushed by some sudden health issues with her Welsh Corgi
                  dog. It was night and a Vet didn’t take a call. So this woman
                  decided to check info quickly on the Internet before going to
                  the 24/7 vet clinic.
                </div>
                <div className={style.aboutBlockDescr}>
                  She asked Chat GPT instead of Google to get info faster. It
                  appeared to be an acute allergy attack according to symptoms.
                  She rushed to the clinic immediately and her dog got first-aid
                  treatment, which literally saved his life. It appeared that he
                  ate a bee that stings him inside his throat.
                </div>
                <div className={style.aboutBlockDescr}>
                  After this case, the woman came up with an idea to create an
                  application for pet owners that gives quick pet-related
                  answers any time faster than Google and easier than chat GPT.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className={`${style.aboutContainer} ${style.aboutContainerMargin}`}>
            <div>
              <div className={style.whatCanDoTitle}>About</div>
            </div>
            <div className={style.requirementsCards}>
              <div>
                <div className={style.requirementsCard}>
                  <div className={style.aboutBlockTitle}>
                    Business requirements
                  </div>
                  <div className={style.aboutBlockDescr}>
                    The product owner funded app development from her own
                    finances. She wanted to hit the market as fast as possible
                    with a multiplatform (iOS + Android) mobile app for a
                    reasonable budget-effective price. The mobile app was to be
                    published in App Store and Google Play. She also wanted a
                    landing page for mobile.
                  </div>
                </div>
              </div>
              <div>
                <div className={style.requirementsCard}>
                  <div className={style.aboutBlockTitle}>Architecture</div>
                  <div className={style.aboutBlockDescr}>
                    We designed app architecture to satisfy the main needs:
                    go-to-market fast, multiplatform, and cost-efficient
                    development.
                    <br />
                    <br />
                    The core of the application is a ChatGPT integration. The
                    ChatGPT session is pre-setup with a special prompt (which
                    also includes data about your pet) to make answers the most
                    accurate and relevant. This integration is handled by a PHP
                    back-end.
                    <br />
                    <br />
                    We chose Flutter for mobile application development. As a
                    cross-platform framework it saves you from developing the
                    same app twice for each platform (iOS and Android) plus you
                    need a Flutter developer instead of two iOS and Android
                    devs.
                    <br />
                    <br />
                    We used Next.js for making a landing page. It has useful
                    built-in features that skyrockets development.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className={style.researchContainer}>
            <div>
              <div className={style.whatCanDoTitle}>UI DESIGN</div>
            </div>
            <div className={style.scopeBlock}>
              <Image
                src={petmateDesign1}
                alt="petmateDesign1"
                className={style.petmateDesign1}
              />
              <Image
                src={petmateDesign1Desktop}
                alt="petmateDesign1"
                className={style.petmateDesign1Desktop}
              />

              <Image
                src={petmateDesign2}
                alt="petmateDesign2"
                className={style.petmateDesign1}
              />
              <Image
                src={petmateDesign2Desktop}
                alt="petmateDesign2"
                className={style.petmateDesign1Desktop}
              />
            </div>
            <Image
              src={petmateDesign3}
              alt="petmateDesign3"
              style={{
                width: "100%",
                height: "100%",
                marginLeft: "auto",
                marginRight: "auto",
                display: "flex",
              }}
            />
          </div>
        </div>

        <div>
          <div className={style.blueContainer}>
            <div className={style.clientBlock}>
              <div className={style.clientTitle}>
                Get <br /> PetmateAI on
                <br /> AppStore <br /> & Google Play
              </div>
              <div className={style.storeBlock}>
                <Link
                  href="https://apps.apple.com/app/petmateai/id6462674725"
                  target="_blank"
                >
                  <button className={style.storeBtn}>
                    <Image
                      src={appStore}
                      alt="appStore"
                      className={style.storeIcon}
                    />
                  </button>
                </Link>

                <Link
                  href="https://play.google.com/store/apps/details?id=com.petmateai.app"
                  target="_blank"
                >
                  <button className={style.storeBtn}>
                    <Image
                      src={googlePlay}
                      alt="googlePlay"
                      className={style.storeIcon}
                    />
                  </button>
                </Link>
              </div>
              <Image
                src={petmateChat}
                className={style.petmateChatPhone}
                alt="petmateChat"
              />
            </div>
          </div>
        </div>

        <div>
          <div
            className={`${style.aboutContainer} ${style.architectureBlockMargin}`}
          >
            <div>
              <div className={style.whatCanDoTitle}>WebSite</div>
            </div>
            <Image
              src={petmateCard}
              alt="petmateCard"
              className={style.petmateWebsite}
            />
          </div>
          <div className={style.getTouchWrapper}>
            <GetTouch borderRadius="60px 60px 0px 0px" />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default PetmateAI;
