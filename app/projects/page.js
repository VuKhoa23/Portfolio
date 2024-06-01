import classes from "./page.module.css"
import Project from "./project";
import portfolioProjectImg from "../../public/images/portfolio-project.png"
import weshoppingProjectImg from "../../public/images/weshopping-project.png"
import chatProjectImg from "../../public/images/chat-project.png"
import weadsProjectImg from "../../public/images/weads-project.png"

import Image from "next/image";
export const metadata = {
  title: "Khoa Vu - Projects",
  description: "Porfolio",
};

const project = {
  title: "Portfolio Website",
  description: <p>A portfolio website to showcase what I have done and learned, as well as to easily reach out to recruiters.</p>,
  img: <Image src={portfolioProjectImg} layout="fill" alt="Portfolio Website Image" />,
  youtube: undefined,
  github: "https://github.com/VuKhoa23/Portfolio",
  techStack: "NextJs (React), Bootstrap"
}

const project2 = {
  title: "WeShopping",
  description: <p>Simple E-Commerce Website. This project serves as a culmination of my Java Spring knowledge, and concurrently learning Angular to develop the frontend</p>,
  img: <Image src={weshoppingProjectImg} layout="fill" alt="Portfolio Website Image" />,
  youtube: "https://www.youtube.com/watch?v=PuaeUYqUh_Q",
  github: "https://github.com/VuKhoa23/WeShopping",
  techStack: "Java Spring, Angular, Bootstrap, MySQL"
}

const project3 = {
  title: "WeAds",
  description: <p>WeAds empowers officials to supervise billboard placements
    and manage personnel. Citizens access billboard information and can report issues or provide feedback.</p>,
  img: <Image src={weadsProjectImg} layout="fill" alt="Portfolio Website Image" />,
  youtube: "https://www.youtube.com/watch?v=6SL3_YXreL0",
  github: "https://github.com/VuKhoa23/WE-ADS",
  techStack: "ExpressJs (NodeJs), EJS, Bootstrap, MongoDB"
}

const project4 = {
    title: "Java Chat Application",
    description: <p>Java Chat Application. User can chat 1v1, create group chat, send files and images.</p>,
    img: <Image src={chatProjectImg} layout="fill" alt="Portfolio Website Image" />,
    youtube: "https://www.youtube.com/watch?v=l5mrJ43TOqU",
    github: "https://github.com/VuKhoa23/Java-Chat-App",
    techStack: "Java Swing, Socket, MySQL"
  }


export default function Projects() {
  return (
    <>
      <container className={classes.main + " row d-flex flex-row justify-content-around"}>
        <Project project={project} />
        <Project project={project2} />
        <Project project={project3} />
        <Project project={project4} />
      </container>
    </>
  );
}
