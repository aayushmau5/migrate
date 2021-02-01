import styles from "./Event.module.css";

interface EventData {
  title: string;
  about: string;
}

const Event: React.FC<EventData> = ({ title, about }) => {
  return (
    <div className={styles.eventContainer}>
      <div className={styles.right}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.about}>{about}</p>
      </div>
    </div>
  );
};

export default Event;
