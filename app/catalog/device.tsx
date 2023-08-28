'use client';

import * as React from "react";
import {handleDeviceClick} from "@/app/catalog/product/data";
import {ProductProps} from "@/app/catalog/data";
import Link from "next/link";

interface ClickableDeviceProps {
    device: ProductProps['devices'][0]; // Assuming devices is an array of objects
}

const ClickableDevice: React.FC<ClickableDeviceProps> = ({device}) => {
    const handleClick = () => {
        handleDeviceClick(device.line?.name || "");
    };

    return (
        <Link href={`catalog/device/${device.line?.id}`} passHref>
            <div onClick={handleClick}>
                <p>Line Name: {device.line?.name}</p>
                <p>Id: {device.line?.id}</p>
                <p>Name: {device.product?.name}</p>
                <p>Shortname: {device.shortnames}</p>
                <p>Max Power: {device.unifi?.network?.radios?.na?.maxPower} W</p>
            </div>
        </Link>
    );
};

export default ClickableDevice;