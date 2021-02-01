import Head from "next/head";

import eventData from "../Data/events.json";
import Event from "../components/EventComponent/Event";

const events: React.FC = () => {
  return (
    <>
      <Head>
        <title>Events - JODC</title>
      </Head>
      {eventData.map((data) => (
        <Event key={data.id} title={data.title} about={data.about} />
      ))}
    </>
  );
};

export default events;
