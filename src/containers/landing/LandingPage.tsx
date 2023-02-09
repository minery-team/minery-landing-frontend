import React from "react";
import MainBanner from "@/containers/landing/components/section/MainBanner";
import FirstSection from "@/containers/landing/components/section/FirstSection";
import FourthSection from "@/containers/landing/components/section/FourthSection";
import QrSection from "@/containers/landing/components/section/QrSection";
import SecondSection from "@/containers/landing/components/section/SecondSection";
import ThirdSection from "@/containers/landing/components/section/ThirdSection";
import Spacing from "@/components/common/Spacing";
import useAOS from "@/hooks/useAOS";

const LandingPage = () => {
  useAOS();
  return (
    <>
      <MainBanner />
      <Spacing height={3} />
      <FirstSection />
      <Spacing height={3} />
      <SecondSection />
      <Spacing height={3} />
      <ThirdSection />
      <Spacing height={3} />
      <FourthSection />
      <Spacing height={3} />
      <QrSection />
    </>
  );
};

export default LandingPage;
