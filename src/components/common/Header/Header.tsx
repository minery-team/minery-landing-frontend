import React from "react";
import Image from "next/image";

import * as S from "./style";
import Logo from "/public/images/Logo.svg";
import MineryLogo from "/public/images/Minery.svg";
import SNSMenu from "../SNSMenu";
import Link from "next/link";

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.LogoWrap href="/">
        <Image src={Logo} draggable="false" alt="logo" />
        <S.Title>
          <Image src={MineryLogo} draggable="false" alt="logo" />
        </S.Title>
      </S.LogoWrap>
      <SNSMenu isHeader />
      <Link href="https://play.google.com/store/apps/details?id=com.minery.app&hl=ko&gl=US">
        <S.DownBtn>앱 다운로드</S.DownBtn>
      </Link>
    </S.HeaderContainer>
  );
};

export default Header;
