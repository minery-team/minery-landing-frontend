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
    <>
      <MainNavigaion />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
