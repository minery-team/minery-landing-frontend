import React from "react";
import Store from "../common/store/Store";
import * as S from "./MainBannerstyle";

const MainBanner = () => {
  return (
    <S.Wrapper>
      <S.Banner>
        <img src="/images/mainBanner.svg" />
      </S.Banner>
      <S.BannerTag>
        <S.DescWrapper>
          <S.TagWarpper>
            <S.Tag>
              <p>#와린이</p>
              <p>#와인초보</p>
              <p>#와인일기</p>
              <p>#와인검색</p>
            </S.Tag>
            <S.BannerHeading>
              <p>와인이 쉬워지는 방법</p>
              <p>마이너리</p>
            </S.BannerHeading>
            <Store />
          </S.TagWarpper>
          <S.Phoneimg>
            <img src="images/phone.png" />
          </S.Phoneimg>
          <a href="https://play.google.com/store/apps/details?id=com.minery.app&hl=ko&gl=US">
            <S.MobileBtn>앱 다운로드</S.MobileBtn>
          </a>
        </S.DescWrapper>
      </S.BannerTag>
    </S.Wrapper>
  );
};

export default MainBanner;
