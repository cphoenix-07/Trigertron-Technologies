import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let’s try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need for your entrepreneurial journey and grow your business anywhere on the planet.
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Email Us At: vaik.co.7@gmail.com
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Mob No. : +91 92679-04982
      </p>
    </div>

  </section>
);

export default CTA;
