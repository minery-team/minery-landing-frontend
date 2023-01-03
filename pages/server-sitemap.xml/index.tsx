import { getServerSideSitemap, ISitemapField } from "next-sitemap";
import { GetServerSideProps } from "next";
import { fetchTop10Wines } from "@/remotes/requester";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const baseUrl = "https://minery.co.kr";

  const defaultFields: ISitemapField[] = [
    {
      loc: baseUrl,
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      loc: `${baseUrl}/wine/search`,
      changefreq: "weekly",
      priority: 0.7,
    },
  ];

  const top10Wines = await fetchTop10Wines();
  const top10WineIds: ISitemapField[] = top10Wines.map(({ _id }) => ({
    loc: `${baseUrl}/wine/${_id}`,
    changefreq: "daily",
    priority: 1.0,
  }));

  return getServerSideSitemap(ctx, [...defaultFields, ...top10WineIds]);
};

export default function Sitemap() {}
