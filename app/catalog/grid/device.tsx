'use client';

import React from "react";
import Link from "next/link";
import Image from 'next/image';
import {ProductProps} from "@/app/catalog/data/data";
import "./grid.css"

// Create an interface for the devices
interface ClickableDeviceProps {
    device: ProductProps['devices'][0];
}

// Display the data to the user
const ClickableDevice: React.FC<ClickableDeviceProps> = ({device}) => {
    // Check if device is defined before using its properties
    if (!device) {
        return <div>No device found.</div>;
    }

    // Display the data and direct the user to the device page on click
    return (
        <Link href={`/catalog/product?deviceName=${encodeURIComponent(device.product?.name || "")}`} passHref>
            <table className={"gridTable"}>
                <tbody className={"gridContainer"}>
                <tr className={"gridProduct"} tabIndex={0}>
                    <td className={"gridProductRowTwo"}>
                        <div className={"gridProductRowLabel"}>
                            <div className={"gridProductRowLabelBackground"}>{device.line?.name}</div>
                        </div>
                        <div className={"gridProductRowTwoImage"}>
                            <Image
                                src={"https://static.ui.com/fingerprint/ui/icons/" + device.icon?.id + "_257x257.png"}
                                alt={"Product" +
                                    " Icon"} width={128} height={128}/></div>
                    </td>
                    <td className={"gridProductRowThree"}>{device.product?.name}</td>
                    <td className={"gridProductRowFour"}>{device.shortnames}</td>
                </tr>
                </tbody>
            </table>
        </Link>
    );
};

export default ClickableDevice;
