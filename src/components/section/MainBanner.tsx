import React from "react";
import Store from "../common/store/store";
import * as S from "./MainBannerstyle";

const MainBanner = () => {
  return (
    <S.Wrapper>
      <S.BackGround src="/images/mainBanner.svg" />
      <S.Text>
        <S.Tag>
          <p>#와린이</p>
          <p>#와인초보</p>
          <p>#와인일기</p>
          <p>#와인검색</p>
        </S.Tag>
        <S.Desc>
          <p>와인이 쉬워지는 방법</p>
          <p>마이너리</p>
        </S.Desc>
        <Store />
      </S.Text>
      <S.PhoneImg src="/images/phone.png" />
    </S.Wrapper>
  );
};

export default MainBanner;
