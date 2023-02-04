import styled from "styled-components";
import media from "@/styles/media";

export const Wrapper = styled.footer`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 285px;
  background-color: ${({ theme }) => theme.colors.gray900};

  ${media.tablet} {
    height: 210px;
  }

  ${media.tabletS} {
    flex-direction: column;
    height: 290px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;

  ${media.tablet} {
    width: 800px;
  }

  ${media.tabletS} {
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    width: 390px;
    height: 100%;
  }
`;

export const Logo = styled.div`
  position: relative;
  align-self: flex-start;
  width: 98px;
  height: 27px;

  ${media.tabletS} {
    width: 72.57px;
    height: 20px;
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
    font-size: 13px;
    margin-right: 12px;
  }

  ${media.tablet} {
    p {
      font-size: 12px;
    }
  }
`;

export const Info = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-size: 13px;
  font-weight: 700;
  margin-top: 20px;

  ${media.tablet} {
    font-size: 12px;
  }
`;

export const SNSContainer = styled.div`
  display: flex;
  a {
    position: relative;
    display: block;
    width: 40px;
    height: 40px;
    margin-right: 30px;

    ${media.tablet} {
      width: 26px;
      height: 26px;
    }
  }
`;
