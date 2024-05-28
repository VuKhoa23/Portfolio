import classes from "./page.module.css"
import Image from "next/image";
import profilePic from "../public/me2.jpg"

export default function Home() {
  return (
    <main className={classes.main}>
        <section className={classes.introduce}> 
            <p1>Hi !</p1>
            <p>Im Khoa, a software engineer student.</p>
            <p>This is where I showcase my projects and what I&apos;ve learned from them.</p>
        </section>
        <div style={{height: 30 + "rem", width: 34 + 'rem', position: "relative"}}>
            <Image src={profilePic} alt="Portfolio Image" layout="fill"/>
        </div>
    </main>
  );
}
