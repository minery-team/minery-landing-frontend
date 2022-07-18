import styled from "styled-components";
import media from "src/styles/media";

export const Wrapper = styled.div`
  margin-top: 12rem;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  ${media.small} {
    flex-direction: column;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 104px;
  ${media.small} {
    margin-left: 0;
    text-align: center;
  }
`;
export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.title};
  font-weight: ${({ theme }) => theme.fontWeight.bold2};
  line-height: 3rem;
`;

export const Desc = styled.div`
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.sectionDescText};
  font-size: ${({ theme }) => theme.fontSize.smallText};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 24px;
`;

export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  div:nth-child(2) {
    margin-top: 84px;
    margin-left: 20px;
  }
  ${media.small} {
    div:nth-child(2) {
      margin-top: 220px;
      margin-left: 20px;
    }
    div:nth-child(1) {
      margin-bottom: 40px;
    }
  }
`;

export const PhoneImg = styled.div`
  width: 236px;
  img {
    width: inherit;
    object-fit: cover;
  }
`;
