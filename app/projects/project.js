import classes from "./page.module.css";
import Image from "next/image";
import youtubeIcon from "../../public/images/youtube-icon.png";
import githubIcon from "../../public/images/github-icon.png";
export default function Project({ project }) {
    return (
        <div className={"col-xxl-5 col-xl-7 col-md-10 " + classes.project} style={{ height: 45 + "rem" }}>
            <div
                style={{ height: 25 + "rem", width: 100 + "%", position: "relative", marginBottom: 1 + "rem" }}
            >
                {project.img}
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center">
                <h2 style={{ padding: 0, margin: 0 }}>{project.title}</h2>
                <div  className="d-flex flex-row justify-content-end align-items-center" style={{width: 7.5 + "rem"}}>
                    {project.youtube &&
                        <button
                            title="Youtube demo"
                            className={classes["redirect-button"]}
                            style={{
                                height: 3 + "rem",
                                width: 3 + "rem",
                                position: "relative",
                                marginRight: 0.8 + "rem",
                            }}
                        >
                            <a href={project.youtube} target="_blank">
                                <Image src={youtubeIcon} layout="fill" />
                            </a>
                        </button>
                    }
                    {project.github &&
                        <button
                            title="Github source code"
                            className={classes["redirect-button"]}
                            style={{
                                height: 2.2 + "rem",
                                width: 3 + "rem",
                                position: "relative",
                            }}
                        >
                            <a href={project.github} target="_blank">
                                <Image src={githubIcon} layout="fill" />
                            </a>
                        </button>
                    }
                </div>
            </div>
            {project.description}
            <p style={{padding: 0, margin: 0 }}><b>Tech stack: </b><i>{project.techStack}</i></p>
        </div>
    );
}
