import React, { useMemo } from "react";
import Image from "next/image";
import styled from "styled-components";
import media from "@/styles/media";
import Store from "@/components/common/Store/Store";
import { BANNER_CONTENTS } from "@/database/main";
import useWindowWidth from "@/hooks/useWindowWidth";
import Breakpoints from "@/styles/breakpoints";

const MainBanner = () => {
  const { title, tags } = BANNER_CONTENTS;
  const width = useWindowWidth();

  const imageSizePerWidth = useMemo(() => {
    if (width < Breakpoints.mobile) return { width : 371, height: 302 };
    else if (width < Breakpoints.tablet) return { width: 450, height: 367 };
    return { width: 983, height: 800 };
  }, [width]);

  return (
    <Wrapper>
      <Banner>
        <Image src="/images/mainBanner.svg" layout="fill" alt="background" />
      </Banner>
      <BannerTag>
        <DescWrapper>
          <TagWarpper>
            <Tag>
              {tags.map((tag, index) => {
                return <span key={index}>{tag}</span>;
              })}
            </Tag>
            <BannerHeading>{title}</BannerHeading>
            <Store />
          </TagWarpper>
          <Phoneimg>
            <Image
              src="/images/phone.png"
              width={imageSizePerWidth.width}
              height={imageSizePerWidth.height}
              layout="fixed"
              alt="phone"
            />
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
  z-index: 1;
`;

const Banner = styled.div`
  width: 100%;
  height: 750px;
  img {
    width: inherit;
    height: inherit;
    object-fit: cover;
    object-position: center;
  }

  ${media.mobile} {
    min-height: 520px;
  }

  ${media.tablet} {
    height: 408px;
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

  ${media.mobile} {
    flex-direction: column;
  }
`;

const DescWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 1200px;
  justify-content: space-between;

  ${media.mobile} {
    flex-direction: column;
  }

  ${media.tablet} {
    width: 768px;
  }
`;

const TagWarpper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${media.mobile} {
    margin: 0;
    align-items: center;
  }
`;

const Tag = styled.span`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.mmallText};
  color: ${({ theme }) => theme.colors.white};
  width: 372px;
  gap: 22px;
  opacity: 0.7;

  ${media.mobile} {
    display: none;
  }
`;

const BannerHeading = styled.span`
  font-size: ${({ theme }) => theme.fontSize.bannerTitle};
  font-weight: ${({ theme }) => theme.fontWeight.extrabold};
  color: ${({ theme }) => theme.colors.white};
  margin-top: 30px;
  margin-bottom: 12px;
  line-height: 92px;
  width: 627px;

  ${media.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    text-align: center;
    font-weight: ${({ theme }) => theme.fontWeight.extrabold};
    font-size: ${({ theme }) => theme.fontSize.logo};
    line-height: 46px;
    p:nth-child(1) {
      font-weight: ${({ theme }) => theme.fontWeight.regular};
    }
  }


  ${media.tablet} {
    width: 300px;
    font-size: ${({ theme }) => theme.fontSize.large};
    line-height: 52px;
  }
`;

const Phoneimg = styled.div`
  margin-top: 80px;
  position: relative;
  right: 9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 100px;
  img {
    width: inherit;
    height: inherit;
    object-fit: contain;
  }

  ${media.mobile} {
    width: 371px;
    height: 302px;
    margin: 0 20px;
    z-index: -1;
    right: 0;
    margin-top: 0px;
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
  ${media.mobile} {
    display: block;
  }
`;

export default MainBanner;
