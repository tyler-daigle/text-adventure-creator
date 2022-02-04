import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Text Adventure Creator</title>
      </Head>

      <h1>Text Adventure Creator</h1>
      <p>Create a text adventure and share it with your friends.</p>
      <Link href="/create">
        <a>Create</a>
      </Link>
    </>
  );
}
