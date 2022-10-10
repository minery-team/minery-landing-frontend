import siteMetadata from "@/database/sitemap";
import { NextSeo } from "next-seo";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
}

const SEO = ({ title, description, image }: SEOProps) => {
  const { defaultTitle, defaultDescription, siteUrl, defaultImage, sitename } =
    siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image || defaultImage,
    url: `${siteUrl}`,
    sitename: sitename,
  };

  return (
    <NextSeo
      title={seo.title}
      description={seo.description}
      canonical={seo.url}
      openGraph={{
        type: "website",
        locale: "ko_KR",
        url: seo.url,
        title: seo.title,
        description: seo.description,
        images: [
          {
            url: seo.image,
            width: 1200,
            height: 630,
          },
        ],
        site_name: seo.sitename,
      }}
    />
  );
};

export default SEO;
