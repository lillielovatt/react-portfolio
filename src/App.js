import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    About,
    Contact,
    Footer,
    Header,
    Portfolio,
    Resume,
    NoMatch,
} from "./components/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    // const returnPage = (pageSelected) => {
    //     if (pageSelected === "about") {
    //         return <About />;
    //     } else if (pageSelected === "contact") {
    //         return <Contact />;
    //     } else if (pageSelected === "resume") {
    //         return <Resume />;
    //     } else if (pageSelected === "portfolio") {
    //         return <Portfolio />;
    //     }
    // };

    return (
        <Router>
            <div>
                <Header
                // pageSelected={pageSelected}
                // setPageSelected={setPageSelected}
                ></Header>
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NoMatch />} />
                </Routes>
                {/* <main>{returnPage(pageSelected)}</main> */}
                <Footer />
            </div>
        </Router>
    );
}

export default App;
