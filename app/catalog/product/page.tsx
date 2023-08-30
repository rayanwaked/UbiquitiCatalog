"use client";

import React, {useEffect, useState} from "react";
import Image from "next/image";
import placeholder from "../../../public/placeholder.png";
import GetDeviceName, {findDeviceByName} from "@/app/catalog/product/data";
import {getData} from "@/app/catalog/data";
import "./product.css";

export default function ProductPage() {
    const [productInfo, setProductInfo] = useState({
        deviceName: "",
        deviceShortName: "",
        deviceId: "",
        deviceLine: "",
        deviceImageId: "",
        deviceMaxPower: "",
        deviceNumberOfPorts: "",
        deviceSpeed: "",
    });

    const deviceName = GetDeviceName();

    useEffect(() => {
        async function fetchDataAndFindDevice() {
            try {
                const devicesData = await getData();
                const foundDevice = findDeviceByName(deviceName, devicesData.devices);

                if (foundDevice) {
                    const deviceShortName = foundDevice.shortnames || "n/a";
                    const deviceId = foundDevice.line?.id || "n/a";
                    const deviceLine = foundDevice.line?.name || "n/a";
                    const deviceImageId = foundDevice.icon?.id || "n/a";
                    const deviceMaxPower = foundDevice.unifi?.network?.radios?.maxPower || "n/a";
                    const deviceNumberOfPorts = foundDevice.unifi?.network?.numberOfPorts || "n/a";
                    const deviceSpeed = foundDevice.unifi?.network?.ethernetMaxSpeedMegabitsPerSecond || "n/a";

                    setProductInfo({
                        deviceName: deviceName,
                        deviceShortName: deviceShortName as string,
                        deviceId: deviceId,
                        deviceLine: deviceLine,
                        deviceImageId: "https://static.ui.com/fingerprint/ui/icons/" + deviceImageId + "_257x257.png",
                        deviceMaxPower: deviceMaxPower as string,
                        deviceNumberOfPorts: deviceNumberOfPorts as string,
                        deviceSpeed: deviceSpeed as string,
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
            <Image
                className={"productImage"}
                src={productInfo.deviceImageId || placeholder}
                alt={"Product Image"}
                width={257}
                height={257}
            />
            <div>
                <div className={"productLabels"}>
                    <p className={"productHeader"}>{productInfo.deviceName}</p>
                    <p className={"productSubheader"}>{productInfo.deviceLine}</p>
                </div>
                <table className={"productTable"}>
                    <tbody>
                    <tr>
                        <td>Product Line</td>
                        <td className={"productData"}>{productInfo.deviceLine}</td>
                    </tr>
                    <tr>
                        <td>ID</td>
                        <td className={"productData"}>{productInfo.deviceId}</td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td className={"productData"}>{productInfo.deviceName}</td>
                    </tr>
                    <tr>
                        <td>Short Name</td>
                        <td className={"productData"}>{productInfo.deviceShortName}</td>
                    </tr>
                    <tr>
                        <td>Max. Power</td>
                        <td className={"productData"}>{productInfo.deviceMaxPower}</td>
                    </tr>
                    <tr>
                        <td>Speed</td>
                        <td className={"productData"}>{productInfo.deviceSpeed}</td>
                    </tr>
                    <tr>
                        <td>Number of Ports</td>
                        <td className={"productData"}>{productInfo.deviceNumberOfPorts}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

