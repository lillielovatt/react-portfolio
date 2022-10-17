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
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/react-portfolio/" element={<About />} />
                    <Route
                        path="/react-portfolio/resume"
                        element={<Resume />}
                    />
                    <Route
                        path="/react-portfolio/portfolio"
                        element={<Portfolio />}
                    />
                    <Route
                        path="/react-portfolio/contact"
                        element={<Contact />}
                    />
                    <Route path="/react-portfolio/about" element={<About />} />
                    <Route path="*" element={<NoMatch />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
