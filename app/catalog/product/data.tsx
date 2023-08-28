// Handle user interactions on Catalog
import {ProductProps} from "@/app/catalog/data";

export function findDeviceById(
    deviceId: string,
    devices: ProductProps['devices']
) {
    const foundDevice = devices?.find((device) => device.line?.id === deviceId);
    return foundDevice || null;
}

export function handleDeviceClick(deviceName: string) {
    console.log('Clicked device name:', deviceName);
}