import React, { useEffect, useRef, useState } from "react";
import { useMotion } from "src/hooks/useMotion";
import * as S from "./ThirdSectionStyle";

const animationInfo = {
  values: {
    itemA: [0, 1, { start: 0.6, end: 0.9 }],
    itemB: [0, 1, { start: 0.7, end: 0.9 }],
    itemC: [0, 1, { start: 0.8, end: 0.9 }],
  },
};

const ThirdSection = () => {
  const content = useRef(null);
  const values = animationInfo.values;
  const [isActive, setIsActive] = useState(false);
  const [currentHeight, setCurrentHeight] = useState(0);
  const [currentYOffset, setCurrentYOffset] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // let currentYOffset = 0;
  const handleScroll = () => {
    let scrollTop = document.documentElement.scrollTop; //스크롤 위치
    let margin = document.body.clientHeight; //사용자 화면 높이
    let currentStart = content.current.offsetTop;
    let height = content.current.offsetHeight;
    setCurrentHeight(height + 300);

    // 섹션의 스크롤 위치 (스크롤에서 prev 빼주기가 안되서 임의로)
    setCurrentYOffset(scrollTop - currentStart + margin);

    if (scrollTop > currentStart - margin) {
      if (!isActive) setIsActive(true);
    }
  };

  const calcValue = (values, currentYOffset) => {
    let calcedValue = 0;
    const partScrollStart = values[2].start * currentHeight;
    const partScrollEnd = values[2].end * currentHeight;
    const partScrollHeight = partScrollEnd - partScrollStart;
    const scrollRatio = currentYOffset / currentHeight;

    if (isActive === true) {
      console.log("scrollRatio", scrollRatio);

      if (
        currentYOffset >= partScrollStart &&
        currentYOffset <= partScrollEnd
      ) {
        calcedValue =
          ((currentYOffset - partScrollStart) / partScrollHeight) *
            (values[1] - values[0]) +
          values[0];
        console.log("opacity", calcedValue);
      }
      if (scrollRatio > 0.9) {
        calcedValue = 1;
      }
    }

    return calcedValue;
  };

  return (
    <S.Wrapper ref={content}>
      <S.Title>
        <p>와인을 기록하는 순간,</p>
        <p>어떤 뱃지를 받게 될까요?</p>
      </S.Title>

      <S.ImgWrapper>
        <S.IcoImg style={{ opacity: calcValue(values.itemC, currentYOffset) }}>
          <img src="/images/section/section3Ico1.png" />
        </S.IcoImg>
        <S.IcoImg style={{ opacity: calcValue(values.itemB, currentYOffset) }}>
          <img src="/images/section/section3Ico2.png" />
        </S.IcoImg>
        <S.IcoImg style={{ opacity: calcValue(values.itemA, currentYOffset) }}>
          <img src="/images/section/section3Ico3.png" />
        </S.IcoImg>
        <S.PhoneImg>
          <img src="/images/section/section3Phone.png" />
        </S.PhoneImg>
        <S.IcoImg style={{ opacity: calcValue(values.itemA, currentYOffset) }}>
          <img src="/images/section/section3Ico4.png" />
        </S.IcoImg>
        <S.IcoImg style={{ opacity: calcValue(values.itemB, currentYOffset) }}>
          <img src="/images/section/section3Ico5.png" />
        </S.IcoImg>
        <S.IcoImg style={{ opacity: calcValue(values.itemC, currentYOffset) }}>
          <img src="/images/section/section3Ico6.png" />
        </S.IcoImg>
      </S.ImgWrapper>
      <S.Desc>
        <p>차곡차곡 쌓이는 와인일기와 함께</p>
        <p>마이뱃지를 수집하는 재미도 느껴보세요.</p>
      </S.Desc>
    </S.Wrapper>
  );
};

export default ThirdSection;
