import React from "react";
import Articles from "@/ui/articles";
import CategoryFilter from "@/ui/categoryFilter";
import Layout from "@/ui/layout";
import Seo from "@/ui/seo";
import { fetchAPI } from "../lib/api";

const Home = ({ articles, categories, homepage }) => {
  console.log(categories);
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.attributes.seo} />
      {/* <div className=""> */}
      <div className="my-16">
        <div className="flex justify-center">
          <div className="my-8 px-4">
            <h1 className="my-4 text-5xl m-auto font-bold">{homepage.attributes.hero.title}</h1>
            <h2 className="text-xl">Keep reading to learn more.</h2>
          </div>
        </div>
        <CategoryFilter categories={categories} />
      </div>
      <Articles articles={articles} />
      {/* </div> */}
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", { populate: ["image", "category"] }),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ]);

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  };
}

export default Home;
