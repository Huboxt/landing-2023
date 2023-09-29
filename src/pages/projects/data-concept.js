import React from "react";
import Header from "@/components/Header/Header";
import GetTouch from "@/components/GetTouch/GetTouch";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import dataConceptCard from "../../assets/img/dataConceptCard.svg";
import aboutTitle from "../../assets/img/aboutTitle.svg";
import researchTitle from "../../assets/img/researchTitle.svg";
import golangIcon from "../../assets/img/stackIcons/golang-icon.svg";
import mysqlIcon from "../../assets/img/stackIcons/mysql-icon.svg";
import tsIcon from "../../assets/img/stackIcons/typescript.svg";
import nodeIcon from "../../assets/img/stackIcons/node-js.svg";
import style from "@/pages/projects/dataConceptPage.module.css";
import dataConceptTitle from "./dataConceptTitle.svg";
import dataConceptJobs1 from "./data-concept-jobs1.svg";
import dataConceptJobs2 from "./data-concept-jobs2.svg";
import dataConceptJobs3 from "./data-concept-jobs3.svg";
import numberIcon1 from "../../assets/img/numberIcon1.svg";
import numberIcon2 from "../../assets/img/numberIcon2.svg";
import numberIcon3 from "../../assets/img/numberIcon3.svg";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

const DataConceptPage = () => {
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
      <div>
        <Image
          src={dataConceptTitle}
          alt="dataConceptTitle"
          className={style.dataConceptTitle}
        />
      </div>
      <div className={style.dataConceptDescr}>
        <div>
          <div className={style.description}>
            The fast changing world of web development has <br />
            expanded our skill set and has made us experienced in <br />
            all major ui frameworks, which makes your application <br />
            look nice and modern while being and fast.
          </div>
          <button className={style.needSameButton} onClick={handleClickScroll}>
            I NEED THE SAME!
          </button>
        </div>
        <div
          className={`${style.stackContainer} ${style.dataConceptStackContainer}`}
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
        </div>
      </div>
      <ParallaxProvider>
        <Parallax style={{ display: "flex", justifyContent: "center" }}>
          <video autoPlay loop muted playsInline className={style.video}>
            <source src="/dataconcept-video.mp4" type="video/mp4" />
          </video>
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
                <div className={style.tableDescr}>Dataconcepts</div>
              </div>
              <div>
                <div className={style.tableTitle}>TEAM</div>
                <div className={style.tableDescr}>4</div>
              </div>
              <div>
                <div className={style.tableTitle}>TIMELINE</div>
                <div className={style.tableDescr}>5 months</div>
              </div>
              <div>
                <div className={style.tableTitle}>SERVICES</div>
                <div className={style.tableDescr}>Development</div>
              </div>
            </div>
            <Parallax
              startScroll={300}
              endScroll={1100}
              translateX={["-800px", "0px"]}
              className={style.staticParallax}
            >
              <Image
                src={aboutTitle}
                alt="aboutTitle"
                style={{ width: "40%", height: "40%" }}
              />
            </Parallax>
            <Parallax
              startScroll={100}
              endScroll={1400}
              translateX={["800px", "0px"]}
              className={style.staticParallax}
            >
              <div className={style.cardWithoutBorder}>
                <div className={style.aboutBlockDescr}>
                  The customer is a digital marketing agency. They use their own
                  custom CRM for newsletter through SMS and Email and a data
                  aggregation system which was sourcing it via API. Once they
                  started a fruitful partnership with data collection agencies,
                  they got so much data, and it caused target CRM performance
                  issues with inability to handle about 2 millions requests per
                  day. <br /> <br />
                  We’ve come up as a dedicated team to build a V2 data
                  aggregation service, which would be as a middle layer enricher
                  between agencies data and customer’s CRM.
                </div>
              </div>
            </Parallax>
          </div>
        </Parallax>
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
              <div className={style.whatCanDoTitle}>
                THE <br /> CHALLENGE
              </div>
            </Parallax>
            <Parallax
              startScroll={300}
              endScroll={2000}
              translateX={["800px", "50px"]}
              className={style.staticParallax}
            >
              <div className={style.cardWithoutBorder}>
                <div className={style.aboutBlockDescr}>
                  They asked us to keep their application’s business logic, but
                  make it generic and scalable. It came up with the custom data
                  workflow configurator service, which allows to manage incoming
                  data, store it, enrich and push to target endpoints, and not
                  stick to specific customer’s CRM. Rework architecture to make
                  it fast, scalable, less demanding to achieve stability and
                  reduce expenses on infrastructure.
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
        <Parallax>
          <div className={style.researchContainer}>
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
        </Parallax>

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
                  We decided to move from AWS to a dedicated server to gain more
                  freedom in terms of budget and customization. We used Goland
                  and MySQL to develop a microservice-based scalable backend. We
                  chose Golang to maximize server hardware utilization through
                  concurrency and multithreading combined with load and stress
                  tests are really good to maximize code optimization. We
                  achieve flawless code work through a number of stress tests
                  and code improvements.
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
                  <div className={style.aboutBlockTitle}>
                    Backend capability
                  </div>
                  <div className={style.aboutBlockDescr}>
                    The first challenge was to make a backend capable of getting
                    data from 2+ millions requests per day,
                    filtering/enriching/operating data of 200+ millions entries,
                    balancing upload and download using different strategies and
                    workflows.
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
                    Transfer & convert
                  </div>
                  <div className={style.aboutBlockDescr}>
                    The second challenge was to transfer and convert ~500
                    millions records to common db structure.
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
                  <div className={style.aboutBlockTitle}>Migrate data</div>
                  <div className={style.aboutBlockDescr}>
                    Third challenge to migrate legacy data flow logic to a new
                    generic workflow structure.
                  </div>
                </div>
              </Parallax>
            </div>
          </div>
        </Parallax>

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
              <div className={style.whatCanDoTitle}>IMPACT</div>
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
                  <div className={style.aboutBlockTitle}>Reduced expences</div>
                  <div className={style.aboutBlockDescr}>
                    We reduced infrastructure expenses 30 times from 6000$ to
                    200$ moving from AWS to dedicated server and optimizing
                    code.
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
                  <div className={style.aboutBlockTitle}>More transparency</div>
                  <div className={style.aboutBlockDescr}>
                    We added more transparency to data by adding advanced stats,
                    multi criteria filters, logs.
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
                  <div className={style.aboutBlockTitle}>Further scalling</div>
                  <div className={style.aboutBlockDescr}>
                    We made further scaling much easier due to optimal
                    microservice architecture.
                  </div>
                </div>
              </Parallax>
            </div>
          </div>
        </Parallax>

        <Parallax>
        <div className={style.researchContainer}>
          <div>
            <Image
              src={dataConceptJobs1}
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
              src={dataConceptJobs2}
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
              src={dataConceptJobs3}
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
          </div>
          </div>
        </Parallax>
      </ParallaxProvider>
      <div>
        <div className={style.getTouchWrapper}>
          <GetTouch />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default DataConceptPage;
