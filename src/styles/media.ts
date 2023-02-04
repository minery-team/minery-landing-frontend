import Breakpoints from "./breakpoints";

const mediaQuery = (maxWidth: number) => `@media(max-width:${maxWidth}px)`;

const { mobile, tabletS, tabletM, tablet, tabletL } = Breakpoints;

const media = {
  mobile: mediaQuery(mobile),
  tabletS: mediaQuery(tabletS),
  tabletM: mediaQuery(tabletM),
  tablet: mediaQuery(tablet),
  tabletL: mediaQuery(tabletL),

  custom: mediaQuery,
};

export default media;
