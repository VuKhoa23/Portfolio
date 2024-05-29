
import classes from "./page.module.css"

export default function Project({project}) {
    return (
        <div className={"col-xxl-5 col-xl-7 col-md-10 " + classes.project}>
            <div className={classes["project-header"] + " d-flex flex-row justify-content-between align-items-center"}>
                <h3>{project.title}</h3>
                <p>{project.date}</p>
            </div>
            <p>{project.description}</p>
        </div>
    )
}