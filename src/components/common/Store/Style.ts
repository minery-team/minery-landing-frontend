import styled from "styled-components";
import media from "@/styles/media";

export const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 224px;
  height: 64px;
  background-color: #232323;
  border-radius: 45px;
  padding: 20px 28px;
  margin-right: 16px;
  cursor: pointer;
  gap: 3px;

  span {
    color: #fff;
    margin-left: 10px;
  }

  ${media.tablet} {
    width: 140px;
    height: 40px;
    padding: 12px 14px;
  }
`;

export const StoreWrapper = styled.div`
  display: flex;
  margin-top: 48px;
  ${media.mobile} {
    display: none;
  }
`;

export const MarketText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.subText};
  line-height: 18px;
  color: ${({ theme }) => theme.colors.white};

  ${media.tablet} {
    min-width: 95px;
    font-size: ${({ theme }) => theme.fontSize.xsmallText};
    line-height: 11px;
  }
`;