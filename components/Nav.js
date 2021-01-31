import Link from "next/link";
import styles from "../styles/nav.module.css";

export default function Nav() {
  return (
    <div className={styles.nav}>
      <Link href="/">
        <a>
          <img
            src="jodcMascotWB.svg"
            alt="JODC Mascot"
            className={styles.jodcMascotImg}
          />
        </a>
      </Link>
      <div className={styles.burgerContainer}>
        <div className={styles.hamburgerIcon}></div>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">
            <a className={styles.navLink}>home</a>
          </Link>
        </li>
        <li>
          <Link href="events">
            <a className={styles.navLink}>events</a>
          </Link>
        </li>
        <li>
          <Link href="team">
            <a className={styles.navLink}>team</a>
          </Link>
        </li>
        <li>
          <Link href="blog">
            <a className={styles.navLink}>blog</a>
          </Link>
        </li>
      </ul>
      <div className={styles.navOverlay}>
        <ul className={styles.navOverlayList}>
          <li>
            <Link href="/">
              <a>home</a>
            </Link>
          </li>
          <li>
            <Link href="events">
              <a>events</a>
            </Link>
          </li>
          <li>
            <Link href="team">
              <a>team</a>
            </Link>
          </li>
          <li>
            <Link href="blog">
              <a>blog</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
