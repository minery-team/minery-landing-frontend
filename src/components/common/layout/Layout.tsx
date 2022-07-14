import React from "react";
import MainNavigaion from "../header/Header";
import styled from "styled-components";

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <Wrapper>
      <MainNavigaion />
      <Container>{props.children}</Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.white};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Layout;
