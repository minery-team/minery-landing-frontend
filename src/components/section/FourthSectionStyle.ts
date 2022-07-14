import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 12rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardWrapper = styled.div`
  display: flex;
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
  span {
    margin-bottom: 12px;
  }
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

export const CardDescDay = styled.span`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.xsmallText};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  p {
    margin-left: 16px;
  }
`;

export const Bg = styled.div`
  margin-top: 8rem;
  width: 100%;
  height: 32rem;
  position: relative;
  display: flex;
  justify-content: center;
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
