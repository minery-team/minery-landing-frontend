import React from "react";
import styled from "styled-components";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

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
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  z-index: 1;
  overflow: hidden;
  flex: 1;
`;

export default Layout;
