import React from "react";
import * as S from "./SecondSectionStyle";

const SecondSection = () => {
  return (
    <S.Wrapper>
      <S.TextWrapper>
        <S.Title>
          <p>어떤 와인을</p>
          <p>찾고 있나요?</p>
        </S.Title>

        <S.Desc>
          <p>다양한 와인 정보와 다른 사람들의</p>
          <p> 평가를 볼 수 있어요!</p>
          <p>좋아하는 와인을 찾아 나만의</p>
          <p> 와인창고에 담아두는건 어떤가요?</p>
        </S.Desc>
      </S.TextWrapper>

      <S.ImgWrapper>
        <S.PhoneImg>
          <img src="/images/section/phone1.png" />
        </S.PhoneImg>
        <S.PhoneImg>
          <img src="/images/section/phone2.png" />
        </S.PhoneImg>
      </S.ImgWrapper>
    </S.Wrapper>
  );
};

export default SecondSection;
