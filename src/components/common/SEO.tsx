import Head from "next/head";
import siteMetadata from "database/sitemap";

const SEO = () => {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      {/* Default SEO */}
      <title>{siteMetadata.title}</title>
      <meta name="description" content={siteMetadata.description} />
      <meta name="keywords" content={siteMetadata.keywords} />
      <meta name="author" content={siteMetadata.author} />
      <meta name="reply-to" content={siteMetadata.email} />
      <link rel="canonical" href={siteMetadata.siteUrl} />
      {/* 로봇 방문 허용 */}
      <meta name="robots" content="follow, index" />
      {/* Open Graph */}
      <meta property="og:site_name" content={siteMetadata.sitename} />
      <meta property="og:title" content={siteMetadata.title} />
      <meta property="og:description" content={siteMetadata.description} />
      <meta property="og:url" content={siteMetadata.siteUrl} />
      <meta property="og:locale" content={siteMetadata.locale} />
      <meta property="og:type" content={siteMetadata.type} />
    </Head>
  );
};

export default SEO;
