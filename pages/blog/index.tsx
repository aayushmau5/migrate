import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";

import styles from "../../styles/BlogIndex.module.css";
import Date from "../../components/Date";
import { getSortedPostsData } from "../../utils/getPosts";

const blogIndex: React.FC<any> = ({ postsData }) => {
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
};

export default blogIndex;

export const getStaticProps: GetStaticProps = async () => {
  const postsData = getSortedPostsData();

  return {
    props: {
      postsData,
    },
  };
};
