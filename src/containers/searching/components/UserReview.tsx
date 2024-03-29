import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import Text from "@/components/common/Text";

import AOS from "aos";
import "aos/dist/aos.css";
import useWindowWidth from "@/hooks/useWindowWidth";
import { aosDefaultConfig } from "@/utils/constants/aos";
import { MOCK_REVIEW_LIST } from "@/utils/constants/mock";
import UserReviewItem from "./UserReviewItem";
import Spacing from "@/components/common/Spacing";
import Breakpoints from "@/styles/breakpoints";

const UserReview = () => {
  const ReviewCount = MOCK_REVIEW_LIST.length;
  const width = useWindowWidth();
  const useAOS = () => {
    useEffect(() => {
      AOS.init(aosDefaultConfig);
    }, []);
  };

  const bannerInfo = useMemo(() => {
    if (width <= Breakpoints.mobile)
      return { image: "/images/downImg_m.png", width: 338, height: 180 };
    else return { image: "/images/appDownImgWeb.png", width: 720, height: 320 };
  }, [width]);

  const [link, setLink] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const os = window.navigator.userAgent.includes("Mac") ? "ios" : "android";

      if (os === "ios")
        setLink(
          "https://apps.apple.com/kr/app/마이너리-나만의-와인-일기-와인-검색-기록-평가/id1608336149"
        );
      else
        setLink("https://play.google.com/store/apps/details?id=com.minery.app");
    }
  }, []);

  useAOS();

  return (
    <Container>
      <TextWrapper>
        <Text size="lg" color="gray900" weight="medium">
          마이너리 사용자들의 평가
        </Text>
        <StyledText size="lg" color="gray400" weight="regular">
          {ReviewCount}
        </StyledText>
      </TextWrapper>
      <Spacing height={30} />
      {MOCK_REVIEW_LIST.map((review) => (
        <div key={review.id}>{<UserReviewItem review={review} />}</div>
      ))}
      <BackDrop>
        <a href={link}>
          <div data-aos="fade-up">
            <Image
              src={bannerInfo.image}
              width={bannerInfo.width}
              height={bannerInfo.height}
              alt="download app"
            />
          </div>
        </a>
      </BackDrop>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledText = styled(Text)`
  margin-left: 0.5rem;
`;

const BackDrop = styled.div`
  position: absolute;
  top: 33%;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 67%;
  backdrop-filter: blur(2px);
`;

export default UserReview;
