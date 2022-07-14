import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 80%;
  height: 60px;
  display: flex;
  padding: 0 40px;
  margin: 5px auto;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`;
export const LogoWrap = styled.div`
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
  justify-content: space-around;
`;
