import React from "react";
import styled from "styled-components";

interface IconProps {
  path?: number;
}
const StarIcon = ({ path }: IconProps) => {
  return (
    <StarIconStyle
      width="25"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.5268 1.54557C20.9094 0.866929 21.8866 0.86693 22.2691 1.54557L27.7125 11.203C27.8552 11.4561 28.1009 11.6347 28.3858 11.6922L39.2526 13.8848C40.0163 14.0389 40.3182 14.9683 39.791 15.5418L32.2884 23.703C32.0917 23.917 31.9978 24.2059 32.0312 24.4946L33.3039 35.5071C33.3933 36.281 32.6027 36.8554 31.8944 36.5312L21.8142 31.9177C21.5499 31.7967 21.2461 31.7967 20.9818 31.9177L10.9016 36.5312C10.1933 36.8554 9.40264 36.281 9.49208 35.5071L10.7648 24.4946C10.7982 24.2059 10.7043 23.917 10.5076 23.703L3.00497 15.5418C2.47774 14.9683 2.77973 14.0389 3.54337 13.8848L14.4102 11.6922C14.6951 11.6347 14.9408 11.4561 15.0835 11.203L20.5268 1.54557Z"
        fill={path ? "#A10000" : "#D3D3D3"}
      />
    </StarIconStyle>
  );
};

const StarIconStyle = styled.svg<IconProps>`
  fill: ${(path) => (path ? "#A10000" : "#CCCCCC")};
`;

export default StarIcon;
