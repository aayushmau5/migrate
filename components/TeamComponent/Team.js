import styles from "./Team.module.css";

export default function Team({ name, role, gitLink }) {
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
}
