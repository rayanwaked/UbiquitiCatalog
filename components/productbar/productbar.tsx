'use client'

import "./productbar.css";
import React from "react";
import Button from "@/components/button/button";
import ArrowIcon from "../../public/arrow"

export default function ProductBar() {
    return (
        <div className={"productBarContainer"}>
            <Button buttonIcon={ArrowIcon} buttonText={"Back"}/>
            <div className={"spacer"}/>
            <div className={"productBarControls"}>
                <Button buttonIcon={ArrowIcon}/>
                <div className={"productBarIconRotate"}><Button buttonIcon={ArrowIcon}/></div>
            </div>
        </div>
    );
}