import React, { useState, useEffect } from "react";
import Link from "next/link";
import SNSMenu from "../common/SNSMenu";
import styled from "styled-components";
import media from "@/styles/media";
import WineSearchLink from "./WineSearchLink";
import TitleLogo from "./TitleLink";

const Header = () => {
  const [link, setLink] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const os = window.navigator.userAgent.includes('Mac') ? 'ios' : 'android';
      
      if (os === 'ios') setLink('https://apps.apple.com/kr/app/마이너리-나만의-와인-일기-와인-검색-기록-평가/id1608336149');
      else setLink('https://play.google.com/store/apps/details?id=com.minery.app');
    }
  }, []);

  return (
    <HeaderContainer>
      <HeaderContentContainer>
        <LeftContainer>
          <TitleLogo />
          <WineSearchLink />
        </LeftContainer>
        <SNSMenu isHeader />
        <Link href={link} passHref>
          <DownloadLink>앱 다운로드</DownloadLink>
        </Link>
      </HeaderContentContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 5;

  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;

const HeaderContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 1200px;
  height: 60px;

  ${media.mobile} {
    max-width: 346px;
  }

  ${media.tablet} {
    width: 768px;
  }

`;

const LeftContainer = styled.div`
  display: flex;
`;

const DownloadLink = styled.a`
  display: none;
  width: 120px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.pointRed};
  border-radius: 44px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.pointRed};
  text-align: center;

  ${media.mobile} {
    display: block;
  }
`;

export default Header;
