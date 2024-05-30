"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../app/page.module.css"
import githubIcon from "../public/images/github-icon.png";
import linkedinIcon from "../public/images/linkedin-icon.png";

import Image from "next/image";
export default function Header() {
  const pathName = usePathname()
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          Vu Anh Khoa
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className={"nav-link" + (pathName === '/about' ? ' header-active' : '')} aria-current="page" href="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className={"nav-link" + (pathName === '/projects' ? ' header-active' : '')} href="/projects">
                Projects
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className={"nav-link" + (pathName === '/licenses-certificates' ? ' header-active' : '')} href="/licenses-certificates">
                Licenses & Certificates
              </Link>
            </li> */}
          </ul>
          <div style={{width: 8 + "rem"}}> 
            <button
              className="redirect-button"
              title="My LinkedIn Profile"
              style={{
                height: 2.2 + "rem",
                width: 3 + "rem",
                position: "relative",
                marginRight: 1.5 + "rem"
              }}
            >
              <Link href="https://www.linkedin.com/in/vukhoa23/" target="_blank">
                <Image src={linkedinIcon} layout="fill" />
              </Link>
            </button>

            <button
              className="redirect-button"
              title="My Github Profile"
              style={{
                height: 2.2 + "rem",
                width: 3 + "rem",
                position: "relative",
              }}
            >
              <Link href="https://github.com/VuKhoa23" target="_blank">
                <Image src={githubIcon} layout="fill" />
              </Link>
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
}
