import classes from "./page.module.css"
import Project from "./project";

export const metadata = {
  title: "Khoa Vu - Projects",
  description: "Porfolio",
};

const project = {
  title: "E-Commerce",
  date: "Aug 20 - Dec 21",
  description: <p> sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample</p>
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
