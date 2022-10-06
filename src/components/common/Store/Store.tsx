import React from "react";
import Image from "next/image";
import * as S from "./Style";
const Store = () => {
  return (
    <>
      <S.StoreWrapper>
        <a href="https://play.google.com/store/apps/details?id=com.minery.app&hl=ko&gl=US">
          <S.styledButton>
            <div>
              <Image
                src="/images/googlePlay.png"
                width={30}
                height={30}
                alt="Googleplay"
              />
              {/* <img src="/images/googlePlay.png" /> */}
            </div>
            <span>Google Play</span>
          </S.styledButton>
        </a>
        <a href="https://apps.apple.com/kr/app/마이너리-나만의-와인-일기-와인-검색-기록-평가/id1608336149 ">
          <S.styledButton>
            <div>
              <Image
                src="/images/appleStore.png"
                width={30}
                height={34}
                alt="appleStore"
              />
            </div>
            <span>App Store</span>
          </S.styledButton>
        </a>
      </S.StoreWrapper>
    </>
  );
};

export default Store;
