'use client'

import "./productbar.css";
import React, {useEffect, useState} from "react";
import Button from "@/components/button/button";
import ArrowIcon from "../../public/arrow"
import {getData} from "@/app/catalog/data/data";
import GetDeviceName, {findDeviceByName} from "@/app/catalog/product/data";

export default function ProductBar() {
    const [productInfo, setProductInfo] = useState({
        previousDevice: "",
        nextDevice: "",
    });

    const deviceName = GetDeviceName();
    useEffect(() => {
        async function fetchDataAndFindDevice() {
            try {
                const devicesData = await getData();
                const deviceInfo = findDeviceByName(deviceName, devicesData.devices);
                const previousDevice = deviceInfo?.previousDevice
                    ? `/catalog/product?deviceName=${deviceInfo.previousDevice}`
                    : "";
                const nextDevice = deviceInfo?.nextDevice
                    ? `/catalog/product?deviceName=${deviceInfo.nextDevice}`
                    : "";

                setProductInfo({
                    previousDevice,
                    nextDevice,
                });
            } catch (error) {
                console.error("Error fetching and finding device:", error);
            }
        }

        fetchDataAndFindDevice().then();
    }, [deviceName, setProductInfo]);

    return (
        <div className={"productBarContainer"}>
            <a href={"/"}><Button buttonIcon={ArrowIcon} buttonText={"Back"}/></a>
            <div className={"spacer"}/>
            <div className={"productBarControls"}>
                <a href={productInfo.previousDevice}><Button buttonIcon={ArrowIcon}/></a>
                <a href={productInfo.nextDevice}>
                    <div className={"productBarIconRotate"}><Button buttonIcon={ArrowIcon}/></div>
                </a>
            </div>
        </div>
    );
}