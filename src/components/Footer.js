import React from "react";
import github from "../images/GitHub_Logo.png";
import linkedIn from "../images/LI-Logo.png";

export default function Footer() {
    return (
        <div>
            <footer>
                <a href="https://github.com/lillielovatt" target="_blank">
                    <img
                        src={github}
                        className="my-2"
                        style={{ width: "100px", height: "41px" }}
                        alt="github"
                    ></img>
                </a>

                <a
                    href="https://www.linkedin.com/in/lillie-lovatt-7b2475181/"
                    target="_blank"
                >
                    <img
                        src={linkedIn}
                        className="my-2"
                        style={{ width: "100px", height: "25px" }}
                        alt="linkedIn"
                    ></img>
                </a>
            </footer>
        </div>
    );
}
