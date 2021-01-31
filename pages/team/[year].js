import Head from "next/head";
import styles from "../../styles/teams.module.css";

import { getAllTeamPaths } from "../../utils/getStaticData";
import Team from "../../components/TeamComponent/Team";

import team2019 from "../../Data/teams/PreviousTeam/2019.json";
import team2018 from "../../Data/teams/PreviousTeam/2018.json";

export default function Teams({ teamData }) {
  return (
    <>
      <Head>
        <title>Previous Team - JODC</title>
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

export function getStaticPaths() {
  const paths = getAllTeamPaths();
  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  switch (params.year) {
    case "2019":
      return {
        props: {
          teamData: team2019,
        },
      };
    case "2018":
      return {
        props: {
          teamData: team2018,
        },
      };
    default:
      return {
        teamData: team2019,
      };
  }
}
