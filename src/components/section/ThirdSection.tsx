import React from "react";
import DOMPurify from "isomorphic-dompurify";
import styled from "styled-components";
import Image from "src/components/common/Image";
import { useMotion } from "src/hooks/useMotion";
import { THIRD_CONTENTS } from "src/database/main";
import media from "src/styles/media";

const ThirdSection = () => {
  const { title, subTitle, imgData } = THIRD_CONTENTS;
  const { content, currentYOffset, calcValue } = useMotion();

  return (
    <Wrapper ref={content}>
      <Title dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(title) }} />
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
      <Desc
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(subTitle) }}
      />
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

  ${media.small} {
    div:nth-child(4) {
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
  font-weight: ${({ theme }) => theme.fontWeight.bold2};
  line-height: 3.3rem;
  margin-bottom: 52px;
  text-align: center;
`;

const Desc = styled.div`
  color: ${({ theme }) => theme.colors.sectionDescText};
  font-size: ${({ theme }) => theme.fontSize.smallText};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  margin-top: 5rem;
  line-height: 32px;
  text-align: center;
`;

export default ThirdSection;
