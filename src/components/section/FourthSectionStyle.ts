import styled from "styled-components";
import media from "src/styles/media";

export const Wrapper = styled.div`
  margin-top: 12rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.small} {
    margin-bottom: 7rem;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  ${media.small} {
    div:nth-child(1) {
      display: none;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.title};
  font-weight: ${({ theme }) => theme.fontWeight.bold2};
  line-height: 40px;
  margin-bottom: 52px;
  ${media.small} {
    font-size: ${({ theme }) => theme.fontSize.logo};
    line-height: 3rem;
  }
`;

export const Card = styled.div`
  display: flex;
  height: 200px;
  width: 296px;
  border-radius: 12px;
  margin-right: 10px;
  margin-left: 10px;
  img {
    width: inherit;
    object-fit: cover;
  }
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.04);
`;

export const CardDescWrapper = styled.span`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  padding: 20px;
`;

export const CardTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSize.smallText};
  font-weight: ${({ theme }) => theme.fontWeight.bold1};
  margin-bottom: 16px;
`;

export const CardDesc = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xsmallText};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: 24px;
`;
export const Starcontainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  p {
    margin-left: 16px;
    font-size: ${({ theme }) => theme.fontSize.xsmallText};
    font-weight: ${({ theme }) => theme.fontWeight.light};
  }
`;
export const CardDescDay = styled.span`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.xsmallText};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  width: 160px;
  height: 30px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const Bg = styled.div`
  margin-top: 8rem;
  width: 100%;
  height: 32rem;
  position: relative;
  display: flex;
  justify-content: center;
  ${media.small} {
    display: none;
  }
`;

export const bgImg = styled.img`
  width: inherit;
  object-fit: fill;
  background-color: #fff1f1;
`;

export const QrDescs = styled.div`
  position: absolute;
  top: 120px;
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: space-evenly;
  span {
    p {
      font-size: ${({ theme }) => theme.fontSize.title};
      font-weight: ${({ theme }) => theme.fontWeight.bold2};
      line-height: 40px;
    }
  }
  img {
    background-color: none;
  }
`;

export const QrImg = styled.div`
  width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: inherit;
    object-fit: cover;
  }
  p {
    margin-top: 20px;
    font-size: ${({ theme }) => theme.fontSize.xsmallText};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`;
