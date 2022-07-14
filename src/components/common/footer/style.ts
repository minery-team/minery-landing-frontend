import { MenuContainer } from "./../header/style";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.colors.black};
  position: relative;
  display: flex;
  align-items: center;
`;

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
export const Logo = styled.div`
  width: 104px;

  img {
    width: inherit;
    object-fit: cover;
  }
`;

export const FooterDesc = styled.span`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};
`;

export const Contact = styled.span`
  display: flex;
  color: ${({ theme }) => theme.colors.white};
  p {
    margin-right: 12px;
  }
`;

export const Info = styled.span`
  color: ${({ theme }) => theme.colors.white};
  margin-top: 16px;
`;

export const SNSContainer = styled.div`
  a {
    margin-right: 12px;
  }
`;
