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
              I have a great passion for coding and problems solving. I believe that technology has the power to transform lives and solve complex challenges. Throughout my academic journey, I've honed my skills in various programming languages and development tools, striving to become a versatile and efficient software engineer.
            </p>
          </section>
          <section className={classes["introduce-section"]}>
            <h1>Technical Strengths</h1>
            <h2>Skills Overview</h2>
            <p>In my coding journey, I've gained proficiency in several programming languages, each offering its unique strengths. While I'm still sharpening my skills, I'm comfortable navigating Java, Python, JavaScript/TypeScript, HTML/CSS, C/C++, and C#.</p>
            <h2>Backend Frameworks</h2>
            <p>Exploring the world of backend development, I've experimented with frameworks like ExpressJs, Django, and Spring Framework. While I'm still refining my understanding, I've found these tools invaluable in shaping robust backend solutions. <br/>I'm also fluent in Relational Databases like MySQL and MS-SQL</p>
            <h2>Frontend Explorations</h2>
            <p>Frontend Explorations:

On the frontend side, I've played around with React, Angular, and Bootstrap. While I'm not an expert yet, I've created basic, functional interfaces that balance looks with usability.</p>
          </section>
        </div>
      </main>
    </container>
  );
}