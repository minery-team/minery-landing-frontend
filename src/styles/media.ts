import Breakpoints from "./breakpoints";

const mediaQuery = (maxWidth: number) => `@media(max-width:${maxWidth}px)`;

const { mobile, tablet } = Breakpoints;

const media = {
  mobile: mediaQuery(mobile),
  tablet: mediaQuery(tablet),

  custom: mediaQuery,
};

export default media;
