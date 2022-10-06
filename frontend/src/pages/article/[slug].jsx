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

  return (
    <Layout categories={categories.data}>
      <Seo seo={seo} />

      <div className="max-w-3xl m-auto my-16">
        <Image image={article.attributes.image} />
        {/* <h1>{article.attributes.title}</h1> */}
        {/* </NextImage> */}
        <div className="">
          <div className="">
            {/* <ReactMarkdown
              className="line-break"
              allowDangerousHtml={true}
              children={article.attributes.content}
            /> */}
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
      </div>
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
