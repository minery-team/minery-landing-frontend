import React from "react";
import styled from "styled-components";
import { FOOTER_CONTENTS } from "@/database/main";
import Image from "next/image";
import Store from "@/components/common/Store/Store";
import media from "@/styles/media";

const QrSection = () => {
  const { title, subTitle, img } = FOOTER_CONTENTS;
  return (
    <Wrapper>
      <Bg>
        <BgImg
          layout="fill"
          objectFit="cover"
          src="/images/section/section5Bg.png"
          alt="배경화면"
        />
        <Desc>
          <TitleWrapper>
            <Title>{title}</Title>
            <Store />
          </TitleWrapper>
          <ImgWrapper>
            <Image src={img} width={310} height={310} alt={subTitle} />
            <SubTitle>{subTitle}</SubTitle>
          </ImgWrapper>
        </Desc>
      </Bg>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Bg = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 600px;
  margin-top: 164px;
  ${media.tablet} {
    display: none;
  }
`;
const BgImg = styled(Image)`
  background-color: #fff1f1;
`;

const Desc = styled.div`
  position: absolute;
  top: 120px;
  display: flex;
  width: 1200px;
  justify-content: space-between;
  align-items: center;
`;

const TitleWrapper = styled.div`
  align-self: flex-start;
`;

const Title = styled.div`
  font-size: 44px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 64px;
  margin-bottom: 54px;
`;

const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SubTitle = styled.p`
  margin-top: 1rem;
  font-size: ${({ theme }) => theme.fontSize.mmallText};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

export default QrSection;
