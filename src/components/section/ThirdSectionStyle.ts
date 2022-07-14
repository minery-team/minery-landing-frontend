import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 12rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.title};
  font-weight: ${({ theme }) => theme.fontWeight.bold2};
  line-height: 40px;
  margin-bottom: 52px;
`;

export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IcoImg = styled.div`
  width: 140px;
  margin-top: 188px;
  img {
    width: inherit;
    object-fit: cover;
  }
`;

export const PhoneImg = styled.div`
  width: 236px;

  img {
    width: inherit;
    object-fit: cover;
  }
`;

export const Desc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.sectionDescText};
  font-size: ${({ theme }) => theme.fontSize.smallText};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 24px;
`;
