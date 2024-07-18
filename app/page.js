"use client"
import classes from "./page.module.css"
import Image from "next/image";
import profilePic from "../public/images/me2.jpg"
import { useState } from "react";
import Loading from "../components/loading";
import Router from "next/router";

export default function Home() {
  const [loading, setLoading] = useState(false);

  Router.events.on('routeChangeStart', (url) => {
    setLoading(true);
  });

  Router.events.on('routeChangeComplete', (url) => {
    setLoading(false);
  });

  return (
    <>
      {
        loading ? (Loading) :
          (
            <main className={classes.main}>
              <section className={classes.introduce}>
                <h1>Hi !</h1>
                <p>Im Khoa, a software engineer student.</p>
                <p>This is where I showcase my projects and what I&apos;ve learned from them.</p>
              </section>
              <div style={{ height: 30 + "rem", width: 27 + "rem", position: "relative" }}>
                <Image src={profilePic} alt="Portfolio Image" layout="fill" />
              </div>
            </main>
          )
      }
    </>
  );
}
