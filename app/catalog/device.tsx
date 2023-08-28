'use client';

import React from "react";
import Link from "next/link";
import {ProductProps} from "@/app/catalog/data";

// Handle user interactions on Catalog
export function handleDeviceClick(deviceName: string) {
    console.log('Clicked device name:', deviceName);
}

// Create an interface for the devices
interface ClickableDeviceProps {
    device: ProductProps['devices'][0];
}

// Display the data to the user
const ClickableDevice: React.FC<ClickableDeviceProps> = ({device}) => {
    // Handle user clicks
    const handleClick = () => {
        handleDeviceClick(device.product?.name || "");
    };

    // Check if device is defined before using its properties
    if (!device) {
        return <div>No device found.</div>;
    }

    // Display the data and direct the user to the device page on click
    return (
        <Link
            href={`/catalog/product?deviceName=${encodeURIComponent(
                device.product?.name || "")}`} passHref>
            <div onClick={handleClick}>
                <p>Line Name: {device.line?.name}</p>
                <p>Name: {device.product?.name}</p>
            </div>
        </Link>
    );
};

export default ClickableDevice;
