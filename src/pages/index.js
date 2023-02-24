import React, { useState, useEffect }  from "react";
import Head from 'next/head';
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

export default function Home() {
  const [firstAnimation, setFirstAnimation] = useState(true)

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={style.firstScreenWrapper}>
          <div className={style.container}>
            <div>
              <Header firstAnimation={firstAnimation} setFirstAnimation={setFirstAnimation}/>
              {!firstAnimation && <FirstBlock />}
            </div>
            {!firstAnimation && <div className={style.skillsWrapper}>
              <div className={style.block}>
                <span className={style.name}>Development</span>
              </div>
              <div className={style.block}>
                <span className={style.name}>Design</span>
              </div>
              <div className={style.block}>
                <span className={style.name}>Management</span>
              </div>
            </div>}
          </div>
        </div>
          {!firstAnimation &&
            <>
              <SecondBlock />
              <ThirdBlock />
              <FourthBlock />
              <FifthBlock />
              <Service />
              <OurWorks />
              <Industries />
              <Clutch />
              <FAQ />
              <GetTouch />
              <Footer />
            </> 
          }
      </main>
    </>
  )
}
