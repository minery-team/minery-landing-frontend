import React from "react";
import * as S from "./Style";

const Store = () => {
  return (
    <>
      <S.StoreWrapper>
        <a href="https://play.google.com/store/apps/details?id=com.minery.app&hl=ko&gl=US">
          <S.styledButton>
            <div>
              <img src="/images/googlePlay.png" />
            </div>
            <span>Google Play</span>
          </S.styledButton>
        </a>
        <a href="">
          <S.styledButton>
            <div>
              <img src="/images/appleStore.png" />
            </div>
            <span>App Store</span>
          </S.styledButton>
        </a>
      </S.StoreWrapper>
    </>
  );
};

export default Store;
