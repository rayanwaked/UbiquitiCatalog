'use client';

import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import GetDeviceName, {findDeviceByName} from '@/app/catalog/product/data';
import {getData} from '@/app/catalog/data';

export default function ProductPage() {
    // Initialize the variables with blank data
    const [productInfo, setProductInfo] = useState({
        deviceName: '',
        deviceId: '',
        deviceLine: '',
        deviceImageId: '',
    });

    // Get the device name
    const deviceName = GetDeviceName();

    // Find the remaining device information given the name
    useEffect(() => {
        async function fetchDataAndFindDevice() {
            const devicesData = await getData();
            const foundDevice = findDeviceByName(deviceName, devicesData.devices);
            console.log("Updated display name to", deviceName)

            if (foundDevice) {
                const deviceId = foundDevice.line?.id || '';
                const deviceLine = foundDevice.line?.name || '';
                const deviceImageId = foundDevice.icon?.id || '';

                setProductInfo({
                    deviceName: deviceName,
                    deviceId: deviceId,
                    deviceLine: deviceLine,
                    deviceImageId: "https://static.ui.com/fingerprint/ui/icons/" + deviceImageId + "_257x257.png",
                });
                console.log("Updated display id to", deviceId)
            }
        }

        // Use Promise chaining to ensure proper handling of promises
        fetchDataAndFindDevice()
            .catch(error => {
                console.error('Error fetching and finding device:', error);
            });

    }, [deviceName]);

    // Present the data to the user
    return (
        <div>
            <Image src={productInfo.deviceImageId}
                   alt={"Product Image"} width={257} height={257}/>
            <p>Device Name: {productInfo.deviceName}</p>
            <p>Product ID: {productInfo.deviceId}</p>
            <p>Product Line: {productInfo.deviceLine}</p>
        </div>
    );
}
