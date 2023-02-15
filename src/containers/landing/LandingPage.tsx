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
      <Spacing height={200} />
      <FirstSection />
      <Spacing height={200} />
      <SecondSection />
      <Spacing height={200} />
      <ThirdSection />
      <Spacing height={200} />
      <FourthSection />
      <QrSection />
    </>
  );
};

export default LandingPage;
