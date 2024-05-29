import classes from './page.module.css'

export const metadata = {
  title: "Khoa Vu - Projects",
  description: "Porfolio",
};

export default function Projects() {
  return (
    <>
      <container className={classes.main + " row"}>
        <div className={"col-12 " + classes.project}>
          <h3>Project 1</h3>
          <p>Sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample sample</p>
        </div>
        <div className="col-8">
          <h3>Project 2</h3>
        </div>
      </container>
    </>
  );
}
