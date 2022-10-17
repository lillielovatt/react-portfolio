import React from "react";
import { Link } from "react-router-dom";

export default function NoMatch() {
    return (
        <div>
            <h1>Nothing to see here, folks.</h1>
            <Link to="/">Let's go home.</Link>
        </div>
    );
}
