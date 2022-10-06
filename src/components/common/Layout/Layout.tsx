import React from "react";
import styled from "styled-components";
import Header from "components/common/Header";
import Footer from "components/common/Footer/Footer";

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <Wrapper>
      <Header />
      <Container>{props.children}</Container>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  z-index: 1;
  overflow: hidden;
`;

export default Layout;
