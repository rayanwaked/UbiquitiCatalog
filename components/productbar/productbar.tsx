'use client'

import "./productbar.css";
import React from "react";
import Button from "@/components/button/button";
import ArrowIcon from "../../public/arrow"
import Link from "next/link";

export default function ProductBar() {
    return (
        <div className={"productBarContainer"}>
            <Link href={`/catalog`} passHref>
                <Button buttonIcon={ArrowIcon} buttonText={"Back"}/>
            </Link>
            <div className={"spacer"}/>
            <div className={"productBarControls"}>
                <Button buttonIcon={ArrowIcon}/>
                <div className={"productBarIconRotate"}><Button buttonIcon={ArrowIcon}/></div>
            </div>
        </div>
    );
}