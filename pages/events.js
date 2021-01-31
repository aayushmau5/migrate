import Head from "next/head";

import eventData from "../Data/events.json";
import Event from "../components/EventComponent/Event";

export default function events() {
  return (
    <>
      <Head>
        <title>Events - JODC</title>
      </Head>
      {eventData.map((data) => (
        <Event id={data.id} title={data.title} about={data.about} />
      ))}
    </>
  );
}
