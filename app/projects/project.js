import classes from "./page.module.css";
import Image from "next/image";
import youtubeIcon from "../../public/youtube-icon.png";
import githubIcon from "../../public/github-icon.png";
export default function Project({ project }) {
  return (
    <div className={"col-xxl-5 col-xl-7 col-md-10 " + classes.project} style={{height: 35 + "rem"}}>
      <div
        style={{ height: 25 + "rem", width: 100 + "%", position: "relative" }}
      >
        {project.img}
      </div>
      <div className="d-flex flex-row justify-content-between">
        <h1>{project.title}</h1>
        <div>
          <button
            title="Youtube demo"
            className={classes["redirect-button"]}
            style={{
              height: 3 + "rem",
              width: 3 + "rem",
              position: "relative",
              marginRight: 0.5 + "rem",
            }}
          >
            <Image src={youtubeIcon} layout="fill" />
          </button>
          <button
            title="Github source code"
            className={classes["redirect-button"]}
            style={{
              height: 2.2 + "rem",
              width: 3 + "rem",
              position: "relative",
            }}
          >
            <Image src={githubIcon} layout="fill" />
          </button>
        </div>
      </div>
      {project.description}
    </div>
  );
}
