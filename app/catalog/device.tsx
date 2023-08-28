'use client';

import * as React from "react";
import Link from "next/link";
import {handleDeviceClick} from "@/app/catalog/product/data";
import {ProductProps} from "@/app/catalog/data";

// Create an interface for the devices
interface ClickableDeviceProps {
    device: ProductProps['devices'][0];
}

// Display the data to the user
const ClickableDevice: React.FC<ClickableDeviceProps> = ({device}) => {
    // Handle user clicks
    const handleClick = () => {
        handleDeviceClick(device.line?.name || "");
    };

    // Display the data, direct the user to the Product page, and pass the data
    return (
        <Link href={`catalog/product/${device.line?.id}`} passHref>
            <div onClick={handleClick}>
                <p>Line Name: {device.line?.name}</p>
                <p>Name: {device.product?.name}</p>
            </div>
        </Link>
    );
};

export default ClickableDevice;