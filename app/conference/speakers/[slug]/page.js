import { speakerJson } from "../page";
import styles from "../../conference.module.css";

function fetchSpeakerInfo(params) {
  // API call, CB Query, fetch from the app

  if (speakerJson.speakers) {
    const speakerInfo = speakerJson.speakers.find(
      (speaker) => speaker.name === params.slug
    );

    return speakerInfo;
  }
  return null;
}

export default async function Page({ params }) {
  const speakerInfo = fetchSpeakerInfo(params);

  if (!speakerInfo) {
    return <div>Loading</div>
  }
  const { name, bio, sessions } = speakerInfo;

  return (
    <div className={styles.infoContainer}>
      <h3 className={styles.titleText}>{name}</h3>
      <h5 className={styles.descText}>About: {bio}</h5>
      {sessions &&
        sessions.map(({ name, id }) => (
          <div key={id}>
            <h5 className={styles.descText}>Session: {name}</h5>
          </div>
        ))}
    </div>
  );
}