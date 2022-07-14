import styled from "styled-components";

export const SectionWrapper = styled.div`
  margin-top: 5rem;
  width: 100%;
`;

export const DescWrapper = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;
  overflow: hidden;
`;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.fontSize.logo};
  font-weight: ${({ theme }) => theme.fontWeight.bold1};
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
  height: 25rem;
  div:nth-child(2) {
    margin-top: 34px;
  }
  div:nth-child(4) {
    margin-top: 34px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 336px;
  width: 286px;
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
  line-height: 20px;
`;

export const CardDescDay = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xsmallText};
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;
export const Button = styled.button`
  border-radius: 28px;
  padding: 10px 20px;
  border: solid ${({ theme }) => theme.colors.pointRed} 0.5px;
  color: ${({ theme }) => theme.colors.pointRed};
  font-weight: ${({ theme }) => theme.fontWeight.bold2};
  cursor: pointer;
`;
