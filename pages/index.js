import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";

// import Layout from "../components/layoutGeneral";
// import NestedLayout from "../components/nested-layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="GeCodP Web App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ul className={styles.main}>
        <li className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </li>
        <li className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </li>

        <ul className={styles.grid}>
          <li className={styles.card}>
            <Link href="main">
              <h2 className={inter.className}>
                Main Window <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Main window with reports and testing data!.
              </p>
            </Link>
          </li>
        </ul>
      </ul>
    </>
  );
}
