import { useState, useEffect, useRef } from "react";

export const useMotion = () => {
  const content = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [currentHeight, setCurrentHeight] = useState(0);
  const [currentYOffset, setCurrentYOffset] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    let scrollTop = document.documentElement.scrollTop; //스크롤 위치
    let margin = document.body.clientHeight; //사용자 화면 높이
    let currentStart = content.current.offsetTop;
    let height = content.current.offsetHeight;
    setCurrentHeight(height + 300);

    // 섹션의 스크롤 위치 (스크롤에서 prev 빼주기가 안되서 섹션시작점을 뺀 후 화면 높이를 대신 더해줌)
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
      if (
        currentYOffset >= partScrollStart &&
        currentYOffset <= partScrollEnd
      ) {
        calcedValue =
          ((currentYOffset - partScrollStart) / partScrollHeight) *
            (values[1] - values[0]) +
          values[0];
      }
      if (scrollRatio > 0.9) {
        calcedValue = 1;
      }
    }

    return calcedValue;
  };

  return {
    isActive,
    content,
    currentHeight,
    setCurrentHeight,
    currentYOffset,
    setCurrentYOffset,
    calcValue,
  };
};
