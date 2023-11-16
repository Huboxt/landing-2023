import React from "react";
import Header from "@/components/Header/Header";
import GetTouch from "@/components/GetTouch/GetTouch";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import leadsCard from "../../assets/img/leadsCard.png";
import aboutTitle from "../../assets/img/aboutTitle.svg";
import golangIcon from "../../assets/img/stackIcons/golang-icon.svg";
import mysqlIcon from "../../assets/img/stackIcons/mysql-icon.svg";
import reactIcon from "../../assets/img/stackIcons/react-icon.svg";
import style from "@/pages/projects/leads.module.css";
import leadsCard1 from "../../assets/img/leadsCard1.png";
import leadsCard2 from "../../assets/img/leadsCard2.png";
import leadsCard3 from "../../assets/img/leadsCard3.png";
import numberIcon1 from "../../assets/img/numberIcon1.svg";
import numberIcon2 from "../../assets/img/numberIcon2.svg";
import numberIcon3 from "../../assets/img/numberIcon3.svg";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import arrowBack from "../../assets/img/arrow-back.svg";
import Link from "next/link";

const LeadsPage = () => {
  const handleClickScroll = (e) => {
    e.preventDefault();
    var element = document.getElementById("getInTouch");
    var elementPosition = element.getBoundingClientRect().top;

    window.scrollTo({
      top: 6000,
      behavior: "smooth",
    });
  };

  return (
    <div className={style.container}>
      <Header showGetTouchBtn />
      <div className={style.backBtn}>
        <Link href="/our-works-page">
          <div className={style.arrow}>
            <Image src={arrowBack} alt="arrowBack" />
          </div>
        </Link>
        <div>BACK</div>
      </div>
      <div>
        {/* <Image
          src={dataConceptTitle}
          alt="dataConceptTitle"
          className={style.dataConceptTitle}
        /> */}
        <div className={` ${style.whatCanDoTitle}`}>Leads</div>
      </div>
      <div className={style.dataConceptDescr}>
        <div>
          <div className={style.description}>
            We created an SMS & Email marketing platform that enables businesses
            to create, manage, and execute marketing campaigns through text
            messages
          </div>
          <button className={style.needSameButton} onClick={handleClickScroll}>
            I NEED THE SAME!
          </button>
        </div>
        <div
          className={`${style.stackContainer}`}
        >
          <div className={style.stackBlock}>
            <Image
              src={golangIcon}
              alt="golangIcon"
              className={style.stackIcon}
            />
            <div className={style.stackTitle}>Golang</div>
          </div>
          <div className={style.stackBlock}>
            <Image
              src={mysqlIcon}
              alt="mysqlIcon"
              className={style.stackIcon}
            />
            <div className={style.stackTitle}>MySQL</div>
          </div>
          <div className={style.stackBlock}>
            <Image
              src={reactIcon}
              alt="mysqlIcon"
              className={style.stackIcon}
            />
            <div className={style.stackTitle}>React</div>
          </div>
        </div>
      </div>
      <ParallaxProvider>
        <Parallax style={{ display: "flex", justifyContent: "center" }}>
          <Image
            src={leadsCard}
            id="dataConceptCard"
            className={style.dataConceptCard}
            alt="dataConceptCard"
            style={{
              width: "90%",
              height: "90%",
            }}
          />
        </Parallax>
        <Parallax
        // startScroll={800}
        // endScroll={1500}
        // translateY={["50px", "-200px"]}
        >
          <div
            className={`${style.aboutContainer} ${style.dataConceptAboutMargin}`}
          >
            <div className={style.table}>
              <div>
                <div className={style.tableTitle}>CLIENT</div>
                <div className={style.tableDescr}>Digital Notion</div>
              </div>
              <div>
                <div className={style.tableTitle}>TEAM MEMBERS</div>
                <div className={style.tableDescr}>4</div>
              </div>
              <div>
                <div className={style.tableTitle}>TIMELINE</div>
                <div className={style.tableDescr}>1,5 year</div>
              </div>
              <div>
                <div className={style.tableTitle}>SERVICES</div>
                <div className={style.tableDescr}>Full-cycle Development</div>
              </div>
            </div>
            <Parallax
              startScroll={300}
              endScroll={1100}
              translateX={["-800px", "0px"]}
              className={style.staticParallax}
            >
               <div className={style.whatCanDoTitle}>ABOUT</div>
            </Parallax>
            <Parallax
              startScroll={100}
              endScroll={1400}
              translateX={["800px", "0px"]}
              className={style.staticParallax}
            >
              <div className={style.cardWithoutBorder}>
                <div className={style.aboutBlockDescr}>
                  SMS & Email marketing platform serves as a comprehensive
                  solution for a business aiming to engage with it audience
                  through SMS and Email-based campaigns. It offers a range of
                  functionalities to create, automate, fostering direct
                  communication with customers or prospects.
                </div>
              </div>
            </Parallax>
          </div>
        </Parallax>
        <Parallax
        >
          <div className={`${style.aboutContainer} ${style.challengeMargin}`}>
            <Parallax
              className={style.staticParallax}
            >
              <div className={style.whatCanDoTitle}>SCOPE</div>
            </Parallax>
            <Parallax
              startScroll={300}
              endScroll={2000}
              translateX={["800px", "50px"]}
              className={style.staticParallax}
            >
              <div className={style.cardWithoutBorder}>
                <div className={style.aboutBlockDescr}>
                  We started with full-cycle web application development:
                  requirements gathering, UX/UI prototyping, frontend and
                  backend development, cloud infrastructure deployment, QA,
                  post-production support.
                </div>
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
                  <div className={style.aboutBlockTitle}>Approach</div>
                  <div className={style.aboutBlockDescr}>
                    Their approach and architecture was not optimal, so it was
                    hard to adjust, slow and resource-demanding
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
                  <div className={style.aboutBlockTitle}>Cost</div>
                  <div className={style.aboutBlockDescr}>
                    The cloud AWS architecture cost was about 6000$/month
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
                  <div className={style.aboutBlockTitle}>Database</div>
                  <div className={style.aboutBlockDescr}>
                    AWS lambdas were wrongly used, the database was not properly
                    normalized and indexed
                  </div>
                </div>
              </Parallax>
            </div>
          </div>
        </Parallax>
        {/* <Parallax>
          <div className={`${style.researchContainer} ${style.padding45}`}>
            <Image
              src={dataConceptCard}
              id="dataConceptCard"
              className={style.dataConceptCard}
              alt="dataConceptCard"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </Parallax> */}

        <Parallax
        // startScroll={1300}
        // endScroll={2000}
        // translateY={["-100px", "-300px"]}
        >
          <div className={style.aboutContainer}>
            <Parallax
              startScroll={1500}
              endScroll={2000}
              translateX={["-800px", "0px"]}
              className={style.staticParallax}
            >
              <div className={style.whatCanDoTitle}>DEVELOPMENT</div>
            </Parallax>
            <Parallax
              startScroll={300}
              endScroll={2000}
              translateX={["800px", "50px"]}
              className={style.staticParallax}
            >
              <div className={style.cardWithoutBorder}>
                <div className={style.aboutBlockDescr}>
                  Our team built the system and algorithms from the ground up,
                  selecting the technology stack, designing the application’s
                  security and architecture. The team consisted of a full-stack
                  developers, a part-time designer, a DevOps, and a PM/QA. We
                  started with an MVP that met and exceeded client expectations
                  within the expected timeframe and budget. After receiving
                  feedback, we continued to develop a custom solution allowing
                  users to create Email campaigns, manage automated comparing
                  and integrating with more and more SMS providers
                </div>
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
                  <div className={style.aboutBlockTitle}>Api Integration</div>
                  <div className={style.aboutBlockDescr}>
                    Our accomplished team has seamlessly integrated with
                    renowned SMS providers such as Telnyx, Twilio, Nexmo and
                    others ensuring robust communication solutions tailored to
                    customer needs
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
                  <div className={style.aboutBlockTitle}>
                    Recurring Campaigns
                  </div>
                  <div className={style.aboutBlockDescr}>
                    Our team meticulously developed an advanced system for
                    Recurring SMS& Email Campaigns, leveraging cutting-edge
                    technologies and a strategic approach. Implementing a robust
                    scheduling system, we engineered a user-friendly interface
                    that allows effortless setup of recurring campaigns. Through
                    seamless integration with leading SMS providers, including
                    Telnyx, Twilio, and Nexmo, we ensured reliable delivery and
                    execution. Our development process focused on scalability
                    and flexibility, enabling users to customize campaigns based
                    on diverse scheduling parameters. Rigorous testing and
                    optimization were integral, ensuring a flawless experience,
                    empowering businesses to engage audiences consistently and
                    efficiently through our innovative Recurring SMS Campaign
                    solution
                  </div>
                </div>
              </Parallax>
            </div>
          </div>
        </Parallax>

        <Parallax>
          <div className={`${style.researchContainer} ${style.padding45}`}>
            <div>
              <Image
                src={leadsCard1}
                className={style.dataConceptJobs}
                alt="dataConceptJobs"
                style={{
                  width: "90%",
                  height: "90%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "flex",
                  marginBottom: "32px",
                }}
              />
            </div>
            <div>
              <Image
                src={leadsCard2}
                className={style.dataConceptJobs}
                alt="dataConceptJobs"
                style={{
                  width: "90%",
                  height: "90%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "flex",
                  marginBottom: "32px",
                }}
              />
            </div>
            {/* <div>
            <Image
              src={leadsCard3}
              className={style.dataConceptJobs}
              alt="dataConceptJobs"
              style={{
                width: "90%",
                height: "90%",
                marginLeft: "auto",
                marginRight: "auto",
                display: "flex",
              }}
            />
          </div> */}
          </div>
        </Parallax>
      </ParallaxProvider>
      <div>
        <div className={style.getTouchWrapper}>
          <GetTouch id="getInTouch" />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LeadsPage;
