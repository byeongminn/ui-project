import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>UI DESIGN</title>
        <meta
          name="description"
          content="User Interface Elements For Frontend"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <ul>
          <li>
            <Link href="/skeleton">Skeleton</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
