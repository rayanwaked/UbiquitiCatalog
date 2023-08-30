'use client'

import "./productbar.css";
import React from "react";

export default function ProductBar() {
    return (
        <div className={"productBarContainer"}>
            <button>back</button>
            <div className={"spacer"}/>
            <button>next</button>
        </div>
    );
}