import React, { useMemo } from "react";

import useWindowWidth from "@/hooks/useWindowWidth";
import Breakpoints from "@/styles/breakpoints";

export const BANNER_CONTENTS = {
  title: (
    <React.Fragment>
      <p>와인이 쉬워지는 방법</p>
      <p>마이너리</p>
    </React.Fragment>
  ),
  tags: ["#와린이", "#와인초보", "#와인일기", "#와인검색"],
};

export const FIRST_CONTENTS = {
  reviewData: [
    {
      title: "여유로운 주말 한강나들이",
      description:
        "주말 한강나들이~ 쏟아지는 햇살아래 시작해서 와인잔에 노을이 물들때까지!.",
      date: "2021년 07월 18일",
      image: "/images/section/01/reviewImg01.png",
    },
    {
      title: "혼와하며 힐링한날",
      description:
        "간만에 혼자 쉬는 날! 가끔은 이런 시간도 필요하다. 쟁여놓은 가성비 갑 피노누아를 마시면서 힐링해서 너무 행복했다.",
      date: "2022년 05월 02일",
      image: "/images/section/01/reviewImg02.png",
    },
    {
      title: "제주 바다에서 와인 한 잔 🌊🍷",
      description:
        " 자주 먹던 와인도 바닷가에서 마시니 맛이 색다르게 느껴진다. 이번 제주 여행은 평생 잊지 못할것 같다! 💙",
      date: "2021년 07월 18일",
      image: "/images/section/01/reviewImg03.png",
    },
    {
      title: "동기들과 브라이덜샤워 🍾",
      description:
        " 오늘은 한 번 뿐인 나의 특별한 날! 내 사랑 은경이가 전에 맛있다고한걸 기억하고 로쉐마제 샤도네이를 가져왔따 😍😍😍",
      date: "2021년 12월 28일",
      image: "/images/section/01/reviewImg04.png",
    },
    {
      title: "나홀로 양조장 투어!",
      description:
        " 기억에 남는 와인은 2013년부터 제조생산하는 뱅꼬레와인 스타베리 오디 와인! 오디 특유의 달콤한 매력의 와인이었다.",
      date: "2021년 01월 09일",
      image: "/images/section/01/reviewImg05.png",
    },
  ],
};

export const SECOND_CONTENTS = {
  title: "어떤 와인을 찾고 있나요?",
  subTitle: (
    <React.Fragment>
      다양한 와인 정보와 다른 사람들의 <br /> 평가를 볼 수 있어요! <br />
      좋아하는 와인을 찾아 나만의 <br /> 와인창고에 담아두는건 어떤가요?
    </React.Fragment>
  ),
  imgs: ["/images/section/phone1.png", "/images/section/phone2.png"],
};

export const THIRD_CONTENTS = () => {
  const width = useWindowWidth();

  const badgeSizePerWidth = useMemo(() => {
    if (width < Breakpoints.mobile) return 60;
    else if (width < Breakpoints.tablet) return 100;
    return 180;
  }, [width]);

  const phoneSizePerWidth = useMemo(() => {
    if (width < Breakpoints.mobile) return { width: 153, height: 306 };
    else if (width < Breakpoints.tablet) return { width: 270, height: 547 };
    return { width: 339, height: 678 };
  }, [width]);

  return {  
    title: (
      <React.Fragment>
        와인을 기록하는 순간, <br /> 어떤 뱃지를 받게 될까요?
      </React.Fragment>
    ),
    subTitle: (
      <React.Fragment>
        차곡차곡 쌓이는 와인일기와 함께 <br /> 마이뱃지를 수집하는 재미도
        느껴보세요
      </React.Fragment>
    ),

    imgData: [
      {
        type: "icon",
        img: "/images/section/section3Ico1.png",
        width: badgeSizePerWidth,
        height: badgeSizePerWidth,
        info: [0, 1, { start: 0.88, end: 0.9 }],
      },
      {
        type: "icon",
        img: "/images/section/section3Ico2.png",
        width: badgeSizePerWidth,
        height: badgeSizePerWidth,
        info: [0, 1, { start: 0.78, end: 0.9 }],
      },
      {
        type: "icon",
        img: "/images/section/section3Ico3.png",
        width: badgeSizePerWidth,
        height: badgeSizePerWidth,
        info: [0, 1, { start: 0.48, end: 0.9 }],
      },
      {
        type: "phone",
        img: "/images/section/section3Phone.png",
        width: phoneSizePerWidth.width,
        height: phoneSizePerWidth.height,
        info: [1, 1, { start: 0.01, end: 1 }],
      },
      {
        type: "icon",
        img: "/images/section/section3Ico4.png",
        width: badgeSizePerWidth,
        height: badgeSizePerWidth,
        info: [0, 1, { start: 0.48, end: 0.9 }],
      },
      {
        type: "icon",
        img: "/images/section/section3Ico5.png",
        width: badgeSizePerWidth,
        height: badgeSizePerWidth,
        info: [0, 1, { start: 0.78, end: 0.9 }],
      },
      {
        type: "icon",
        img: "/images/section/section3Ico6.png",
        width: badgeSizePerWidth,
        height: badgeSizePerWidth,
        info: [0, 1, { start: 0.88, end: 0.9 }],
      },
    ],
  };
};

export const FOURTH_CONTENTS = {
  title: "마이너리 사용자들의 후기를 확인해보세요",
  reviewData: [
    {
      title: "너무 제 취향인 어플이에요",
      rate: 5,
      userId: "hysim1219",
      reviewText:
        "와인과 파티를 좋아하던 저에게 꼭 필요하던 어플이에요!👍 친구들과 찍은 사진, 함께 먹은 음식들, 저만을 위한 일기를 남길 수 있어요. ❤️",
    },
    {
      title: "와인기록 남기기 좋은 앱",
      rate: 5,
      userId: "rightjin",
      reviewText:
        "와인파티 할 때마다 사진만 찍어뒀었는데, 와인정보와 함께 일기로 남겨둘 수 있어서 좋아요! 앱이 너무 이뻐요~!👍",
    },
    {
      title: "제가 딱 찾던 앱!",
      rate: 5,
      userId: "와인러비더비",
      reviewText:
        "한국어로 잘 정리할수있는 와인앱을 찾다 발견했는데 쓰기 편하고 와인기록할수있어 좋습니다 잘 쓸게요 :)",
    },
  ],
};

export const FOOTER_CONTENTS = {
  title: (
    <React.Fragment>
      내가 마신 와인과 이야기를 <br /> 마이너리로 기록해 <br /> 나만의
      와인일기장을 만들어봐요!
    </React.Fragment>
  ),
  subTitle: "Qr 코드를 찍고 마이너리를 만나보세요",
  img: "/images/section/QrCode.png",
};
