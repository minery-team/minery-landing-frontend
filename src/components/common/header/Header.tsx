import React from "react";
import Image from "next/image";
import * as S from "./style";
import { FaInstagram } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import Logo from "../../../../public/images/Logo.svg";
import MineryLogo from "../../../../public/images/Minery.svg";
import IcoTistory from "../../../../public/images/Icotistory.svg";

const MainNavigaion = () => {
  return (
    <S.HeaderContainer>
      <S.LogoWrap>
        <Image src={Logo} draggable="false" />
        <S.Title>
          <Image src={MineryLogo} draggable="false" />
        </S.Title>
      </S.LogoWrap>
      <S.MenuContainer>
        <a href="https://www.instagram.com/minery_app/?igshid=YmMyMTA2M2Y%3D">
          <FaInstagram size={25} />
        </a>
        <a href="https://www.facebook.com/minery.wine">
          <BsFacebook size={25} />
        </a>
        <a href="https://minery.tistory.com/">
          <Image src={IcoTistory} draggable="false" />
        </a>
      </S.MenuContainer>
    </S.HeaderContainer>
  );
};

export default MainNavigaion;
