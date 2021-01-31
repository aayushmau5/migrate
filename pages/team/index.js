import Head from "next/head";
import styles from "../../styles/teams.module.css";

import Team from "../../components/TeamComponent/Team";

import current from "../../Data/teams/Current.json";

export default function Teams({ teamData }) {
  return (
    <>
      <Head>
        <title>Current Team - JODC</title>
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

export function getStaticProps() {
  return {
    props: {
      teamData: current,
    },
  };
}
