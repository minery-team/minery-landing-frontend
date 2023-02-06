import React from "react";
import Image from "next/image";

import Logo from "/public/images/Logo.svg";
import MineryLogo from "/public/images/Minery.svg";
import Link from "next/link";
import SNSMenu from "../SNSMenu";
import styled from "styled-components";
import media from "@/styles/media";
import { useRouter } from "next/router";

const Header = () => {
  const { pathname } = useRouter();

  return (
    <Wrapper>
      <HeaderContainer>
        <TitleContainer>
          <Link href="/">
            <TitleImage>
              <Image src={Logo} alt="마이너리" />
              <div style={{ width: 10 }} />
              <Image src={MineryLogo} alt="Minery" />
            </TitleImage>
          </Link>
          {pathname !== "/wine/search" && (
            <Link href="/wine/search">
              <SearchButton>
                <SearchButtonContent>
                  와인 검색하기
                  <Image
                    src="/images/icons/ic_search.png"
                    width={16}
                    height={16}
                    alt="검색"
                  />
                </SearchButtonContent>
              </SearchButton>
            </Link>
          )}
        </TitleContainer>

        <SNSMenu isHeader />
        <Link href="https://play.google.com/store/apps/details?id=com.minery.app&hl=ko&gl=US">
          <DownloadButton>앱 다운로드</DownloadButton>
        </Link>
      </HeaderContainer>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 5;

  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 1200px;
  height: 60px;

  ${media.tablet} {
    width: 800px;
  }

  ${media.tabletS} {
    justify-content: space-between;
    width: 390px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
`;

const TitleImage = styled.a`
  display: flex;
  height: 35px;
`;

const SearchButton = styled.a`
  display: flex;
  align-items: center;
  width: 230px;
  height: 38px;
  margin-left: 24px;
  padding: 0px 24px;

  border: 1px solid #2e2e2e;
  border-radius: 27px;

  color: #aaaaaa;

  ${media.tabletS} {
    display: none;
  }
`;

const SearchButtonContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const DownloadButton = styled.a`
  display: none;
  width: 120px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.pointRed};
  border-radius: 44px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.pointRed};
  text-align: center;

  ${media.tabletS} {
    display: block;
  }
`;

export default Header;
