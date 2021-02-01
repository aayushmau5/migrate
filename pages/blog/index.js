import Head from "next/head";
import Link from "next/link";
import Date from "../../components/Date";

import styles from "../../styles/BlogIndex.module.css";

import { getSortedPostsData } from "../../utils/getPosts";

export default function blogIndex({ postsData }) {
  return (
    <>
      <Head>
        <title>Blog - JODC</title>
      </Head>
      <h1>Blog</h1>
      {postsData.map((post) => (
        <div key={post.id} className={styles.postItem}>
          <h2>
            <Link href={`/blog/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </h2>
          <div className={styles.postItemFooter}>
            <span className={styles.postItemDate}>
              — <Date dateString={post.date} />
            </span>
          </div>
        </div>
      ))}
    </>
  );
}

export function getStaticProps() {
  const postsData = getSortedPostsData();

  return {
    props: {
      postsData,
    },
  };
}
