import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link'
// server side codes
export default function Home() {
  return (
    <>
      <h1>Hello</h1>
      <Link href="/about">Go to about</Link>
    </>
  );
}
