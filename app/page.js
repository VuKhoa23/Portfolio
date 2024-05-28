import classes from "./page.module.css"
 
export default function Home() {
  return (
    <main className={classes.main}>
        <section className={classes.introduce}> 
            <p1>Hi !</p1>
            <p>Im Khoa, a software engineer student.</p>
            <p>This is where I showcase my projects and what I&apos;ve learned from them.</p>
        </section>
        <img src={"/cropped.jpg"} alt="Portfolio Image" height="500rem" />
    </main>
  );
}
