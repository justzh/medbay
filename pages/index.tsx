import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>MedBay</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to MedBay!</h1>

        <p>
          Medical knowledge&#39;s home base
        </p>

        <div>
          <Link href="/thebay">
              <h2>The Bay &rarr;</h2>
              <p>Get your medical questions answered!</p>
          </Link>
        </div>
      </main>

    </div>
  );
}
