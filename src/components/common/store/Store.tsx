import React from "react";
import * as S from "./Style";

const Store = () => {
  return (
    <>
      <S.StoreWrapper>
        <S.styledButton>
          <div>
            <img src="/images/googlePlay.png" />
          </div>
          <span>Google Play</span>
        </S.styledButton>
        <S.styledButton>
          <div>
            <img src="/images/appleStore.png" />
          </div>
          <span>App Store</span>
        </S.styledButton>
      </S.StoreWrapper>
    </>
  );
};

export default Store;
