import Head from "next/head";

import styles from "../../styles/BlogIndex.module.css";

import { getSortedPostsData } from "../../utils/getPosts";

export default function blogIndex() {
  const postsData = getSortedPostsData();

  return (
    <>
      <Head>
        <title>Blog - JODC</title>
      </Head>
      <h1>Blog</h1>
      {postsData.map((post) => {
        <div class={styles.postItem}>
          <h2>
            <Link href={`/blog/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </h2>
          <p>{post.excerpt}</p>
          <div class={styles.styles.postItemFooter}>
            <span class={styles.postItemDate}>— {post.printDate}</span>
          </div>
        </div>;
      })}
    </>
  );
}
