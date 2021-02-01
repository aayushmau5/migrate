import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";

import styles from "../../styles/BlogData.module.css";
import Date from "../../components/Date";
import { getAllPostIds, getPostData } from "../../utils/getPosts";

const blog: React.FC<any> = ({ blogData }) => {
  return (
    <>
      <Head>
        <title>{blogData.title}</title>
      </Head>
      <article className={styles.header}>
        <p>
          <Date dateString={blogData.date} /> ~
        </p>
        <h1>{blogData.title}</h1>
        <p>by {blogData.author}</p>
        <hr />
      </article>
      <div dangerouslySetInnerHTML={{ __html: blogData.contentHtml }} />
    </>
  );
};

export default blog;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blogData = await getPostData(params.id);
  return {
    props: {
      blogData,
    },
  };
};
