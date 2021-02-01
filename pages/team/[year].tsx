import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";

import styles from "../../styles/teams.module.css";
import { getAllTeamPaths, getTeamData } from "../../utils/getTeamData";
import Team from "../../components/TeamComponent/Team";

const teams: React.FC<any> = ({ teamData }) => {
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
};

export default teams;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllTeamPaths();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const teamData = await getTeamData(params.year);
  return {
    props: {
      teamData: teamData.data,
    },
  };
};
