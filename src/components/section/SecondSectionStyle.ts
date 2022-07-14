import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 12rem;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 104px;
`;
export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.title};
  font-weight: ${({ theme }) => theme.fontWeight.bold2};
  line-height: 40px;
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
  div:nth-child(2) {
    margin-top: 38px;
  }
`;

export const PhoneImg = styled.div`
  width: 236px;
  img {
    width: inherit;
    object-fit: cover;
  }
`;
