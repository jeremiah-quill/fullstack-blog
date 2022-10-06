import React from "react";
import Link from "next/link";
import NextImage from "@/ui/image";

const Card = ({ article, xClassNames = "" }) => {
  return (
    <Link href={`/article/${article.attributes.slug}`}>
      <a className="max-w-6xl">
        <div className={"image-container h-full"}>
          <NextImage image={article.attributes.image} />
        </div>
        {/* <div className="">
          <div className="">
            <NextImage image={article.attributes.image} />
          </div>
          <div className="">
            <p id="category" className="uk-text-uppercase">
              {article.attributes.category.data.attributes.name}
            </p>
            <p id="title" className="uk-text-large">
              {article.attributes.title}
            </p>
          </div>
        </div> */}
      </a>
    </Link>
  );
};

export default Card;
