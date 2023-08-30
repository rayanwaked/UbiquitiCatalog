'use client'

import "./productbar.css";
import React from "react";
import Button from "@/components/button/button";
import ArrowIcon from "../../public/arrow"
import {useRouter} from "next/navigation";

export default function ProductBar() {
    const router = useRouter();

    const goBackToPreviousPage = () => {
        router.back();
    };

    return (
        <div className={"productBarContainer"}>
            <Button onClick={goBackToPreviousPage} buttonIcon={ArrowIcon} buttonText={"Back"}/>
            <div className={"spacer"}/>
            <div className={"productBarControls"}>
                <Button buttonIcon={ArrowIcon}/>
                <div className={"productBarIconRotate"}><Button buttonIcon={ArrowIcon}/></div>
            </div>
        </div>
    );
}