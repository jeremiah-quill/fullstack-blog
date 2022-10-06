import Moment from "react-moment";
// import ReactMarkdown from "markdown-to-jsx";
import ReactMarkdown from "react-markdown";
import Image from "@/ui/image";

import Seo from "@/ui/seo";
import Layout from "@/ui/layout";

import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";

const Article = ({ article, categories }) => {
  const imageUrl = getStrapiMedia(article.attributes.image);

  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true,
  };
  var yourNewValueWithBr = article.attributes.content.replace(/\n/g, "<br />");

  return (
    <Layout categories={categories.data}>
      <Seo seo={seo} />
      <div className="max-w-6xl px-2 m-auto my-16">
        <header className="grid md:grid-cols-2 gap-4">
          <div className="flex flex-col pr-8 gap-4">
            <div className="flex gap-2 items-center">
              <h2 className="font-bold">{article.attributes.category.data.attributes.name}</h2>
              <Moment format="MMM Do YYYY">{article.attributes.published_at}</Moment>
            </div>
            <h1 className="text-6xl grow">{article.attributes.title}</h1>

            <div className="flex items-center gap-2">
              {article.attributes.author.data.attributes.picture && (
                <img
                  src={getStrapiMedia(article.attributes.author.data.attributes.picture)}
                  alt={
                    article.attributes.author.data.attributes.picture.data.attributes
                      .alternativeText
                  }
                  style={{
                    position: "static",
                    borderRadius: "20%",
                    height: 60,
                  }}
                />
              )}
              <div>
                <div className="font-bold">{article.attributes.author.data.attributes.name}</div>
                <div>blah blah blah</div>
              </div>
            </div>
          </div>

          <div className={"image-container"}>
            <Image image={article.attributes.image} />
          </div>
        </header>
        <div className="text-xl my-28">
          {/* <ReactMarkdown
              className="line-break"
              allowDangerousHtml={true}
              children={article.attributes.content}
            /> */}
          <div dangerouslySetInnerHTML={{ __html: yourNewValueWithBr }}></div>
        </div>
      </div>

      {/* <div className="max-w-3xl m-auto my-16">
        <Image image={article.attributes.image} />
        <div className="">
          <div className="">
            <div className="my-16">
              <div dangerouslySetInnerHTML={{ __html: article.attributes.content }}></div>
            </div>
            <hr className="my-8" />
            <div className="">
              <div>
                {article.attributes.author.data.attributes.picture && (
                  <img
                    src={getStrapiMedia(article.attributes.author.data.attributes.picture)}
                    alt={
                      article.attributes.author.data.attributes.picture.data.attributes
                        .alternativeText
                    }
                    style={{
                      position: "static",
                      borderRadius: "20%",
                      height: 60,
                    }}
                  />
                )}
              </div>
              <div className="uk-width-expand">
                <p className="uk-margin-remove-bottom">
                  By {article.attributes.author.data.attributes.name}
                </p>
                <p className="uk-text-meta uk-margin-remove-top">
                  <Moment format="MMM Do YYYY">{article.attributes.published_at}</Moment>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </Layout>
  );
};

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/articles", { fields: ["slug"] });

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articlesRes = await fetchAPI("/articles", {
    filters: {
      slug: params.slug,
    },
    populate: ["image", "category", "author.picture"],
  });
  const categoriesRes = await fetchAPI("/categories");

  return {
    props: { article: articlesRes.data[0], categories: categoriesRes },
    revalidate: 1,
  };
}

export default Article;
