import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [pageSelected, setPageSelected] = useState("about");

    return (
        <header className="flex-row">
            <h2 className="flex-start">
                <Link id="link" className="my-name" to="/react-portfolio/">
                    Lillie Lovatt
                </Link>
            </h2>
            <nav className="flex-end">
                <Link
                    to="/react-portfolio/about"
                    id="link"
                    onClick={() => setPageSelected("about")}
                    className={`mx-2 ${
                        pageSelected === "about" && "navActive"
                    }`}
                >
                    ABOUT
                </Link>
                <Link
                    to="/react-portfolio/portfolio"
                    id="link"
                    onClick={() => setPageSelected("portfolio")}
                    className={`mx-2 ${
                        pageSelected === "portfolio" && "navActive"
                    }`}
                >
                    PORTFOLIO
                </Link>
                <Link
                    to="/react-portfolio/resume"
                    id="link"
                    onClick={() => setPageSelected("resume")}
                    className={`mx-2 ${
                        pageSelected === "resume" && "navActive"
                    }`}
                >
                    RESUME
                </Link>
                <Link
                    to="/react-portfolio/contact"
                    id="link"
                    onClick={() => setPageSelected("contact")}
                    className={`mx-2 ${
                        pageSelected === "contact" && "navActive"
                    }`}
                >
                    CONTACT
                </Link>
            </nav>
        </header>
    );
}
