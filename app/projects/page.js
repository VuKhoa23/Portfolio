import classes from "./page.module.css"

export const metadata = {
  title: "Khoa Vu - Projects",
  description: "Porfolio",
};

export default function Projects() {
  return (
    <>
      <container className={classes.main + " row d-flex flex-row justify-content-around"}>
        <div className={"col-xxl-5 col-xl-7 col-md-10 " + classes.project}>
          <div className={classes["project-header"] + " d-flex flex-row justify-content-between align-items-center"}>
          <h3>E-Commerce WebApp</h3>
          <p>Aug 21 - Dec 22</p>
          </div>
          <p>Sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample</p>
        </div>
        <div className={"col-xxl-5 col-xl-7 col-md-10 " + classes.project}>
          <h3>Project 1</h3>
          <p>Sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample</p>
        </div>
      </container>
    </>
  );
}
