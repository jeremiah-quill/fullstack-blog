import React from "react";
import Link from "next/link";
import NextImage from "@/ui/image";
import Moment from "react-moment";

const FeaturedCard = ({ article = "", classes = "" }) => {
  return (
    <Link href={`/article/${article.attributes.slug}`}>
      <a
        className={`block px-8 pt-8 md:col-span-2 bg-gray-200 rounded-[.5rem] no-underline hover: text-inherit`}>
        <div className={"image-container"}>
          <NextImage image={article.attributes.image} />
        </div>

        <div className="py-8">
          <h1 className="text-3xl font-bold mb-8">{article.attributes.title}</h1>
          <div className="flex justify-between items-center">
            <Moment format="MMM Do YYYY">{article.attributes.published_at}</Moment>
            <ul className="flex gap-5">
              <li className="list-none py-2 px-6 rounded-[45px] bg-[dodgerblue] text-white">
                test
              </li>
              <li className="list-none py-2 px-6 rounded-[45px] bg-[dodgerblue] text-white">
                test
              </li>
            </ul>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default FeaturedCard;
