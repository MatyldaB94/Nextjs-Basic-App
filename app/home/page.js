
import Image from "next/image";
import OurStoryPic from "../../images/home-image-1.jpg";
import styles from "./home.module.css";


export default function Page() {
  return (
    <>
      <div className={styles.bgWrap}>
        <Image
          src={OurStoryPic}
          alt="Our story pic"
          placeholder="blur"
          quality={100}
          sizes="100vw"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <h1 className={styles.bgHeader}>Humble beginnings a story of life</h1>
      <p className={styles.bgText}>
        Hwo we became the farmers of the future, tilling the technology of tomorrow today.
      </p>
    </>
  );
}
