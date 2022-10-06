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
  text: "#000",
  background: "#fff",
  tabIconDefault: "#ccc",
  gray: "#414141",
  gray50: "#f9fafb",
  gray100: "#f2f4f6",
  gray200: "#e5e8eb",
  gray300: "#d1d6db",
  gray400: "#b0b8c1",
  gray500: "#8b95a1",
  gray600: "#6b7684",
  gray700: "#4e5968",
  gray800: "#333d4b",
  gray900: "#1B1B1B",
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
  xxs: "13px",
  xs: "14px",
  sm: "15px",
  base: "16px",
  lg: "18px",
  xl: "20px",
  x2l: "24px",
  x3l: "28px",
  pl: "16px",
};

export const fontWeight = {
  light: 200,
  regular: 400,
  medium: 600,
  bold: 700,
  extrabold: 800,
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
