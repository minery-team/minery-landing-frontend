import theme from "styles/theme";

export type TextSize =
  | "xxs"
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "x2l"
  | "x3l"
  | "p1"
  | number;

export type TextWeight = "regular" | "light" | "bold" | "medium" | "extrabold";

export const getFontSize = (size: TextSize) => {
  if (size === "xxs") return 13;
  if (size === "xs") return 14;
  if (size === "sm") return 15;
  if (size === "base") return 16;
  if (size === "lg") return 18;
  if (size === "xl") return 20;
  if (size === "x2l") return 23;
  if (size === "x3l") return 28;
  if (size === "p1") return 16;
  return size;
};

export const getLineHeight = (size: TextSize) => {
  if (size === "xxs") return 18;
  if (size === "xs") return 20;
  if (size === "sm") return 22;
  if (size === "base") return 23;
  if (size === "lg") return 28;
  if (size === "xl") return 28;
  if (size === "x2l") return 32;
  if (size === "x3l") return 38;
  if (size === "p1") return 28;
};

export const getFontFamily = (weight: TextWeight) => {
  if (weight === "regular") return "NanumSquare-Regular";
  if (weight === "light") return "NanumSquare-Light";
  if (weight === "bold") return "NanumSquare-Bold";
  if (weight === "extrabold") return "NanumSquare-ExtraBold";
};

export const getFontWeight = (weight: TextWeight) => {
  if (weight === "regular") return "400";
  if (weight === "light") return "300";
  if (weight === "medium") return "600";
  if (weight === "bold") return "700";
  if (weight === "extrabold") return "800";
};

export interface TextProps {
  size?: TextSize;
  weight?: TextWeight;
  color?: string;
  center?: boolean;
  lineHeight?: TextSize;
}

export function useTextStyle({
  size = "base",
  weight = "regular",
  color: rawColor = theme.colors.gray900,
}: TextProps) {
  const fontSize = getFontSize(size);
  const fontFamily = getFontFamily(weight);
  const color = rawColor;
  const fontWeight = getFontWeight(weight);
  return { color, fontSize, fontFamily, fontWeight };
}
