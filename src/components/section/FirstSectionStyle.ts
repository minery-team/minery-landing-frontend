import styled from "styled-components";
import media from "src/styles/media";

export const SectionWrapper = styled.div`
  margin-top: 5rem;
  width: 100%;
  ${media.small} {
    padding: 0 auto;
  }
`;

export const DescWrapper = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;
  overflow: hidden;
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold2};
  text-align: center;
  ${media.small} {
    span:nth-child(1) {
      display: block;
      margin-bottom: 20px;
    }
  }
`;

export const Desc = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30rem;
  color: ${({ theme }) => theme.colors.sectionDescText};
  font-size: ${({ theme }) => theme.fontSize.smallText};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 24px;
  margin-top: 1rem;
  p {
    margin-top: 5px;
  }
`;

export const CardList = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  div:nth-child(2) {
    margin-top: 34px;
    ${media.small} {
      margin-top: 120px;
    }
  }
  div:nth-child(4) {
    margin-top: 34px;
  }
  ${media.small} {
    justify-content: space-evenly;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 286px;
  height: 372px;
  border-radius: 12px;
  margin: 20px 10px;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.04);
  ${media.small} {
    width: 45%;
  }
`;

export const CardImg = styled.div`
  height: 180px;
  width: 286px;
  ${media.small} {
    width: 100%;
  }
  img {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
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
  line-height: 20px;
`;

export const CardDescDay = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xsmallText};
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 42px;
  cursor: pointer;
`;
export const Button = styled.button`
  border-radius: 28px;
  padding: 10px 20px;
  border: solid ${({ theme }) => theme.colors.pointRed} 0.5px;
  color: ${({ theme }) => theme.colors.pointRed};
  font-weight: ${({ theme }) => theme.fontWeight.bold2};
  cursor: pointer;
`;
