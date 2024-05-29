import classes from "./page.module.css";
import Image from "next/image";
import profilePic from "../../public/me-nobg.png"
export const metadata = {
  title: "Khoa Vu - About",
  description: "Porfolio",
};


export default function About() {
  return (
    <container className={classes.main + " row"}>
      <div className={classes["image-container"] + " col-12 col-xl-5 col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center"}>
        <div className="image" style={{ height: 95 + "%", width: 450 + "px", position: "relative" }}>
          <Image src={profilePic} alt="Portfolio Image" layout="fill" />
        </div>
      </div>
      <main className={"col-12 col-xl-7 col-lg-12 col-md-12 col-sm-12"}>
        <div>
          <section className={classes["introduce-section"]}>
            <h1>About me</h1>
            <p>
              My name is Vu Anh Khoa. I&apos;m a third year student at VNUHCM - University of Science. Currently I&apos;m pursuing a Bachelor&apos;s Degree in Software Engineering.
            </p>
            <p>
              I have a great passion for coding and problems solving. I
            </p>
          </section>
          <section className={classes["introduce-section"]}>
            <h1>My tech stack</h1>
            <p></p>
          </section>
        </div>
      </main>
    </container>
  );
}