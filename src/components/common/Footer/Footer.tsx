import React from "react";
import Image from "next/image";
import * as S from "./style";

import IcoTistory from "../../../../public/images/tistoryW.svg";
import faceBookw from "../../../../public/images/faceBookW.svg";
import instaW from "../../../../public/images/instaW.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <S.Wrapper>
      <S.InfoContainer>
        <S.Logo>
          <Image
            src="/images/Minery.png"
            alt="minery"
            layout="fill"
            objectFit="cover"
          />
        </S.Logo>
        <S.FooterDesc>
          <S.Contact>
            <p>CONTACT</p>
            <p> | </p>
            <p>minery.app@gmail.com</p>
          </S.Contact>
          <Link href="https://han.gl/oUmxW">
            <S.Info>개인정보처리방침</S.Info>
          </Link>
        </S.FooterDesc>

        <S.SNSContainer>
          <Link href="https://www.instagram.com/minery_app/?igshid=YmMyMTA2M2Y%3D">
            <a>
              <Image
                src={instaW}
                draggable="false"
                alt="인스타 링크"
                layout="fill"
                objectFit="contain"
              />
            </a>
          </Link>
          <Link href="https://www.facebook.com/minery.wine">
            <a>
              <Image
                src={faceBookw}
                draggable="false"
                alt="페이스북 링크"
                layout="fill"
                objectFit="contain"
              />
            </a>
          </Link>
          <Link href="https://minery.tistory.com/">
            <a>
              <Image
                src={IcoTistory}
                draggable="false"
                alt="티스토리 링크"
                layout="fill"
                objectFit="contain"
              />
            </a>
          </Link>
        </S.SNSContainer>
      </S.InfoContainer>
    </S.Wrapper>
  );
};

export default Footer;
