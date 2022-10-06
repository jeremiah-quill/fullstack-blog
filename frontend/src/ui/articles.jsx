import React from "react";
import Card from "@/ui/card";
import FeaturedCard from "@/ui/featuredCard";

const Articles = ({ articles, classes = "" }) => {
  return (
    <div className="max-w-6xl m-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {articles.map((article, i) =>
          i === 0 ? (
            // <div className="p-8 pb-32 col-span-2 bg-gray-200 rounded-[.5rem]">
            <FeaturedCard
              article={article}
              key={article.attributes.slug}
              id={article.attributes.slug}
            />
          ) : (
            // </div>
            <Card article={article} key={article.attributes.slug} id={article.attributes.slug} />
          )
        )}
      </div>
    </div>
  );
};

export default Articles;
