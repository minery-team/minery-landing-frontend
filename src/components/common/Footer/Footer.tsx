import React from "react";
import Image from "next/image";

import IcoTistory from "../../../../public/images/tistoryW.svg";
import faceBookw from "../../../../public/images/faceBookW.svg";
import instaW from "../../../../public/images/instaW.svg";
import Link from "next/link";
import styled from "styled-components";
import media from "@/styles/media";

const Footer = () => {
  return (
    <Wrapper>
      <InfoContainer>
        <Logo>
          <Image
            src="/images/Minery.png"
            alt="minery"
            layout="fill"
            objectFit="cover"
          />
        </Logo>
        <FooterDesc>
          <Contact>
            <p>CONTACT</p>
            <p> | </p>
            <p>minery.app@gmail.com</p>
          </Contact>
          <Link href="https://han.gl/oUmxW">
            <Info>개인정보처리방침</Info>
          </Link>
        </FooterDesc>

        <SNSContainer>
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
        </SNSContainer>
      </InfoContainer>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 285px;
  background-color: ${({ theme }) => theme.colors.gray900};

  ${media.tablet} {
    height: 210px;
  }

  ${media.tabletS} {
    flex-direction: column;
    height: 290px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;

  ${media.tablet} {
    width: 800px;
  }

  ${media.tabletS} {
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    width: 390px;
    height: 100%;
  }
`;

const Logo = styled.div`
  position: relative;
  align-self: flex-start;
  width: 98px;
  height: 27px;

  ${media.tabletS} {
    width: 72.57px;
    height: 20px;
  }
`;

const FooterDesc = styled.span`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};
`;

const Contact = styled.span`
  display: flex;
  color: ${({ theme }) => theme.colors.white};
  p {
    font-size: 13px;
    margin-right: 12px;
  }

  ${media.tablet} {
    p {
      font-size: 12px;
    }
  }
`;

const Info = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-size: 13px;
  font-weight: 700;
  margin-top: 20px;

  ${media.tablet} {
    font-size: 12px;
  }
`;

const SNSContainer = styled.div`
  display: flex;
  a {
    position: relative;
    display: block;
    width: 40px;
    height: 40px;
    margin-right: 30px;

    ${media.tablet} {
      width: 26px;
      height: 26px;
    }
  }
`;

export default Footer;
