import React from "react";
import Card from "@/ui/card";

const Articles = ({ articles }) => {
  // remove last item in array
  // const withoutLast = articles.slice(0, -1);
  return (
    <div className="max-w-6xl m-auto">
      <div className="grid grid-cols-2 gap-5">
        {/* <Card article={articles[0]} xClassNames="col-span-full" /> */}
        {articles.map((article, i) => (
          <Card article={article} key={article.attributes.slug} id={article.attributes.slug} />
        ))}
      </div>
    </div>
  );
};

export default Articles;
