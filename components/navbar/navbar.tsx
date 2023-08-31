import "./navbar.css";
import React from "react";
import Image from "next/image";
import Logo from "../../public/logo.png";

export default function NavBar() {
    return (
        <div className={"navBar"}>
            <a href={"/"}>
                <Image className={"navBarImage"} src={Logo} alt={"Ubiquiti Logo"} width={50} height={50}/>
            </a>

            <p>Devices</p>

            <div className="spacer"/>

            <p>Ryan Waked</p>
        </div>
    );
}