import Breakpoints from "./breakpoints";

const mediaQuery = (maxWidth: number) => `@media(max-width:${maxWidth}px)`;

const { mobile, tabletS, tabletM, tabletL } = Breakpoints;

const media = {
  mobile: mediaQuery(mobile),
  tabletS: mediaQuery(tabletS),
  tabletM: mediaQuery(tabletM),
  tabletL: mediaQuery(tabletL),

  custom: mediaQuery,
};

export default media;
