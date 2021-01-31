import Head from "next/head";

import { getAllPostIds, getPostData } from "../../utils/getPosts";

export default function blog({ blogData }) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </>
  );
}

export function getStaticPath() {
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
    params: {
      blogData,
    },
  };
}
