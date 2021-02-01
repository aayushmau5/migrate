import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/teams.module.css";

import { getAllTeamYear } from "../../utils/getTeamData";

export default function Teams({ teamYears }) {
  return (
    <>
      <Head>
        <title>Team - JODC</title>
      </Head>
      <div className={styles.mainTitle}>OUR TEAM</div>
      <section className={styles.cardList}>
        <ul>
          {teamYears.map((team) => (
            <li key={team.year}>
              <Link href={`/team/${team.year}`}>
                <a>{team.year}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export function getStaticProps() {
  const teamYears = getAllTeamYear();

  return {
    props: {
      teamYears,
    },
  };
}
