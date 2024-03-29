import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import media from "@/styles/media";
import SNSMenu from "../common/SNSMenu";

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
          <Link href="https://bit.ly/3o4kKs9" passHref>
            <Info>개인정보처리방침</Info>
          </Link>
        </FooterDesc>

        <SNSMenu />
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

  ${media.mobile} {
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

  ${media.mobile} {
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    padding-left: 26px;
  }
`;

const Logo = styled.div`
  position: relative;
  align-self: flex-start;
  width: 98px;
  height: 27px;

  ${media.mobile} {
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

export default Footer;
