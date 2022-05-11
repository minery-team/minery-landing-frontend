import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import Logo from "../../../public/images/Logo.svg";

const MainNavigaion = () => {
  return (
    <HeaderContainer>
      <LogoWrap>
        <Image src={Logo} draggable="false" />
        <Title>Minery</Title>
      </LogoWrap>
      <MenuContainer>
        <ContactButton>
          <Link href="/contact">Contact us</Link>
        </ContactButton>
        <SearchButton>
          <Link href="/search-wine">와인 검색하기</Link>
        </SearchButton>
      </MenuContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 90%;
  height: 70px;
  display: flex;
  padding: 0 40px;
  margin: 20px auto;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`;
const LogoWrap = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSize.logo};
  margin-left: 7px;
`;
const MenuContainer = styled.ul`
  display: flex;
  margin-left: 20px;
`;

const ContactButton = styled.label`
  display: flex;
  height: 40px;
  width: 133px;
  border-radius: 27px;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.smallText};
  color: ${({ theme }) => theme.colors.black};
`;
const SearchButton = styled.label`
  display: flex;
  height: 40px;
  width: 133px;
  border-radius: 27px;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.pointRed};
  font-size: ${({ theme }) => theme.fontSize.smallText};
  color: ${({ theme }) => theme.colors.white};
  margin-left: 30px;
`;

export default MainNavigaion;
