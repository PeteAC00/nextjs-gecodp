import Layout from "components/layout";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function mainWindow() {
  return (
    <Layout home>
      <Head></Head>    

      <section className={styles.aside}>
        <lu>
          <li>
            {" "}
            <Link href="#">List 1</Link>
          </li>
          <li>
            {" "}
            <Link href="#">List 2</Link>
          </li>
          <li>
            {" "}
            <Link href="#">List 3</Link>
          </li>
        </lu>
      </section>
      <section className={styles.grid}>
        <lu>
          <li className={styles.card}>11</li>
          <li className={styles.card}>12</li>
          <li className={styles.card}>13</li>
        </lu>
        <lu>
          <li className={styles.card}>21</li>
          <li className={styles.card}>22</li>
          <li className={styles.card}>23</li>
        </lu>
      </section>
    </Layout>
  );
}
