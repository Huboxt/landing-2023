import React from "react";
import Header from "@/components/Header/Header";
import GetTouch from "@/components/GetTouch/GetTouch";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import style from "@/pages/services/startups.module.css";
import appsIcon from "../../assets/img/apps-icon.svg";
import webIcon from "../../assets/img/websapp-icon.svg";
import uiIcon from "../../assets/img/uiux-icon.svg";
import mvpIcon from "../../assets/img/mvp-icon.svg";
import marketIcon from "../../assets/img/market-icon.svg";
import qualityIcon from "../../assets/img/quality-icon.svg";
import titleBG from "../../assets/img/title-background.svg";
import OurWorks from "@/components/OurWorks/OurWorks";
import FAQ from "@/components/FAQ/FAQ";

import { Parallax, ParallaxProvider } from "react-scroll-parallax";

const StartupsPage = () => {
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
            Software <br /> development <br /> for startups
          </div>
          <div className={style.startupsDescr}>
            <div>
              We develop quality applications offshore for early-stage, growing
              and fast-growing startups. We do it fast and for reasonable
              prices, so that startups hit the market earlier than competitor.
            </div>
          </div>
        </div>
        <div className={style.cardContainer}>
        <div className={style.cardBlock}>
          <div className={style.card1}>
            <Image src={appsIcon} alt="app" className={style.cardIcon} />
            <div className={style.cardTitle}>
              Apps scaling
            </div>
            <div className={style.cardTitleDesktop}>
              Apps <br /> scaling
            </div>
          </div>
          <div className={style.card2}>
            <Image src={webIcon} alt="web" className={style.cardIcon} />
            <div className={style.cardTitle}>
              Web, Mobile, <br /> SaaS apps
            </div>
            <div className={style.cardTitleDesktop}>
              Web, Mobile, <br /> SaaS apps
            </div>
          </div>
          <div className={style.card3}>
            <Image src={uiIcon} alt="ui" className={style.cardIcon} />
            <div className={style.cardTitle}>UI/UX</div>
            <div className={style.cardTitleDesktop}>UI/UX</div>
          </div>
          <div className={style.card4}>
            <Image src={mvpIcon} alt="mvp" className={style.cardIcon} />
            <div className={style.cardTitle}>
              Prototyping & MVP
            </div>
            <div className={style.cardTitleDesktop}>
              Prototyping <br /> & MVP
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>

      <ParallaxProvider>
        <Parallax
          startScroll={0} endScroll={700} translateY={['0px', '-200px']}
          className={style.staticParallax}
        >
          <div className={style.whatCanDoContainer}>
            <Parallax
              startScroll={0}
              endScroll={500}
              translateX={["-800px", "0px"]}
              className={style.staticParallax}
            >
              <div className={style.whatCanDoTitle}>
                What we can <br /> do for you
              </div>
            </Parallax>
            <div className={style.whatCanDoSubTitleBlock}>
              <div>
                <Parallax
                  startScroll={200}
                  endScroll={700}
                  translateX={["-800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.whatCanDoSubTitle}>
                    Early stage <br /> startup
                  </div>
                  <div className={style.whatCanDoSubTitleDesktop}>
                    Early <br /> stage <br /> startup
                  </div>
                </Parallax>
              </div>
              <div>
                <Parallax
                  startScroll={200}
                  endScroll={800}
                  translateX={["800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.whatCanDoCard}>
                    <div className={style.whatCanDoBlockTitle}>
                      Proof of Concept
                    </div>
                    <div className={style.whatCanDoBlockDescr}>
                      Proof of Concept is an experimental software designed to
                      test whether your idea is technically feasible. It is
                      mainly used to prove investors that your idea is not just
                      a dream but something real that can be done. You can also
                      use it for your own experiments to make things work.
                    </div>
                  </div>
                </Parallax>
                <Parallax
                  startScroll={400}
                  endScroll={1000}
                  translateX={["800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.whatCanDoCard}>
                    <div className={style.whatCanDoBlockTitle}>Prototyping</div>
                    <div className={style.whatCanDoBlockDescr}>
                      Prototype is a visual representation that looks and feels
                      like a real app but it imitates actual functionality. It
                      is a fast and cheap way to get early feedback from your
                      potential customers to validate business ideas and get
                      insightful feedback. It is also useful to visually explain
                      your value to investors and future partners.
                    </div>
                  </div>
                </Parallax>
                <Parallax
                  startScroll={700}
                  endScroll={1300}
                  translateX={["800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.whatCanDoCard}>
                    <div className={style.whatCanDoBlockTitle}>MVP</div>
                    <div className={style.whatCanDoBlockDescr}>
                      Minimal Viable Product has a minimum set of core features
                      enough for your real customers to try it. It helps to get
                      feedback from your target audience to find out if there is
                      demand and what to do next. If you have an MVP and a
                      positive market feedback your chance to get investors
                      money skyrockets 🚀
                    </div>
                  </div>
                </Parallax>
              </div>
            </div>
          </div>
        </Parallax>

        <Parallax
          startScroll={1200} endScroll={1900} translateY={['-100px', '-450px']}
          className={style.staticParallax}
        >
          <div className={style.researchContainer}>
            <div className={style.whatCanDoSubTitleBlock}>
              <div>
                <Parallax
                  startScroll={1300}
                  endScroll={1800}
                  translateX={["-800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.researchSubTitle}>
                    Growing <br /> startups
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
                    <div className={style.whatCanDoBlockTitle}>Web apps</div>
                    <div className={style.whatCanDoBlockDescr}>
                      Full-cycle development from the scratch. Frontend,
                      backend, user interface/experience, QA, post release
                      support. We gather your requirements, decide on optimal
                      architecture, technology and frameworks, develop, test,
                      release.
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
                    <div className={style.whatCanDoBlockTitle}>Mobile apps</div>
                    <div className={style.whatCanDoBlockDescr}>
                      Multiplatform and native mobile apps (iOS, Android).
                      Full-cycle development from requirement gathering to
                      AppStore & Google Play Approval.
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
                      Software as a service is an ecosystem of mobile, web,
                      desktop apps, cloud infrastructure, billing, payment
                      plans, third-party integrations, user feedback gathering,
                      usage data collection and processing. Everything is
                      designed to give value to users, earn money and gain
                      better data-based understanding to make grounded marketing
                      decisions.
                    </div>
                  </div>
                </Parallax>
                <Parallax
                  startScroll={2100}
                  endScroll={2800}
                  translateX={["800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.researchCard}>
                    <div className={style.whatCanDoBlockTitle}>UI/UX</div>
                    <div className={style.whatCanDoBlockDescr}>
                      Our creative talent shares the same passion as your
                      vision, bringing your prototype to life. We increase your
                      customers satisfaction through product redesign,
                      modernization, and branding.
                    </div>
                  </div>
                </Parallax>
              </div>
            </div>
          </div>
        </Parallax>

        <Parallax
          startScroll={2500} endScroll={3400} translateY={['200px', '-650px']}
          className={style.staticParallax} 
        >
          <div className={style.whatCanDoContainer}>
            <div className={style.whatCanDoSubTitleBlock}>
              <div>
                <Parallax
                  startScroll={2800}
                  endScroll={3400}
                  translateX={["-800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.whatCanDoSubTitle}>
                    Fast- <br /> growing <br /> startups
                  </div>
                </Parallax>
              </div>
              <div>
                <Parallax
                  startScroll={2800}
                  endScroll={3400}
                  translateX={["800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.whatCanDoCard}>
                    <div className={style.whatCanDoBlockTitle}>Scaling</div>
                    <div className={style.whatCanDoBlockDescr}>
                      When your product starts growing fast it is important to
                      handle the load properly to avoid downtimes and bad used
                      experience. Many businesses failed here! Let us upgrade
                      your architecture and infrastructure and help to scale
                      smoothly, providing great user experience for your
                      customers.
                    </div>
                  </div>
                </Parallax>
              </div>
            </div>
          </div>
        </Parallax>

        <Parallax
          startScroll={3200} endScroll={3900} translateY={['-500px', '-850px']}
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
                The walue <br /> we give
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
                      Go to <br /> market <br /> faster
                    </div>
                    <div className={style.valueSubTitleDesktop}>
                      Go to market faster
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
                      It is vital for startups to launch and update apps faster
                      than competitors. If you`re a pioneer with a brand new
                      product you have to hurry even more to prevent somebody
                      from stealing your idea and make it real faster than you.
                      <br />
                      <br />
                      It takes up to several months to build an in-house team:
                      hiring, onboarding, getting used to the project and team,
                      implementing work processes. So many startups lose months
                      of precious competitive race time, while their competitors
                      release applications, deliver updates and attract more and
                      more new users.
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
                      Decent <br /> quality, <br /> less costs
                    </div>
                    <div className={style.valueSubTitleDesktop}>
                      Decent quality, less costs
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
                      It is vital for startups to launch and update apps faster
                      than competitors. If you`re a pioneer with a brand new
                      product you have to hurry even more to prevent somebody
                      from stealing your idea and make it real faster than you.
                      <br />
                      <br />
                      It takes up to several months to build an in-house team:
                      hiring, onboarding, getting used to the project and team,
                      implementing work processes. So many startups lose months
                      of precious competitive race time, while their competitors
                      release applications, deliver updates and attract more and
                      more new users.
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
                      src={appsIcon}
                      alt="market"
                      className={style.valueSubTitleIcon}
                    />
                    <div className={style.valueSubTitle}>Flexibility</div>
                    <div className={style.valueSubTitleDesktop}>Flexibility</div>
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
                      In a startup you have to change fast to survive and win
                      the competition. It is common to experiment with features,
                      design and positioning. You have to pivot sometimes. After
                      finding a product-market fit you need to scale. All this
                      requires constant adjusting a roadmap, changing scope of
                      work, team structure and product’s architecture.
                      <br />
                      <br />
                      It is important to have a partner who understands and
                      supports you in this field.
                    </div>
                  </div>
                </Parallax>
              </div>
            </div>
            <div className={style.line}></div>
          </div>
        </Parallax>

        <Parallax
          startScroll={5100} endScroll={5800} translateY={['-100px', '-850px']}
          className={style.staticParallax}
        >
          <div className={style.getTouchContainer}>
            <div className={style.whatCanDoSubTitleBlock}>
              <div>
                <Parallax
                  startScroll={5700}
                  endScroll={6200}
                //   translateX={["-800px", "0px"]}
                  // opacity={[0,1]}
                  className={style.staticParallax}
                >
                  <div className={style.whatCanDoSubTitle}>
                    Have a startup? <br /> Share your thoughts <br /> with us
                  </div>
                </Parallax>
                <button
                  className={style.getTouchButton}
                  onClick={handleClickScroll}
                >
                  GET IN TOUCH
                </button>
              </div>
            </div>
          </div>
        </Parallax>

        <Parallax
         startScroll={5300} endScroll={6500} translateY={['-100px', '-950px']}
         className={style.staticParallax}
        >
          <div className={style.whatCanDoContainer}>
            <Parallax
              startScroll={2600}
              endScroll={3600}
              translateX={["-800px", "0px"]}
              className={style.staticParallax}
            >
              <div className={style.whatCanDoTitle}>
                Our main <br /> strengths
              </div>
            </Parallax>
            <div className={style.whatCanDoSubTitleBlock}>
              <div>
                <Parallax
                  startScroll={3000}
                  endScroll={3800}
                  translateX={["-800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.subTitleFlex}>
                    <div className={style.strengthsSubTitle}>
                      Elite enterprise <br /> training  + startup <br /> mindset
                    </div>
                    <div className={style.strengthsSubTitleDesktop}>
                      Elite enterprise training  + startup  mindset
                    </div>
                  </div>
                </Parallax>
              </div>
              <div>
                <Parallax
                  startScroll={3200}
                  endScroll={3800}
                  translateX={["800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.strengthsCard}>
                    <div className={style.strengthsDescription}>
                      It is vital for startups to launch and update apps faster
                      than competitors. If you`re a pioneer with a brand new
                      product you have to hurry even more to prevent somebody
                      from stealing your idea and make it real faster than you.
                      <br />
                      <br />
                      It takes up to several months to build an in-house team:
                      hiring, onboarding, getting used to the project and team,
                      implementing work processes. So many startups lose months
                      of precious competitive race time, while their competitors
                      release applications, deliver updates and attract more and
                      more new users.
                    </div>
                  </div>
                </Parallax>
              </div>
            </div>
            <div className={style.line}></div>

            <div className={style.whatCanDoSubTitleBlock}>
              <div>
                <Parallax
                >
                  <div className={style.subTitleFlex}>
                    <div className={style.strengthsSubTitle}>
                      Minimum bureaucracy and quick <br /> and quick
                      communication
                    </div>
                    <div className={style.strengthsSubTitleDesktop}>
                      Minimum bureaucracy and quick  and quick
                      communication
                    </div>
                  </div>
                </Parallax>
              </div>
              <div>
                <Parallax
                  startScroll={3600}
                  endScroll={4100}
                  translateX={["800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.strengthsCard}>
                    <div className={style.strengthsDescription}>
                      It is important to communicate and make decisions quickly
                      doing projects for startups. It assures a proper pace of
                      work which is important to beat their competitors. No time
                      to waste.
                      <br />
                      <br />
                      We built our teams and processes in a particular way to
                      maximize communication and decision making speed and
                      minimize bureaucracy.
                    </div>
                  </div>
                </Parallax>
              </div>
            </div>
            <div className={style.line}></div>

            <div className={style.whatCanDoSubTitleBlock}>
              <div>
                <Parallax
                  startScroll={4100}
                  endScroll={4600}
                  translateX={["-800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.subTitleFlex}>
                    <div className={style.strengthsSubTitle}>
                      Our own frameworks <br /> and best practices
                    </div>
                    <div className={style.strengthsSubTitleDesktop}>
                      Our own frameworks and best practices
                    </div>
                  </div>
                </Parallax>
              </div>
              <div>
                <Parallax
                  startScroll={4100}
                  endScroll={4600}
                  translateX={["800px", "0px"]}
                  className={style.staticParallax}
                >
                  <div className={style.strengthsCard}>
                    <div className={style.strengthsDescription}>
                      It is a part of our culture to treat the knowledge economy
                      seriously and become stronger every new project. We
                      accumulate knowledge, experience and insights to make our
                      own best practices, frameworks and ready-made solutions.
                      <br />
                      <br />
                      It helps to deliver projects easier, faster and less
                      expensively. This is how we give you a competitive
                      advantage, making you faster to release updates and richer
                      to charge marketing and sales.
                    </div>
                  </div>
                </Parallax>
              </div>
            </div>
            <div className={style.line}></div>
          </div>
        </Parallax>
        <Parallax
            startScroll={8000} endScroll={12900} translateY={['-1300px', '0px']}
            className={style.staticParallax}
        >
          <OurWorks />
          <FAQ />
          <Parallax
            translateY={['-150px', '0px']}
            className={style.staticParallax}
          >
          <div className={style.getTouchWrapper}>
            <GetTouch borderRadius="60px 60px 0px 0px" />
            <Footer />
          </div>
          </Parallax>
        </Parallax>
      </ParallaxProvider>
    </div>
  );
};

export default StartupsPage;
