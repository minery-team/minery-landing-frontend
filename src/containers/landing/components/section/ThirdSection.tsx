import React from "react";
import styled from "styled-components";
import Image from "components/common/Image";
import { useMotion } from "hooks/useMotion";
import { THIRD_CONTENTS } from "database/main";
import media from "styles/media";

const ThirdSection = () => {
  const { title, subTitle, imgData } = THIRD_CONTENTS;
  const { content, currentYOffset, calcValue } = useMotion();

  return (
    <Wrapper ref={content}>
      <div>{title}</div>
      <ImgWrapper>
        {imgData.map((item, index) => {
          return (
            <IcoImg
              style={{ opacity: calcValue(item.info, currentYOffset) }}
              key={index}
            >
              <Image
                src={item.img}
                width={+item.width}
                height={+item.height}
                alt={item.img}
              />
            </IcoImg>
          );
        })}
      </ImgWrapper>
      <div>{subTitle}</div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-top: 8rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;
const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  div:nth-child(4) {
    margin: 0 3rem;
  }

  ${media.mobile} {
    div:nth-child(4) {
      margin: 0;
      width: 400px;
      display: flex;
      justify-content: center;
    }
  }
`;

const IcoImg = styled.div`
  img {
    object-fit: contain;
  }
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 3.3rem;
  margin-bottom: 52px;
  text-align: center;
  ${media.mobile} {
    font-size: ${({ theme }) => theme.fontSize.title};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`;

const Desc = styled.div`
  color: ${({ theme }) => theme.colors.sectionDescText};
  font-size: ${({ theme }) => theme.fontSize.smallText};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  margin-top: 5rem;
  line-height: 32px;
  text-align: center;
`;

export default ThirdSection;
