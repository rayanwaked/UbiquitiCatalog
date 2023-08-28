'use client';

import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import placeholder from "../../../public/placeholder.png"
import GetDeviceName, {findDeviceByName} from '@/app/catalog/product/data';
import {getData} from '@/app/catalog/data';

export default function ProductPage() {
    const [productInfo, setProductInfo] = useState({
        deviceName: '',
        deviceId: '',
        deviceLine: '',
        deviceImageId: '',
    });

    const deviceName = GetDeviceName();

    useEffect(() => {
        async function fetchDataAndFindDevice() {
            try {
                const devicesData = await getData();
                const foundDevice = findDeviceByName(deviceName, devicesData.devices);

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
                }
            } catch (error) {
                console.error('Error fetching and finding device:', error);
            }
        }

        fetchDataAndFindDevice();
    }, [deviceName]);

    return (
        <div>
            <div style={{position: 'relative', width: '257px', height: '257px'}}>
                <Image
                    src={productInfo.deviceImageId || placeholder}
                    alt={"Product Image"}
                    width={257}
                    height={257}
                    sizes="(max-width: 257px) 100vw, 257px"
                />
            </div>
            <p>Device Name: {productInfo.deviceName}</p>
            <p>Product ID: {productInfo.deviceId}</p>
            <p>Product Line: {productInfo.deviceLine}</p>
        </div>
    );
}

