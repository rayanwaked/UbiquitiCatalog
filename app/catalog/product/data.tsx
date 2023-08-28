import {ProductProps} from "@/app/catalog/data";
import {useEffect, useState} from "react";

// Get the device name from the URL
export default function GetDeviceName() {
    const [deviceName, setDeviceName] = useState("");

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const name = queryParams.get("deviceName");
        // console.log("Retrieved device name:", name);

        // Only update the deviceName state if name is not null
        if (name !== null) {
            // console.log("Setting device name:", name);
            setDeviceName(name);
        }
    }, []);
    return deviceName;
}

// Find a device in the data by its name
export function findDeviceByName(
    deviceName: string,
    devices: ProductProps['devices']
) {
    const foundDevice = devices?.find((device) => {
        // console.log("Comparing device name:", device.product?.name);
        // console.log("With provided name:", deviceName);
        return device.product?.name === deviceName;
    });

    // console.log("Found device", foundDevice);
    return foundDevice || null;
}