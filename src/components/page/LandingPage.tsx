import React from "react";
import MainBanner from "src/components/section/MainBanner";
import Footer from "../common/Footer/Footer";
import FirstSection from "../section/FirstSection";
import FourthSection from "../section/FourthSection";
import QrSection from "../section/QrSection";
import SecondSection from "../section/SecondSection";
import ThirdSection from "../section/ThirdSection";

const LandingPage = () => {
  return (
    <>
      <MainBanner />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <QrSection />
      <Footer />
    </>
  );
};

export default LandingPage;
