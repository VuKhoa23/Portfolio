import classes from "./page.module.css";
import Image from "next/image";
import profilePic from "../../public/me.jpg"
export const metadata = {
  title: "Khoa Vu - About",
  description: "Porfolio",
};

export default function About() {
  return (
    <container className={classes.main + " row"}>
      <div className={classes["image-container"] + "col col-xl-5 col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center"}>
        <div style={{height: 30 + "rem", width: 25 + 'rem', position: "relative"}}>
            <Image src={profilePic} alt="Portfolio Image" layout="fill"/>
        </div>
      </div>
      <main className={"col col-xl-7 col-lg-12 col-md-12 col-sm-12"}>
        <div>
          <section className={classes["introduce-section"]}>
            <p1>About me</p1>
            <p>My name is Vu Anh Khoa. I&apos;m a third year student at VNUHCM - University of Science</p>
          </section>
          <section className={classes["introduce-section"]}>
            <p1>My tech stack</p1>
            <p></p>
          </section>
        </div>
      </main>
    </container>
  );
}