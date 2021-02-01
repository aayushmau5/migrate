import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";

import styles from "../../styles/teams.module.css";
import { getAllTeamYear } from "../../utils/getTeamData";

const teamsLog: React.FC<any> = ({ teamYears }) => {
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
};

export default teamsLog;

export const getStaticProps: GetStaticProps = async () => {
  const teamYears = getAllTeamYear();

  return {
    props: {
      teamYears,
    },
  };
};
