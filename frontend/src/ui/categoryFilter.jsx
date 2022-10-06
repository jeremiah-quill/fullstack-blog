import React from "react";
import Link from "next/link";

const CategoryFilter = ({ categories }) => {
  return (
    <ul className="flex justify-center gap-5 w-full">
      {categories.map((category) => {
        return (
          <li className="list-none py-2 px-6 rounded-[45px] bg-gray-200" key={category.id}>
            <Link href={`/category/${category.attributes.slug}`}>
              <a className="">{category.attributes.name}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoryFilter;
