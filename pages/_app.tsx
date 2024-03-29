import SEO from "@/components/common/SEO/SEO";
import GlobalStyles from "@/styles/GlobalStyles";
import theme from "@/styles/theme";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { QueryClientProvider, QueryClient, Hydrate } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from "react";
import Layout from "@/components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <SEO />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Hydrate>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
