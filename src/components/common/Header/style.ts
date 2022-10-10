import styled from "styled-components";
import media from "@/styles/media";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  padding: 0 116px;
  margin: 0px auto;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  ${media.mobile} {
    padding: 20px;
    margin: inherit;
    justify-content: space-between;
    width: inherit;
    ul {
      margin: 0;
      align-items: center;
      justify-content: flex-end;
    }
  }
`;

export const Menu = styled.div``;

export const LogoWrap = styled.a`
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  margin-left: 10px;
  margin-top: 5px;
`;

export const MenuContainer = styled.ul`
  display: flex;
  margin-left: 20px;
  width: 144px;
  margin-top: 8px;
  justify-content: space-around;
  ${media.mobile} {
    a:nth-child(-n + 3) {
      display: none;
    }
  }
`;

export const BtnWrap = styled.div`
  width: 120px;
`;
export const DownBtn = styled.div`
  display: none;
  width: 120px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.pointRed};
  border-radius: 44px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.pointRed};
  text-align: center;
  cursor: pointer;
  margin-top: 10px;
  ${media.mobile} {
    display: block;
  }
`;
