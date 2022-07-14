import React, { useEffect, useRef, useState } from "react";
import * as S from "./ThirdSectionStyle";

const ThirdSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handler = () => {
      const y = document.documentElement.scrollTop;
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) {
        return;
      }

      const offset = window.innerHeight - rect.height;
      console.log("offset", offset);
      console.log("rect.y", rect.y);
      if (rect.y > 400) {
        setOpacity(0);
      }
      console.log("rect.height", rect.height / 2);

      setOpacity(rect.y < 0 ? 1 : rect.y > rect.height / 2 ? 0 : rect.y * 0.15);
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  const excelerator = (exel, opacity) => {
    // console.log("나눈값", exel / opacity);
    return exel / opacity;
  };

  return (
    <S.Wrapper ref={ref}>
      <S.Title>
        <p>와인을 기록하는 순간,</p>
        <p>어떤 뱃지를 받게 될까요?</p>
      </S.Title>

      <S.ImgWrapper>
        <S.IcoImg style={{ opacity: Math.min(1, excelerator(1, opacity)) }}>
          <img src="/images/section/section3Ico1.png" />
        </S.IcoImg>
        <S.IcoImg style={{ opacity: Math.min(1, excelerator(10, opacity)) }}>
          <img src="/images/section/section3Ico2.png" />
        </S.IcoImg>
        <S.IcoImg style={{ opacity: Math.min(1, excelerator(100, opacity)) }}>
          <img src="/images/section/section3Ico3.png" />
        </S.IcoImg>
        <S.PhoneImg>
          <img src="/images/section/section3Phone.png" />
        </S.PhoneImg>
        <S.IcoImg style={{ opacity: Math.min(1, excelerator(100, opacity)) }}>
          <img src="/images/section/section3Ico4.png" />
        </S.IcoImg>
        <S.IcoImg style={{ opacity: Math.min(1, excelerator(10, opacity)) }}>
          <img src="/images/section/section3Ico5.png" />
        </S.IcoImg>
        <S.IcoImg style={{ opacity: Math.min(1, excelerator(1, opacity)) }}>
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
