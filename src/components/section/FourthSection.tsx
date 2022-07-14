import React from "react";
import * as S from "./FourthSectionStyle";

const FourthSection = () => {
  return (
    <>
      <S.Wrapper>
        <S.Title>
          <p>마이너리 사용자들의</p>
          <p>후기를 확인해보세요</p>
        </S.Title>
        <S.CardWrapper>
          <S.Card>
            <S.CardDescWrapper>
              <S.CardTitle>너무 제 취향인 어플이에요</S.CardTitle>
              <S.CardDescDay>
                <img src="/images/section/star.png" />
                <p>hysim1219</p>
              </S.CardDescDay>
              <S.CardDesc>
                와인과 파티를 좋아하던 저에게 꼭 필요하던 어플이에요!👍 친구들과
                찍은 사진, 함께 먹은 음식들, 저만을 위한 일기를 남길 수
                있어요.❤️
              </S.CardDesc>
            </S.CardDescWrapper>
          </S.Card>
          <S.Card>
            <S.CardDescWrapper>
              <S.CardTitle>와인기록 남기기 좋은 앱</S.CardTitle>
              <S.CardDescDay>
                <img src="/images/section/star.png" />
                <p>rightjin</p>
              </S.CardDescDay>
              <S.CardDesc>
                와인파티 할 때마다 사진만 찍어뒀었는데, 와인정보와 함께 일기로
                남겨둘 수 있어서 좋아요! 앱이 너무 이뻐요~!👍
              </S.CardDesc>
            </S.CardDescWrapper>
          </S.Card>
          <S.Card>
            <S.CardDescWrapper>
              <S.CardTitle>제가 딱 찾던 앱!</S.CardTitle>
              <S.CardDescDay>
                <img src="/images/section/star.png" />
                <p>와인러비더비</p>
              </S.CardDescDay>
              <S.CardDesc>
                한국어로 잘 정리할수있는 와인앱을 찾다 발견했는데 쓰기 편하고
                와인기록할수있어 좋습니다 잘 쓸게요 :)
              </S.CardDesc>
            </S.CardDescWrapper>
          </S.Card>
        </S.CardWrapper>
      </S.Wrapper>
      <S.Bg>
        <S.bgImg src="/images/section/section5Bg.png" />

        <S.QrDescs>
          <span>
            <p>내가 마신 와인과 이야기를 </p>
            <p>마이너리로 기록해</p>
            <p>나만의 와인일기장을 만들어봐요!</p>
            {/* <Store /> */}
          </span>
          <S.QrImg>
            <img src="/images/section/QrCode.png" />
            <p>Qr 코드를 찍고 마이너리를 만나보세요</p>
          </S.QrImg>
        </S.QrDescs>
      </S.Bg>
    </>
  );
};

export default FourthSection;
