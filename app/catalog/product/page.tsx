"use client";

import React, {useEffect, useState} from "react";
import Image from "next/image";
import placeholder from "../../../public/placeholder.png"
import GetDeviceName, {findDeviceByName} from "@/app/catalog/product/data";
import {getData} from "@/app/catalog/data";
import "./product.css"

export default function ProductPage() {
    const [productInfo, setProductInfo] = useState({
        deviceName: "",
        deviceId: "",
        deviceLine: "",
        deviceImageId: "",
    });

    const deviceName = GetDeviceName();

    useEffect(() => {
        async function fetchDataAndFindDevice() {
            try {
                const devicesData = await getData();
                const foundDevice = findDeviceByName(deviceName, devicesData.devices);

                if (foundDevice) {
                    const deviceId = foundDevice.line?.id || "";
                    const deviceLine = foundDevice.line?.name || "";
                    const deviceImageId = foundDevice.icon?.id || "";

                    setProductInfo({
                        deviceName: deviceName,
                        deviceId: deviceId,
                        deviceLine: deviceLine,
                        deviceImageId: "https://static.ui.com/fingerprint/ui/icons/" + deviceImageId + "_257x257.png",
                    });
                }
            } catch (error) {
                console.error("Error fetching and finding device:", error);
            }
        }

        fetchDataAndFindDevice().then();
    }, [deviceName, setProductInfo]);

    return (
        <div className="productGrid">
            <div className="">
                <Image
                    src={productInfo.deviceImageId || placeholder}
                    alt={"Product Image"}
                    width={257}
                    height={257}
                />
            </div>
            <div className="">
                <table className={"productTable"}>
                    <tbody>
                    <tr>
                        <td>Device Name: {productInfo.deviceName}</td>
                    </tr>
                    <tr>
                        <td>Product ID: {productInfo.deviceId}</td>
                    </tr>
                    <tr>
                        <td>Product Line: {productInfo.deviceLine}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

