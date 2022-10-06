import React from "react";
import Link from "next/link";
import NextImage from "@/ui/image";
import Moment from "react-moment";

const Card = ({ article, classes = "" }) => {
  return (
    <div className="flex flex-col">
      <Link href={`/article/${article.attributes.slug}`}>
        <a className={`block no-underline text-inherit grow`}>
          <div className={"image-container h-[300px]"}>
            <NextImage image={article.attributes.image} />
          </div>
        </a>
      </Link>
      <div className="pt-2">
        <h1 className="text-xl font-bold mb-2">{article.attributes.title}</h1>
        <div className="flex justify-between items-center">
          <Moment format="MMM Do YYYY">{article.attributes.published_at}</Moment>
          <ul className="flex gap-2">
            <li className="list-none py-1 px-3 rounded-[45px] bg-[dodgerblue] text-white">test</li>
            <li className="list-none py-1 px-3 rounded-[45px] bg-[dodgerblue] text-white">test</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
