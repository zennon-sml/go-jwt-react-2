import React from "react";
import { Link } from "react-router-dom";

const WrongRoute = () => {
    return (
        <div>
            <h1>Route dont exists</h1>
            <br />
            <Link to="/" ><h1>HOME PAGE</h1></Link>
        </div>
    )
}

export default WrongRoute