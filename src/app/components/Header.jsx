import React from 'react';

import Background from "../../img/b4u-cover-plain.png";
import Logo from "../../img/logo-cover.png";


export default function Header() {
    return (
        <header className="hero-image pt-3" style={{
            height: "500px"
        }}>
            <div style={{marginTop: "60px"}}>
                <div className="mb-3 text-center">
                <img id="brand" src={Logo} height="300px"/>
                <br/>
                <br/>
                    <h5 style={{color: "#1f1b2c"}}>Giving you all of the best bops on earth</h5>
                </div>
            </div>
    </header>
    )
}
