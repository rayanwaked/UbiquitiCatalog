'use client';

import React from "react";
import Link from "next/link";
import Image from 'next/image';
import {ProductProps} from "@/app/catalog/data";

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
            <table>
                <tbody>
                <tr>
                    <td><Image src={"https://static.ui.com/fingerprint/ui/icons/" + device.icon?.id + "_257x257.png"}
                               alt={"Product" +
                                   " Icon"} width={20} height={20}/></td>
                    <td><p>{device.line?.name}</p></td>
                    <td><p>{device.product?.name}</p></td>
                </tr>
                </tbody>
            </table>
        </Link>
    );
};

export default ClickableDevice;
