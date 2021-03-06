import styles from "./Team.module.css";

interface TeamData {
  name: string;
  role: string;
  gitLink: string;
}

const Team: React.FC<TeamData> = ({ name, role, gitLink }) => {
  return (
    <div className={styles.card}>
      <header className={styles.cardHeader}>
        <h2>{name}</h2>
      </header>
      <div className={styles.role}>
        <p>{role}</p>
      </div>
      <div className={styles.link}>
        <a href={gitLink}>Github</a>
      </div>
    </div>
  );
};

export default Team;
