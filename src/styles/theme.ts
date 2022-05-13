import { DefaultTheme } from "styled-components";

export const colors = {
  pointRed: "#A10000",
  pointWine: "#690000",
  white: "#FFF",
  black: "#000",
  brighterBg: "#F7F7F7",
};

export const fontSize = {
  logo: "30px",
  title: "28px",
  text: "24px",
  smallText: "18px",
  xsmallText: "14px",
};

export type ColorTypes = typeof colors;
export type FontSizeTypes = typeof fontSize;

const theme: DefaultTheme = {
  colors,
  fontSize,
};

export default theme;
