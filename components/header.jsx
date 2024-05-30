"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../app/page.module.css"
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
          <ul className="navbar-nav">
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
        </div>
      </div>
    </nav>
  );
}
