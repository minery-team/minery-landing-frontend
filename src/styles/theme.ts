import { DefaultTheme } from "styled-components";

export const colors = {
  pointRed: "#A10000",
  pointWine: "#690000",
  white: "#FFF",
  black: "#000",
  brighterBg: "#F7F7F7",
  descText: "#777",
  sectionDescText: "#606167",
  defaultText: "#1B1B1B",
};

export const fontSize = {
  large: "34px",
  logo: "30px",
  title: "28px",
  text: "24px",
  mmallText: "18px",
  smallText: "16px",
  xsmallText: "14px",
  xxsmallText: "10px",
};

export const fontWeight = {
  bold1: 700,
  bold2: 600,
  medium: 400,
  light: 200,
};

export type ColorTypes = typeof colors;
export type FontSizeTypes = typeof fontSize;
export type FontWeightTypes = typeof fontWeight;

const theme: DefaultTheme = {
  colors,
  fontSize,
  fontWeight,
};

export default theme;
