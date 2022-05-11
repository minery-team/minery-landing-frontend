import React from "react";
import MainNavigaion from "./MainNavigaion";
import styled from "styled-components";

//이놈 타입 어떻게 달아야함..
const Layout = (props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  return (
    <Wrapper>
      <MainNavigaion />
      <Main>{props.children}</Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Main = styled.main`
  margin: 3rem auto;
  width: 90%;
`;

export default Layout;
