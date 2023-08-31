import {ProductProps} from "@/app/catalog/data/data";
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
    const deviceIndex = devices.findIndex(device => device.product?.name === deviceName);

    if (deviceIndex === -1) {
        return null;
    }

    const previousDevice = deviceIndex > 0 ? devices[deviceIndex - 1].product?.name : null;
    const nextDevice = deviceIndex < devices.length - 1 ? devices[deviceIndex + 1].product?.name : null;
    const foundDevice = devices[deviceIndex];

    return {
        previousDevice,
        foundDevice,
        nextDevice
    };
}