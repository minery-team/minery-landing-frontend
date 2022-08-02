import React from "react";
import MainBanner from "containers/landing/components/section/MainBanner";
import Footer from "components/common/footer/Footer";
import FirstSection from "containers/landing/components/section/FirstSection";
import FourthSection from "containers/landing/components/section/FourthSection";
import QrSection from "containers/landing/components/section/QrSection";
import SecondSection from "containers/landing/components/section/SecondSection";
import ThirdSection from "containers/landing/components/section/ThirdSection";

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
