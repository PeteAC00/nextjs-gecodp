import Head from "next/head";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { Inter } from "@next/font/google";
import Image from "next/image";

// const inter = Inter({ subsets: ["latin"] });
// var user="Peter";

// export default function Layout({ children, home }) {
//   return (
//     <div className={styles.container}>
//       <Head></Head>

//       <header className={styles.header}>
//         {home ? (
//           <>
//             <Image
//               src="/images/profile.jpg"
//               className={styles.mainPhoto}
//               height={144}
//               width={144}
//               alt="Monkey"
//             />
//             <h1 className={utilStyles.headingMd}>{user}</h1>
//           </>
//         ) : (
//           <>
//               <Link href="/">
//                 <Image
//                   priority
//                   src="/images/profile.jpg"
//                   className={utilStyles.borderCircle}
//                   height={108}
//                   width={108}
//                   alt=""
//                 />
//               </Link>
//               <h2 className={utilStyles.headingLg}>
//                 <Link href="/" className={utilStyles.colorInherit}>
//                   {user}
//                 </Link>
//               </h2>
//           </>
//         )}
//       </header>

//       <main>{children}</main>
//       {!home && (
//         <div className={styles.backToHome}>
//           <Link href="/">← Back to home</Link>
//         </div>
//       )}
//     </div>
//   );
// }

export default function Layout({ children, home }) {
  return (
    <>
      <div className={styles.container}>
        <Head></Head>
        <header className={styles.header}>
          <h2>Test Header</h2>
        </header>
        <main>{children}</main>
        {/* {!home && (
          <div className={styles.backToHome}>
            <Link href="/">← Back to home</Link>
          </div>
        )} */}
      </div>
    </>
  );
}
