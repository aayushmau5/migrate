import Head from "next/head";
import Date from "../../components/Date";

import styles from "../../styles/BlogData.module.css";

import { getAllPostIds, getPostData } from "../../utils/getPosts";

export default function blog({ blogData }) {
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
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // params.id
  const blogData = await getPostData(params.id);
  return {
    props: {
      blogData,
    },
  };
}
