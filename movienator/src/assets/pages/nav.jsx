import React from "react";

import logo from "./images/logo.svg" 
import hamburguer from "./images/hamburguer.svg"

const navbar = () => {
    return (
        <div className="nav">
            <div className="nav-left">
                <img src={hamburguer} alt="" />
            </div>
            <div className="nav-right">
                <img src={logo} width={75} alt="logo" />
            </div>
        </div>
    )
};

export default navbar;