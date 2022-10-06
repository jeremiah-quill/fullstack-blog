import React from "react";
import Link from "next/link";
import { useScrollPosition } from "../useScrollPosition";

const Nav = ({ categories, classes }) => {
  const scrollPosition = useScrollPosition();

  return (
    <header
      className={`w-full flex justify-between transition-all sticky top-0 z-10 ${
        scrollPosition > 50 ? "shadow-md" : ""
      }`}>
      <div className={`w-full flex justify-between max-w-6xl m-auto py-8 bg-white`}>
        <Link href="/">
          <a className="text-red-500">Strapi Blog</a>
        </Link>
        <nav className="">
          <ul className="flex gap-5">
            {categories.map((category) => {
              return (
                <li key={category.id}>
                  <Link href={`/category/${category.attributes.slug}`}>
                    <a className="">{category.attributes.name}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
