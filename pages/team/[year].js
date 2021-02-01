import Head from "next/head";
import styles from "../../styles/teams.module.css";

import { getAllTeamPaths, getTeamData } from "../../utils/getTeamData";
import Team from "../../components/TeamComponent/Team";

export default function Teams({ teamData }) {
  return (
    <>
      <Head>
        <title>Team - JODC</title>
      </Head>
      <div className={styles.mainTitle}>OUR TEAM</div>
      <section className={styles.cardList}>
        {teamData.map((data) => (
          <Team
            key={data.id}
            name={data.name}
            role={data.role}
            gitLink={data.gitlink}
          />
        ))}
      </section>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllTeamPaths();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // params.year
  const teamData = await getTeamData(params.year);
  return {
    props: {
      teamData: teamData.data,
    },
  };
}
