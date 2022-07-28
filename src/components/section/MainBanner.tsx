import React from "react";
import styled from "styled-components";
import DOMPurify from "isomorphic-dompurify";
import media from "styles/media";
import Store from "../common/store/Store";
import { BANNER_CONTENTS } from "database/main";

const MainBanner = () => {
  const { title, tags } = BANNER_CONTENTS;
  return (
    <Wrapper>
      <Banner>
        <img src="/images/mainBanner.svg" />
      </Banner>
      <BannerTag>
        <DescWrapper>
          <TagWarpper>
            <Tag>
              {tags.map((tag, index) => {
                return <p key={index}>{tag}</p>;
              })}
            </Tag>
            <BannerHeading
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(title) }}
            />
            <Store />
          </TagWarpper>
          <Phoneimg>
            <img src="images/phone.png" />
          </Phoneimg>
          <a href="https://play.google.com/store/apps/details?id=com.minery.app&hl=ko&gl=US">
            <MobileBtn>앱 다운로드</MobileBtn>
          </a>
        </DescWrapper>
      </BannerTag>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const Banner = styled.div`
  width: 100%;
  height: 60vh;
  ${media.small} {
    height: 70vh;
  }
  img {
    width: inherit;
    height: inherit;
    object-fit: cover;
    object-position: center;
  }
`;

const BannerTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: absolute;
  top: 48%;
  transform: translateY(-50%);
  text-align: left;
`;

const Tag = styled.span`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.white};
  width: 292px;
  ${media.small} {
    display: none;
  }
`;

const BannerHeading = styled.span`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold2};
  color: ${({ theme }) => theme.colors.white};
  margin-top: 28px;
  margin-bottom: 12px;
  line-height: 1.8em;
  ${media.small} {
    text-align: center;
    p:nth-child(1) {
      font-weight: ${({ theme }) => theme.fontWeight.light};
    }
  }
`;

const Phoneimg = styled.div`
  width: 100%;
  height: 90%;
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
  ${media.small} {
    width: 80%;
    margin: 0 20px;
  }
`;
const TagWarpper = styled.div`
  margin: 0 256px;

  ${media.small} {
    margin: 0;
  }
`;
const DescWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  ${media.small} {
    flex-direction: column;
  }
`;

const MobileBtn = styled.div`
  display: none;
  width: 140px;
  padding: 20px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.defaultText};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  cursor: pointer;
  ${media.small} {
    display: block;
  }
`;

export default MainBanner;
