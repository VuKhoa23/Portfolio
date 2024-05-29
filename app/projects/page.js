import classes from "./page.module.css"
import Project from "./project";

export const metadata = {
  title: "Khoa Vu - Projects",
  description: "Porfolio",
};

const project = {
  title: "Portfolio Website",
  date: "Aug 20 - Dec 21",
  description: <p>A portfolio website to showcase what I have done and learned, as well as to easily reach out to recruiters.</p>,
  imgSrc: "portfolio-project.png",
  youtube: "youtube.com",
  github: "github.com"
}

export default function Projects() {
  return (
    <>
      <container className={classes.main + " row d-flex flex-row justify-content-around"}>
        <Project project={project}/>
        <Project project={project}/>
      </container>
    </>
  );
}
