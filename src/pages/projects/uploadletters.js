import React from "react";
import Header from "@/components/Header/Header";
import GetTouch from "@/components/GetTouch/GetTouch";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import uploadLettersCard from "../../assets/img/uploadLettersCard.svg";
import aboutTitle from "../../assets/img/aboutTitle.svg";
import researchTitle from "../../assets/img/researchTitle.svg";
import reactIcon from "../../assets/img/stackIcons/react-icon.svg";
import golangIcon from "../../assets/img/stackIcons/golang-icon.svg";
import lavarelIcon from "../../assets/img/stackIcons/lavarel-icon.svg";
import awsIcon from "../../assets/img/stackIcons/aws-icon.svg";
import phpIcon from "../../assets/img/stackIcons/php-icon.svg";
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
            <svg
              width="181"
              height="16"
              viewBox="0 0 181 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.292892 8.70711C-0.0976257 8.31658 -0.0976257 7.68342 0.292892 7.29289L6.65686 0.928932C7.04738 0.538408 7.68054 0.538408 8.07108 0.928932C8.46159 1.31946 8.46159 1.95262 8.07108 2.34315L2.41422 8L8.07108 13.6569C8.46159 14.0474 8.46159 14.6805 8.07108 15.0711C7.68054 15.4616 7.04738 15.4616 6.65686 15.0711L0.292892 8.70711ZM181 9H1V7H181V9Z"
                fill="#4E76D1"
              />
            </svg>
          </div>
        </Link>
        <div>BACK</div>
      </div>
      <div>
        <Image
          src={uploadlettersTitle}
          alt="uploadlettersTitle"
          className={style.dataConceptTitle}
        />
      </div>
      <div className={style.dataConceptDescr}>
        <div>
          <div className={style.description}>
            UploadLetters is a Texas based startup that provides <br />
            sending First-Class Mail®, Certified Mail® and Priority <br />
            Mail® letters digitally.
          </div>
          <button className={style.needSameButton} onClick={handleClickScroll}>
            I NEED THE SAME!
          </button>
        </div>
        <div className={style.stackContainer}>
          <div className={style.stackBlock}>
            <Image src={golangIcon} alt="golangIcon" />
            <div className={style.stackTitle}>Golang</div>
          </div>
          <div className={style.stackBlock}>
            <Image src={awsIcon} alt="awsIcon" />
            <div className={style.stackTitle}>AWS</div>
          </div>
          <div className={style.stackBlock}>
            <Image src={reactIcon} alt="reactIcon" />
            <div className={style.stackTitle}>React</div>
          </div>
          <div className={style.stackBlock}>
            <Image src={lavarelIcon} alt="lavarelIcon" />
            <div className={style.stackTitle}>Lavarel</div>
          </div>
          <div className={style.stackBlock}>
            <Image src={phpIcon} alt="phpIcon" />
            <div className={style.stackTitle}>PHP</div>
          </div>
        </div>
      </div>
      <ParallaxProvider>
        <Parallax startScroll={0} endScroll={800}>
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
          startScroll={0}
          endScroll={1800}
          translateY={["800px", "-500px"]}
        >
          <div className={style.aboutContainer}>
            <table className={style.table}>
              <thead>
                <tr>
                  <th
                    className={style.tableTitle}
                    scope="col"
                    style={{ width: "20%" }}
                  >
                    CLIENT
                  </th>
                  <th
                    className={style.tableTitle}
                    scope="col"
                    style={{ width: "10%" }}
                  >
                    TEAM
                  </th>
                  <th
                    className={style.tableTitle}
                    scope="col"
                    style={{ width: "10%" }}
                  >
                    TIMELINE
                  </th>
                  <th
                    className={style.tableTitle}
                    scope="col"
                    style={{ width: "25%" }}
                  >
                    SERVICES
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={style.tableDescr}>UploadLetters</td>
                  <td className={style.tableDescr}>6</td>
                  <td className={style.tableDescr}>14 month</td>
                  <td className={style.tableDescr}>Development</td>
                </tr>
              </tbody>
            </table>
            <Parallax
              startScroll={300}
              endScroll={1800}
              translateX={["-800px", "0px"]}
            >
              <Image
                src={aboutTitle}
                alt="aboutTitle"
                style={{ width: "40%", height: "40%" }}
              />
            </Parallax>
            <Parallax
              startScroll={100}
              endScroll={1900}
              translateX={["800px", "0px"]}
            >
              <div className={style.aboutCard}>
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
          startScroll={1600}
          endScroll={2400}
          translateY={["-350px", "-900px"]}
        >
          <div className={style.aboutContainer}>
            <Parallax
              startScroll={600}
              endScroll={2600}
              translateX={["-800px", "0px"]}
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
          startScroll={1900}
          endScroll={3000}
          translateY={["-450px", "-900px"]}
        >
          <div className={style.researchContainer}>
            <Parallax
              startScroll={600}
              endScroll={2600}
              translateX={["-800px", "0px"]}
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
          startScroll={1900}
          endScroll={3000}
          translateY={["-450px", "-900px"]}
        >
          <div className={style.blueContainer}>
            <div className={style.clientBlock}>
              <div className={style.clientTitle}>
                “Aside from providing superior <br /> products, their ability to{" "}
                <br /> genuinely interact on a personal <br /> level impresses
                us the most!”
              </div>
              <div className={style.clientSubTitle}><div className={style.clientSubTitleLine}></div> Client</div>
            </div>
          </div>
        </Parallax>

        <Parallax translateY={["-700px", "0px"]}>
          <div className={style.getTouchWrapper}>
            <GetTouch borderRadius="60px 60px 0px 0px" />
          </div>
        </Parallax>
        <Footer />
      </ParallaxProvider>
    </div>
  );
};

export default UploadlettersPage;
