import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/GlobalStyles";
import theme from "styles/theme";
import Layout from "components/common/layout/Layout";
import SEO from "components/common/SEO";
import initMockAPI from "mocks/index";

function MyApp({ Component, pageProps }: AppProps) {
  if (process.env.NODE_ENV === "development") {
    initMockAPI();
  }

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <SEO />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
