import React from "react";
import Image from "next/image";
import * as S from "./Style";

import useWindowWidth from "@/hooks/useWindowWidth";

const Store = () => {
  const width = useWindowWidth();

  return (
    <>
      <S.StoreWrapper>
        <a href="https://play.google.com/store/apps/details?id=com.minery.app&hl=ko&gl=US">
          <S.StyledButton>
              <Image
                src="/images/googlePlay.png"
                width={21}
                height={24}
                alt="Googleplay"
              />
            <S.MarketText>Google Play</S.MarketText>
          </S.StyledButton>
        </a>
        <a href="https://apps.apple.com/kr/app/마이너리-나만의-와인-일기-와인-검색-기록-평가/id1608336149 ">
          <S.StyledButton>
              <Image
                src="/images/appleStore.png"
                width={22}
                height={26}
                alt="appleStore"
              />
            <S.MarketText>App Store</S.MarketText>
          </S.StyledButton>
        </a>
      </S.StoreWrapper>
    </>
  );
};

export default Store;
