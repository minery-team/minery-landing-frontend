import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

type SnackBarProps = {
  text: string;
  time: number;
};

const SnackBar = ({ text, time }: SnackBarProps) => {
  const [target, setTarget] = useState<Element | null>(null);
  const ele = <Container>{text}</Container>;

  useEffect(() => {
    if (document) {
      setTarget(document.querySelector("#modal"));
    }
  }, []);

  if (!target) return;

  return ReactDOM.createPortal(ele, target);
};

const moving = keyframes`
0% {
  bottom: -60px;
}
10% {
  bottom: 20px;
}
90% {
  bottom: 20px;
}
100% {
  bottom: -60px;
}
`;
const Container = styled.div`
  position: fixed;
  bottom: 80px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 50px;
  background-color: #161515f0;
  border-radius: 8px;
  color: white;
  font-size: 1.2rem;
  font-weight: 300;
  z-index: 100;
  animation-name: ${moving};
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
`;

export default SnackBar;
