import React from "react";
import Lillie from "../images/Lillie.jpg";

export default function About() {
    return (
        <div className="d-flex justify-content-around">
            <img
                src={Lillie}
                className="my-2"
                // style={{ width: "100px", height: "41px" }}
                alt="picture of developer in question"
            ></img>
            <div className="p-2 m-4">
                <p>
                    I'm a new developer and I'm eager to learn. I love solving
                    problems and recently discovered my new mantra: "If it's
                    complicated, you're overthinking it."
                </p>
                <p>
                    I love playing soccer, hiking, and weight lifting, which
                    help with the long hours behind the computer.
                </p>
                <p>
                    Check out the rest of my website and please contact me with
                    any questions you may have!
                </p>
            </div>
        </div>
    );
}
