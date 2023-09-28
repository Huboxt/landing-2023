import React from "react";
import Header from "@/components/Header/Header";
import GetTouch from "@/components/GetTouch/GetTouch";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import uploadLettersCard from "../../assets/img/uploadLettersCard.svg";
import aboutTitle from "../../assets/img/aboutTitle.svg";
import researchTitle from "../../assets/img/researchTitle.svg";
import reactIcon from "../../assets/img/stackIcons/react-icon.svg";
import reactIconWhite from "../../assets/img/stackIcons/react-icon-white.svg";
import golangIcon from "../../assets/img/stackIcons/golang-icon.svg";
import golangIconWhite from "../../assets/img/stackIcons/golang-icon-white.svg";
import lavarelIcon from "../../assets/img/stackIcons/lavarel-icon.svg";
import lavarelIconWhite from "../../assets/img/stackIcons/lavarel-icon-white.svg";
import lavarelLine from "../../assets/img/stackIcons/lavarel-line.svg";
import awsIcon from "../../assets/img/stackIcons/aws-icon.svg";
import phpIcon from "../../assets/img/stackIcons/php-icon.svg";
import reactLine from "../../assets/img/stackIcons/react-line.svg";
import style from "@/pages/projects/dataConceptPage.module.css";
import uploadlettersTitle from "./uploadlettersTitle.svg";
import numberIcon1 from "../../assets/img/numberIcon1.svg";
import numberIcon2 from "../../assets/img/numberIcon2.svg";
import numberIcon3 from "../../assets/img/numberIcon3.svg";
import numberIcon4 from "../../assets/img/numberIcon4.svg";
import numberIcon5 from "../../assets/img/numberIcon5.svg";
import numberIcon6 from "../../assets/img/numberIcon6.svg";
import numberIcon7 from "../../assets/img/numberIcon7.svg";
import numberIcon8 from "../../assets/img/numberIcon8.svg";
import arrowBack from "../../assets/img/arrow-back.svg";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Link from "next/link";

const UploadlettersPage = () => {
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
      <div className={`${style.whatCanDoTitle} ${style.mobileTitle}`}>
        UPLOAD <br />
        LETTERS
      </div>
      <div className={`${style.whatCanDoTitle} ${style.desktopTitle}`}>
        UPLOADLETTERS
      </div>
      <div className={style.dataConceptDescr}>
        <div>
          <div className={style.description}>
            UploadLetters is a Texas based startup that provides 
            sending First-Class Mail®, Certified Mail® and Priority 
            Mail® letters digitally.
          </div>
          <button className={style.needSameButton} onClick={handleClickScroll}>
            I NEED THE SAME!
          </button>
        </div>
        <div className={style.stackContainer}>
          <div className={style.stackContainerUp}>
            <div className={style.stackBlock}>
              <Image
                src={golangIcon}
                alt="golangIcon"
                className={style.stackIcon}
              />
              <div className={style.stackTitle}>Golang</div>
            </div>
            <div className={style.stackBlock}>
              <Image src={awsIcon} alt="awsIcon" className={style.stackIcon} />
              <div className={style.stackTitle}>AWS</div>
            </div>
            <div className={style.stackBlock}>
              <Image
                src={reactIcon}
                alt="reactIcon"
                className={style.stackIcon}
              />
              <div className={style.stackTitle}>React</div>
            </div>
          </div>
          <div className={style.stackContainerDown}>
            <div className={style.stackBlock}>
              <Image
                src={lavarelIcon}
                alt="lavarelIcon"
                className={style.stackIcon}
              />
              <div className={style.stackTitle}>Lavarel</div>
            </div>
            <div className={style.stackBlock}>
              <Image src={phpIcon} alt="phpIcon" className={style.stackIcon} />
              <div className={style.stackTitle}>PHP</div>
            </div>
          </div>
        </div>
      </div>
      <ParallaxProvider>
        <Parallax>
          <Image
            src={uploadLettersCard}
            id="uploadLettersCard"
            className={style.dataConceptCard}
            alt="dataConceptCard"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Parallax>
        <Parallax
          startScroll={300}
          endScroll={600}
          translateY={["-100px", "-200px"]}
        >
          <div  className={`${style.aboutContainer} ${style.aboutContainerMargin}`}>
            <div className={style.table}>
              <div>
                <div className={style.tableTitle}>CLIENT</div>
                <div className={style.tableDescr}>Uploadletters</div>
              </div>
              <div>
                <div className={style.tableTitle}>TEAM</div>
                <div className={style.tableDescr}>6</div>
              </div>
              <div>
                <div className={style.tableTitle}>TIMELINE</div>
                <div className={style.tableDescr}>14 months</div>
              </div>
              <div>
                <div className={style.tableTitle}>SERVICES</div>
                <div className={style.tableDescr}>Development</div>
              </div>
            </div>
            <Parallax
              startScroll={300}
              endScroll={1800}
              translateX={["-800px", "0px"]}
              className={style.parallaxActive}
            >
              <div className={style.whatCanDoTitle}>ABOUT</div>
            </Parallax>
            <Parallax
              startScroll={100}
              endScroll={1900}
              translateX={["800px", "0px"]}
              className={style.parallaxActive}
            >
              <div className={style.cardWithoutBorder}>
                <div className={style.aboutBlockDescr}>
                  The main idea of Uploadletters is that you submit a PDF
                  document online and your addressee receives it as a physical
                  mail (on paper in the envelope) delivered by USPS (United
                  States Postal Service). 
                </div>
                <div className={style.aboutBlockDescr}>
                  Traditional mail is still actively used by state and local
                  government agencies, financial institutions, law firms,
                  construction companies, small businesses etc. Uploadletters
                  makes their job easier: no more printing, fitting in
                  envelopes, sending couriers, just a few clicks and done.
                </div>
              </div>
            </Parallax>
          </div>
        </Parallax>

        <Parallax
          startScroll={800}
          endScroll={1200}
          translateY={["-250px", "-400px"]}
        >
          <div className={style.aboutContainer}>
            <Parallax
              startScroll={600}
              endScroll={2600}
              translateX={["-800px", "0px"]}
              className={style.parallaxActive}
            >
              <div className={style.whatCanDoTitle}>
                Business <br /> requirements
              </div>
            </Parallax>
            <div className={style.requirementsCards}>
              <Parallax
              // startScroll={700}
              // endScroll={2800}
              // translateX={["800px", "50px"]}
              >
                <div className={style.requirementsCard}>
                  <Image
                    src={numberIcon1}
                    alt="numberIcon1"
                    className={style.numberIcon1}
                  />
                  <div className={style.aboutBlockTitle}>Bulk action</div>
                  <div className={style.aboutBlockDescr}>
                    First, considering that the main clients of Uploadletters
                    typically send a lot of mail (up to thousands of letters per
                    day) they should be able to submit documents and addresses
                    in bulk. At the same time, the infrastructure of the service
                    should be stable and scalable enough to handle the load and
                    provide a smooth user experience when a lot of new users
                    arrive.
                  </div>
                </div>
              </Parallax>
              <Parallax
              // startScroll={800}
              // endScroll={2900}
              // translateX={["800px", "50px"]}
              >
                <div className={style.requirementsCard}>
                  <Image
                    src={numberIcon2}
                    alt="numberIcon2"
                    className={style.numberIcon}
                  />
                  <div className={style.aboutBlockTitle}>Safe space</div>
                  <div className={style.aboutBlockDescr}>
                    Second, it should comply with USPS rules and regulations and
                    be safe to protect all the private and sensitive data to be
                    sent.
                  </div>
                </div>
              </Parallax>
              <Parallax
              // startScroll={800}
              // endScroll={2900}
              // translateX={["800px", "50px"]}
              >
                <div className={style.requirementsCard}>
                  <Image
                    src={numberIcon3}
                    alt="numberIcon3"
                    className={style.numberIcon}
                  />
                  <div className={style.aboutBlockTitle}>User experience</div>
                  <div className={style.aboutBlockDescr}>
                    Third, it should provide a great up-to-date user experience,
                    including a pleasant intuitive user interface, fast and
                    convenient billing, Microsoft and Google OAuth, different
                    account levels and payment options (the more you send the
                    cheaper a letter), the ability to submit data by uploading
                    file or OCR (Optical character recognition) from paper
                    sources.
                  </div>
                </div>
              </Parallax>
            </div>
          </div>
        </Parallax>

        <Parallax
          startScroll={1300}
          endScroll={2000}
          translateY={["-200px", "-600px"]}
        >
          <div className={style.researchContainer}>
            <Parallax
              startScroll={600}
              endScroll={2600}
              translateX={["-800px", "0px"]}
              className={style.parallaxActive}
            >
              <div className={style.whatCanDoTitle}>SCOPE</div>
            </Parallax>
            <div className={style.scopeBlock}>
              <div className={style.scopeSubTitle}>
                As the first stage, we had to develop a USPS API integration
                layer. Then we moved to full-cycle web application development:
                requirements gathering, UX/UI prototyping, frontend and backend
                development, cloud infrastructure deployment, QA,
                post-production support. It includes:
              </div>
              <div className={style.scopeCards}>
                <div className={style.scopeCard}>
                  <Image
                    src={numberIcon1}
                    alt="numberIcon1"
                    className={style.numberIcon1}
                  />
                  <div className={style.researchBlockDescr}>
                    Integration with USPS for sending letters, tracking delivery
                    statuses, return recipes requesting, generating barcodes,
                    unique print marks per page
                  </div>
                </div>
                <div className={style.scopeCard}>
                  <Image
                    src={numberIcon2}
                    alt="numberIcon2"
                    className={style.numberIcon}
                  />
                  <div className={style.researchBlockDescr}>
                    OCR documents scrapping
                  </div>
                </div>
                <div className={style.scopeCard}>
                  <Image
                    src={numberIcon3}
                    alt="numberIcon3"
                    className={style.numberIcon}
                  />
                  <div className={style.researchBlockDescr}>
                    High-load API and separate authorisation layer
                  </div>
                </div>
                <div className={style.scopeCard}>
                  <Image
                    src={numberIcon4}
                    alt="numberIcon4"
                    className={style.numberIcon}
                  />
                  <div className={style.researchBlockDescr}>
                    Authentication via Google, Microsoft, email. Application
                    access levels based on user roles
                  </div>
                </div>
                <div className={style.scopeCard}>
                  <Image
                    src={numberIcon5}
                    alt="numberIcon5"
                    className={style.numberIcon}
                  />
                  <div className={style.researchBlockDescr}>
                    Team management
                  </div>
                </div>
                <div className={style.scopeCard}>
                  <Image
                    src={numberIcon6}
                    alt="numberIcon6"
                    className={style.numberIcon}
                  />
                  <div className={style.researchBlockDescr}>
                    Admin platform for managing users, content on the platform.
                    Integration with 3rd party print shop
                  </div>
                </div>
                <div className={style.scopeCard}>
                  <Image
                    src={numberIcon7}
                    alt="numberIcon7"
                    className={style.numberIcon}
                  />
                  <div className={style.researchBlockDescr}>
                    Balance and transactions
                  </div>
                </div>
                <div className={style.scopeCard}>
                  <Image
                    src={numberIcon8}
                    alt="numberIcon8"
                    className={style.numberIcon}
                  />
                  <div className={style.researchBlockDescr}>
                    Integration with Stripe
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Parallax>

        <Parallax
          startScroll={2000}
          endScroll={3000}
          translateY={["-200px", "-600px"]}
        >
          <div className={style.blueContainer}>
            <div className={style.clientBlock}>
              <div className={style.clientTitle}>
                “Aside from providing superior <br /> products, their ability to{" "}
                <br /> genuinely interact on a personal <br /> level impresses
                us the most!”
              </div>
              <div className={style.clientSubTitle}>
                <div className={style.clientSubTitleLine}></div> Client
              </div>
            </div>
          </div>
        </Parallax>

        <Parallax
          startScroll={2500}
          endScroll={7500}
          translateY={["-900px", "0px"]}
        >
          <div  className={`${style.aboutContainer} ${style.architectureBlockMargin}`}>
            <Parallax
              startScroll={600}
              endScroll={2600}
              translateX={["-800px", "0px"]}
            >
              <div className={style.whatCanDoTitle}>
                Project <br /> architecture
              </div>
            </Parallax>
            <div className={style.architectureBlock}>
              <Parallax
                // startScroll={600}
                // endScroll={2600}
                // translateX={["-800px", "0px"]}
              >
                <div className={style.aboutCard}>
                  <div className={style.architectureImageBlock}>
                    <Image
                      src={reactIconWhite}
                      alt="reactIconWhite"
                      className={style.architectureIcon}
                    />
                    <Image scr={reactLine} alt="reactLine" />
                  </div>
                  <div className={style.architectureImageBlock}>
                    <Image
                      src={lavarelIconWhite}
                      alt="lavarelIconWhite"
                      className={style.architectureIcon}
                    />
                    <Image scr={lavarelLine} alt="lavarelLine" />
                  </div>
                  <div className={style.architectureImageBlock}>
                    <Image
                      src={golangIconWhite}
                      alt="golangIconWhite"
                      className={style.architectureIcon}
                    />
                    <Image scr={lavarelLine} alt="lavarelLine" />
                  </div>
                </div>
              </Parallax>
              <Parallax
                startScroll={100}
                endScroll={1900}
                translateX={["800px", "0px"]}
              >
                <div className={style.cardWithoutBorder}>
                  <div className={style.aboutBlockDescr}>
                    We started building the application already with
                    microservice architecture from the very beginning. It makes
                    the app more overload-resilient and creates a firm
                    foundation for future scaling.
                  </div>
                  <div className={style.aboutBlockDescr}>
                    Frontend was made with React as an easy-to-develop and
                    support mainstream solution. Considering the app features
                    set, Laravel + Laravel Nova was an optimal choice for the
                    back-end in terms of development speed & budget.  We
                    deployed the cloud infrastructure at Amazon Web Services.
                    Also, we’ve built an external API module for Enterprise
                    customers, which are submitting their batches via API and
                    integrating with their internal CRMs. We used Golang for
                    this as it’s fast, memory-optimized and it looked ideal
                    stack for that specific task
                  </div>
                  <div className={style.aboutBlockDescr}>
                    Stripe was chosen as a payment processing platform for this
                    project. We also integrated a third-party print shop.
                  </div>
                  <div className={style.aboutBlockDescr}>
                    Also, one of the killer features is the OCR scrapping
                    module, which allows users to scrap addresses from the huge
                    PDF letter images and split them based on that. We got a
                    benchmark, where we are able to scrap 5000 addresses in 7.7
                    seconds.
                  </div>
                </div>
              </Parallax>
            </div>
          </div>
          <div className={style.aboutContainer}>
            <div className={style.whatCanDoTitle}>Development</div>

            <div className={style.cardWithoutBorder}>
              <div className={style.aboutBlockDescr}>
                We started cooperation as a partnership to develop an API
                integration with the United States Postal Service. Then, having
                good results and positive experience with the customer we
                extended our partnership to full-cycle turnkey web application
                development.
              </div>
              <div className={style.aboutBlockDescr}>
                The team consisted of a full-stack developer, a Golang
                developer, a part-time designer, a DevOps, and a PM/QA.
              </div>
              <div className={style.aboutBlockDescr}>
                Frontend, backend, AWS development went smoothly and it was fun
                to do it after finishing the most challenging parts.
              </div>
            </div>

            <div>
              <div className={style.developmentCards}>
                <div className={style.developmentCard}>
                  <Image
                    src={numberIcon1}
                    alt="numberIcon1"
                    className={style.numberIcon1}
                  />
                  <div className={style.aboutBlockTitle}>API Integration</div>
                  <div className={style.aboutBlockDescr}>
                    The main challenge was to make API integration with the
                    United States Postal Service (USPS). It should comply with
                    USPS strict terms of use and XML-only request standards.
                    Plus there was fairly basic documentation, limited user
                    support, no SDK, and example code.
                  </div>
                </div>

                <div className={style.developmentCard}>
                  <Image
                    src={numberIcon2}
                    alt="numberIcon2"
                    className={style.numberIcon}
                  />
                  <div className={style.aboutBlockTitle}>Productive OCR</div>
                  <div className={style.aboutBlockDescr}>
                    The second challenge was developing a highly productive OCR,
                    as it is the killer feature for non-enterprise users, which
                    allow them to upload huge PDFs, select an area on the first
                    page and step, and after the software makes the split and
                    builds the letters
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={style.getTouchWrapper}>
            <GetTouch borderRadius="60px 60px 0px 0px" />
          </div>
          <Footer />
        </Parallax>
      </ParallaxProvider>
    </div>
  );
};

export default UploadlettersPage;
