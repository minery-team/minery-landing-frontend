import SEO from "@/components/common/SEO/SEO";
import GlobalStyles from "@/styles/GlobalStyles";
import theme from "@/styles/theme";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <SEO />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
