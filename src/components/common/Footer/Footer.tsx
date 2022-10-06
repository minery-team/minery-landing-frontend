import React from "react";
import Image from "next/image";
import * as S from "./style";

import IcoTistory from "../../../../public/images/tistoryW.svg";
import faceBookw from "../../../../public/images/faceBookW.svg";
import instaW from "../../../../public/images/instaW.svg";

const Footer = () => {
  return (
    <S.Wrapper>
      <S.InfoContainer>
        <S.Logo>
          <img src="/images/Minery.png" />
        </S.Logo>
        <S.FooterDesc>
          <S.Contact>
            <p>CONTACT</p>
            <p> | </p>
            <p>minery.app@gmail.com</p>
          </S.Contact>
          <S.Info>
            <a href="https://han.gl/oUmxW">개인정보처리방침</a>
          </S.Info>
        </S.FooterDesc>

        <S.SNSContainer>
          <a href="https://www.instagram.com/minery_app/?igshid=YmMyMTA2M2Y%3D">
            <Image src={instaW} draggable="false" alt="인스타 링크" />
          </a>
          <a href="https://www.facebook.com/minery.wine">
            <Image src={faceBookw} draggable="false" alt="페이스북 링크" />
          </a>
          <a href="https://minery.tistory.com/">
            <Image src={IcoTistory} draggable="false" alt="티스토리 링크" />
          </a>
        </S.SNSContainer>
      </S.InfoContainer>
    </S.Wrapper>
  );
};

export default Footer;
