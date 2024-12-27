import { GetServerSideProps } from "next";
import { articles } from "../constants/article";

function generateSitemap() {
  const paths = ["about", "article", "demo", "product"];

  const url = "https://memos.co.id";
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${url}</loc>
    </url>
    ${paths
      ?.map(
        (path) =>
          `<url>
            <loc>${url}/${path}</loc>
        </url>`
      )
      .join("")}
    
    ${articles
      ?.map(
        (article) =>
          `<url>
              <loc>${url}/article/${article?.language?.id?.slug}</loc>
          </url>`
      )
      .join("")}
      
    ${articles
      ?.map(
        (article) =>
          `<url>
                <loc>${url}/article/${article?.language?.en?.slug}</loc>
            </url>`
      )
      .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Generate the XML sitemap with the categories data
  const sitemap = generateSitemap();

  context.res.setHeader("Content-Type", "text/xml");
  // Send the XML to the browser
  context.res.write(sitemap);
  context.res.end();

  return {
    props: {},
  };
};

export default SiteMap;
