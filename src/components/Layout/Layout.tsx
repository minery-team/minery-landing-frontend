import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { PropsWithChildren } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

interface Props extends PropsWithChildren {}

const Layout = ({ children }: Props) => {
  const router = useRouter();
  const isDiaryPage = router.pathname.includes('diary');

  return (
    <Wrapper>
      {!isDiaryPage && <Header />}
      <Container isDiaryPage={isDiaryPage}>{children}</Container>
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

const Container = styled.main<{ isDiaryPage: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  z-index: 1;
  overflow: hidden;
  flex: 1;
  padding-top: ${({ isDiaryPage }) => !isDiaryPage && '65px'};
`;

export default Layout;
