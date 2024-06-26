import classes from "./page.module.css";
import Image from "next/image";
import profilePic from "../../public/images/me-nobg.png"
export const metadata = {
  title: "Khoa Vu - About",
  description: "Porfolio",
};


export default function About() {
  return (
    <container className={classes.main + " row"}>
      <div className={classes["image-container"] + "d-xl-flex d-lg-flex d-md-none col-12 col-xl-5 justify-content-center"}>
        <div className="image" style={{ height: 95 + "%", width: 450 + "px", position: "relative" }}>
          <Image src={profilePic} alt="Portfolio Image" layout="fill" />
        </div>
      </div>
      <main className={"col-12 col-xl-7 col-lg-12 col-md-12 col-sm-12"}>
        <div>
          <section className={classes["introduce-section"]}>
            <h1>About me</h1>
            <p>
              My name is Vu Anh Khoa. I&apos;m a third year student at <b>VNUHCM - University of Science</b>. Currently I&apos;m pursuing a Bachelor&apos;s Degree in Software Engineering.
            </p>
            <p>
              I have a great passion for coding and problems solving. I believe that technology has the power to transform lives and solve complex challenges. Throughout my academic journey, I&apos;ve honed my skills in various programming languages and development tools, striving to become a versatile and efficient software engineer.
            </p>
          </section>
          <section className={classes["introduce-section"]}>
            <h1>Technical Strengths</h1>
            <h2>Skills Overview</h2>
            <p>In my coding journey, I&apos;ve gained proficiency in several programming languages, each offering its unique strengths. While I&apos;m still sharpening my skills, I&apos;m comfortable navigating <b>Java, Python, JavaScript/TypeScript, HTML/CSS, C/C++, and C#.</b></p>
            <h2>Backend Frameworks</h2>
            <p>Exploring the world of backend development, I&apos;ve experimented with frameworks like <b>Java Spring Framework, ExpressJs and Django.</b> While I&apos;m still refining my understanding, I&apos;ve found these tools invaluable in shaping robust backend solutions.
              <br />
              I&apos;m also proficient in relational databases such as <b>MySQL and MS-SQL</b>. Moreover, I have hands-on experience with NoSQL databases like <b>MongoDB</b>.
            </p>
            <h2>Frontend Explorations</h2>
            <span>On the frontend side, I&apos;ve played around with <b>React, Angular, and Bootstrap.</b> While I&apos;m not an expert yet, I&apos;ve created basic, functional interfaces that balance looks with usability.</span>
          </section>
        </div>
      </main>
    </container>
  );
}