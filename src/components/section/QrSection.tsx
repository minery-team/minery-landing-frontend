import React from "react";
import styled from "styled-components";
import DOMPurify from "isomorphic-dompurify";
import { FOOTER_CONTENTS } from "database/main";
import Image from "components/common/Image";
import Store from "../common/store/Store";
import media from "styles/media";

const QrSection = () => {
  const { title, subTitle, img } = FOOTER_CONTENTS;
  return (
    <Wrapper>
      <Bg>
        <BgImg src="/images/section/section5Bg.png" />
        <Desc>
          <div>
            <Title
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(title) }}
            />
            <Store />
          </div>
          <ImgWrapper>
            <Image src={img} width={220} height={220} alt={img} />
            <SubTitle
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(subTitle) }}
            />
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
  margin-top: 8rem;
  width: 100%;
  height: 36rem;
  position: relative;
  display: flex;
  justify-content: center;
  ${media.small} {
    display: none;
  }
`;
const BgImg = styled.img`
  width: inherit;
  object-fit: fill;
  background-color: #fff1f1;
`;
const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold2};
  line-height: 3.3rem;
  margin-right: 4rem;
`;
const SubTitle = styled.p`
  margin-top: 1rem;
  font-size: ${({ theme }) => theme.fontSize.xsmallText};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;
const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    object-fit: contain;
  }
`;
const Desc = styled.div`
  position: absolute;
  top: 120px;
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: space-evenly;
  img {
    background-color: none;
  }
`;
export default QrSection;
