import styles from "./Event.module.css";

export default function Event({ title, about }) {
  return (
    <div class={styles.eventContainer}>
      <div class={styles.right}>
        <h2 class={styles.title}>{title}</h2>
        <p class={styles.about}>{about}</p>
      </div>
    </div>
  );
}
