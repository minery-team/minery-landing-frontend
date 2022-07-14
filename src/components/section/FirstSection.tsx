import React from "react";
import * as S from "./FirstSectionStyle";

const FirstSection = () => {
  return (
    <S.SectionWrapper>
      <S.DescWrapper>
        <S.Title>와인으로 쓰는 그 날의 일기</S.Title>
        <S.Desc>
          <p>와인이 있어 더 특별했던 하루!</p>
          <p>내 마음대로 기록하고 공유해 보세요.</p>
        </S.Desc>
        <S.CardList>
          <S.Card>
            <img src="/images/section/01/reviewImg01.png" />
            <S.CardDescWrapper>
              <S.CardTitle>여유로운 주말 한강나들이</S.CardTitle>
              <S.CardDesc>
                주말 한강나들이~ 쏟아지는 햇살아래 시작해서 와인잔에 노을이
                물들때까지!
                <hr />
              </S.CardDesc>
              <S.CardDescDay>2021년 07월 18일</S.CardDescDay>
            </S.CardDescWrapper>
          </S.Card>
          <S.Card>
            <img src="/images/section/01/reviewImg02.png" />
            <S.CardDescWrapper>
              <S.CardTitle>혼와하며 힐링한날</S.CardTitle>
              <S.CardDesc>
                간만에 혼자 쉬는 날! 가끔은 이런 시간도 필요하다. 쟁여놓은
                가성비 갑 피노누아를 마시면서 힐링해서 너무 행복했다.
                <hr />
              </S.CardDesc>
              <S.CardDescDay>2021년 07월 18일</S.CardDescDay>
            </S.CardDescWrapper>
          </S.Card>
          <S.Card>
            <img src="/images/section/01/reviewImg03.png" />
            <S.CardDescWrapper>
              <S.CardTitle>제주 바다에서 와인 한 잔 🌊🍷</S.CardTitle>
              <S.CardDesc>
                자주 먹던 와인도 바닷가에서 마시니 맛이 색다르게 느껴진다. 이번
                제주 여행은 평생 잊지 못할것 같다! 💙
                <hr />
              </S.CardDesc>
              <S.CardDescDay>2021년 07월 18일</S.CardDescDay>
            </S.CardDescWrapper>
          </S.Card>
          <S.Card>
            <img src="/images/section/01/reviewImg04.png" />
            <S.CardDescWrapper>
              <S.CardTitle>동기들과 브라이덜샤워 🍾</S.CardTitle>
              <S.CardDesc>
                오늘은 한 번 뿐인 나의 특별한 날! 내 사랑 은경이가 전에
                맛있다고한걸 기억하고 로쉐마제 샤도네이를 가져왔따 😍😍😍
                <hr />
              </S.CardDesc>
              <S.CardDescDay>2021년 07월 18일</S.CardDescDay>
            </S.CardDescWrapper>
          </S.Card>
          <S.Card>
            <img src="/images/section/01/reviewImg05.png" />
            <S.CardDescWrapper>
              <S.CardTitle>나홀로 양조장 투어!</S.CardTitle>
              <S.CardDesc>
                기억에 남는 와인은 2013년부터 제조생산하는 뱅꼬레와인 스타베리
                오디 와인! 오디 특유의 달콤한 매력의 와인이었다.
                <hr />
              </S.CardDesc>
              <S.CardDescDay>2021년 07월 18일</S.CardDescDay>
            </S.CardDescWrapper>
          </S.Card>
        </S.CardList>
      </S.DescWrapper>
      <S.ButtonDiv>
        <S.Button> 와인일기 구경하기</S.Button>
      </S.ButtonDiv>
    </S.SectionWrapper>
  );
};

export default FirstSection;
