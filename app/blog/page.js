import Image from "next/image";
import BlogPic from "../../images/home-image-2.jpg"
import styles from "./blog.modules.css"



export default function Page() {
  return (
    <>
      <div className={styles.bgWrap}>
        <Image
          src={BlogPic}
          alt="Blog pic"
          placeholder="blur"
          quality={100}
          sizes="100vw"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <h1 className={styles.bgHeader}>Welcome to Blog</h1>
    </>
  );
}
