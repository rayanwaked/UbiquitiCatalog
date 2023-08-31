"use client";

import React, {useEffect, useState} from "react";
import Image from "next/image";
import placeholder from "../../../public/placeholder.png";
import GetDeviceName, {findDeviceByName} from "@/app/catalog/product/data";
import {getData} from "@/app/catalog/data/data";
import "./product.css";
import ProductBar from "@/components/productbar/productbar";

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

    const [showJsonData, setShowJsonData] = useState(false);

    const deviceName = GetDeviceName();

    useEffect(() => {
        async function fetchDataAndFindDevice() {
            try {
                const devicesData = await getData();
                const display = findDeviceByName(deviceName, devicesData.devices);
                document.title = deviceName

                if (display) {
                    const deviceShortName = display.foundDevice.shortnames || "n/a";
                    const deviceId = display.foundDevice.line?.id || "n/a";
                    const deviceLine = display.foundDevice.line?.name || "n/a";
                    const deviceImageId = display.foundDevice.icon?.id || "n/a";
                    const deviceMaxPower = display.foundDevice.unifi?.network?.radios?.maxPower || "n/a";
                    const deviceNumberOfPorts = display.foundDevice.unifi?.network?.numberOfPorts || "n/a";
                    const deviceSpeed = display.foundDevice.unifi?.network?.ethernetMaxSpeedMegabitsPerSecond || "n/a";

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
        <div>
            <ProductBar/>
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
                    <button onClick={() => setShowJsonData(!showJsonData)}
                            className={"productJsonToggle"}>See All Details as JSON
                    </button>
                    {showJsonData && (
                        <pre className="productJsonContainer">
                            {JSON.stringify(productInfo, null, 2)}
                        </pre>
                    )}
                </div>
            </div>
        </div>
    );
}

