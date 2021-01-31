import Head from "next/head";
import Link from "next/link";
import styles from "../styles/index.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>JODC | JIIT Open-Source Developers Circle</title>
      </Head>
      <section className={styles.sectionHeader}>
        <div className={styles.logoContainer}>
          <div className={styles.logoFront}>
            <img alt="JODC Logo" src="/jodcLogoWB.svg" />
            <p>JIIT Open-Source Developers Circle</p>
          </div>
        </div>

        <div className={styles.social}>
          <a href="https://github.com/jiitodc">GITHUB</a>
          <a href="https://t.me/jiitodc">TELEGRAM</a>
          <a href="https://twitter.com/jiitodc">TWITTER</a>
          <a href="https://www.facebook.com/groups/jiitodc">FACEBOOK</a>
        </div>
      </section>
      <section className={styles.sectionAbout}>
        <div className={styles.aboutUs}>
          <h2>ABOUT US</h2>
          <div className={styles.divider}></div>
          <p>
            According to GitHub’s “State of the Octoverse” report 2019, 99% of
            software projects in the world use Open Source Technologies in some
            way or the other. Open source has undoubtably changed the world, and
            we, the JODC (JIIT Open-Source Developers Circle) aim to help
            students to become a part of it.
            <br />
            <br />
            The JODC is an initiative by the students of JIIT-128 to promote
            open source culture. The hub is all about contributing to and
            collaborating on projects, networking, learning together and guiding
            students. We conduct talks, workshops, activities, one-to-one
            sessions and dev-sprints to mentor students.
            <br />
            <br />
            We encourage them to volunteer for open source projects and
            organisations and participate in open source initiatives such as
            Google Summer of Code and Outreachy to become better developers and
            for the betterment of open source.
          </p>
        </div>
      </section>
    </>
  );
}
