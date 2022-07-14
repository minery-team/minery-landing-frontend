import React from "react";
import { Ref, useRef, useEffect } from "react";
import MainBanner from "src/components/section/MainBanner";
import Footer from "../common/footer/Footer";
import FirstSection from "../section/FirstSection";
import FourthSection from "../section/FourthSection";
import SecondSection from "../section/SecondSection";
import ThirdSection from "../section/ThirdSection";

const LandingPage = () => {
  const screenInfo = [
    {
      //0
      type: "sticky",
      heightNum: 5, //브라우저 높이의 5배로 scrollHeight 세팅
      scrollHeight: 0,
      objs: {},
    },
    {
      //1
      type: "sticky",
      heightNum: 5,
      scrollHeight: 0,
    },
    {
      //2
      type: "sticky",
      heightNum: 5,
      scrollHeight: 0,
    },
    {
      //3
      type: "normal",
      heightNum: 5,
      scrollHeight: 0,
    },
  ];

  //각 스크롤 섹션의 높이 세팅
  const setLayout = () => {
    for (let i = 0; i < screenInfo.length; i++) {
      screenInfo[i].scrollHeight = screenInfo[i].heightNum * window.innerHeight;
    }
    console.log(screenInfo);
  };

  return (
    <>
      <MainBanner />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Footer />
    </>
  );
};

export default LandingPage;
