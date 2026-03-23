import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Parallax, ParallaxProvider} from 'react-scroll-parallax';
import SeoHead from '@/components/Seo/SeoHead';
import Head from 'next/head';
import { SITE_URL, DEFAULT_OG_IMAGE } from '@/lib/seo';
import Header from '../components/Header/Header';
import FirstBlock from '../components/FirstBlock/FirstBlock';
import Service from '../components/Service/Service';
import OurWorks from '../components/OurWorks/OurWorks';
import Industries from '../components/Industries/Industries.jsx';
import Clutch from '../components/Clutch/Clutch';
import FAQ from '../components/FAQ/FAQ';
import GetTouch from '../components/GetTouch/GetTouch';
import Footer from '../components/Footer/Footer';
import SecondBlock from '../components/SecondBlock/SecondBlock';
import ThirdBlock from '../components/ThirdBlock/ThirdBlock';
import FourthBlock from '../components/FourthBlock/FourthBlock';
import FifthBlock from '../components/FifthBlock/FifthBlock';
import style from './index.module.css';
import OurWorksPage from './our-works-page';
import StartupsPage from './services/startups';
import DataConceptPage from './projects/data-concept';
import LeadsPage from './projects/leads';
import MmsPage from './projects/mms';
import UploadlettersPage from './projects/uploadletters';
import PetmateAI from './projects/petmate';
import FlutterPage from './services/flutter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {
  const [allowHover, setAllowHover] = useState(false)

  const router = useRouter();

  const myEndFunction = () => {
    setAllowHover(true)
  }
  const handleScrollServices = (e) => {
    e.preventDefault();
    if(allowHover){
      var element = document.getElementById('services');
      var elementPosition = element.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset;      
      window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
      });
    }
  }
 
  useEffect(() => {
    if (process.browser){
      document.getElementById("whiteBackground")?.addEventListener('animationend', myEndFunction)
    }
    return() => {
      document.getElementById("whiteBackground")?.removeEventListener('animationend', myEndFunction)
    }
  },[])
  
  const darker = (percentage, id) => {
    // if(percentage > 0.08 && percentage < 0.5){
    //   document.getElementById(id).style.opacity = 0.3 - percentage
    // } 
    // else{
    //   if(percentage > 0.7){
    //     document.getElementById(id).style.opacity = 0.7
    //   } 
    //   else{
    //     document.getElementById(id).style.opacity = percentage - 0.2
    //   }
    // }
  }
  return (
    <>
      <SeoHead
        title="Software Development Company"
        description="HUBOXT — custom software development: web, UI/UX, mobile apps, and API integration. Straight-up engineering for teams that ship."
        path="/"
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'HUBOXT',
              url: `${SITE_URL}/`,
              logo: DEFAULT_OG_IMAGE,
              email: 'sales@huboxt.com',
              telephone: '+351963770487',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Tornimäe tn 3 // 5 // 7',
                addressLocality: 'Tallinn',
                addressRegion: 'Kesklinna linnaosa',
                postalCode: '10145',
                addressCountry: 'EE',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'HUBOXT',
              url: `${SITE_URL}/`,
              description:
                'Custom software development company: web, mobile, UI/UX, and API integration.',
              publisher: {
                '@type': 'Organization',
                name: 'HUBOXT',
                url: `${SITE_URL}/`,
              },
            }),
          }}
        />
      </Head>
      <main>
        <div className={style.firstScreenWrapper}>
          <div className={style.container}>
            <div>
              <Header mainHeaderStyle offsetPosition={9200}/>
              <FirstBlock />
            </div>
            <div className={style.skillsWrapper}>
              <div className={`${style.block} ${allowHover ? style.blockHover3 : ""}`} onClick={handleScrollServices}>
                <span className={style.name}>
                  Management
                  <div className={style.whiteBackground}>
                  Management 
                  </div>
                </span>
                <span className={style.description}>Orchestrating efficiency  through proactive management solutions</span>
              </div>
              <div className={`${style.block} ${allowHover ? style.blockHover2 : ""}`} onClick={handleScrollServices}>
                <span className={style.name}>
                  Design
                <div className={style.whiteBackground}>
                  Design
                </div>
                </span>
                <span className={style.description}>Transforming vision into seamless user interfaces</span>
              </div>
              <div className={`${style.block} ${allowHover ? style.blockHover : ""}`} onClick={handleScrollServices}>
                <span className={style.name}>
                 Development
                 <div id="whiteBackground" className={style.whiteBackground}>
                 Development
                 </div>
                </span>
                <span className={style.description}>Empowering your growth through expert development services</span>
              </div>
            </div>
          </div>
          <div className={style.skillsWrapperMobile}>
              <div className={`${style.block} ${allowHover ? style.blockHover : ""}`} onClick={handleScrollServices}>
                <span className={style.name}>
                  Development
                  <div className={style.whiteBackground}>
                  Development
                  </div>
                </span>
              </div>
              <div className={`${style.block} ${allowHover ? style.blockHover : ""}`} onClick={handleScrollServices}>
                <span className={style.name}>
                  Design
                <div className={style.whiteBackground}>
                  Design
                </div>
                </span>
              </div>
              <div className={`${style.block} ${allowHover ? style.blockHover : ""}`} onClick={handleScrollServices}>
                <span className={style.name}>
                 Management
                 <div id="whiteBackground" className={style.whiteBackground}>
                 Management
                 </div>
                </span>
              </div>
            </div>
        </div>
          <ParallaxProvider>
            <Parallax startScroll={0} endScroll={700} translateY={['0px', '-200px']}>
                <SecondBlock />
                <div id="darkBg" className={style.background}></div>
            </Parallax>
            <Parallax startScroll={400} endScroll={1200} translateY={['-100px', '-450px']} onProgressChange={(percentage) => darker(percentage, "darkBg")}>
                <ThirdBlock />
                <div id="darkBg1" className={style.background}></div>
            </Parallax>
            {/* <Parallax startScroll={900} endScroll={1500} translateY={['-330px', '-600px']} onProgressChange={(percentage) => darker(percentage, "darkBg1")}>
              <FourthBlock />
              <div id="darkBg2" className={style.background}></div>
            </Parallax>
            <Parallax startScroll={1400} endScroll={2000} translateY={['-600px', '-800px']} onProgressChange={(percentage) => darker(percentage, "darkBg2")}>
              <FifthBlock />
              <div id="darkBg3" className={style.background}></div>
            </Parallax> */}
            <Parallax startScroll={900} endScroll={1500} translateY={['-130px', '-450px']} onProgressChange={(percentage) => darker(percentage, "darkBg1")}>
            <Service />
              <div id="darkBg2" className={style.background}></div>
            </Parallax>
            <Parallax startScroll={1400} endScroll={10000} translateY={['-800px', '0px']} onProgressChange={(percentage) => darker(percentage, "darkBg3")}>
              <OurWorks />
              <Industries />
              <Clutch />
              <FAQ />
              <GetTouch />
              <Footer />
            </Parallax>
          </ParallaxProvider>
          <ToastContainer />
          {router.pathname === '/our-works-page' && <OurWorksPage />}
          {router.pathname === '/data-concept' && <DataConceptPage />}
          {router.pathname === '/leads' && <LeadsPage />}
          {router.pathname === '/mms' && <MmsPage />}
          {router.pathname === '/uploadletters' && <UploadlettersPage />}
          {router.pathname === '/petmate' && <PetmateAI />}
          {router.pathname === '/startups' && <StartupsPage />}
          {router.pathname === '/flutter' && <FlutterPage />}
      </main>
    </>
  )
}
