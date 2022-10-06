import React from "react";
import MainBanner from "containers/landing/components/section/MainBanner";
import FirstSection from "containers/landing/components/section/FirstSection";
import FourthSection from "containers/landing/components/section/FourthSection";
import QrSection from "containers/landing/components/section/QrSection";
import SecondSection from "containers/landing/components/section/SecondSection";
import ThirdSection from "containers/landing/components/section/ThirdSection";
import Spacing from "components/common/Spacing";

const LandingPage = () => {
  return (
    <>
      <MainBanner />
      <Spacing height={80} />
      <FirstSection />
      <Spacing height={80} />
      <SecondSection />
      <Spacing height={80} />
      <ThirdSection />
      <Spacing height={80} />
      <FourthSection />
      <Spacing height={80} />
      <QrSection />
    </>
  );
};

export default LandingPage;
