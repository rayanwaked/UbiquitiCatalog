'use client'

import React, {useEffect, useState} from "react";
import "./grid.css";
import {getData, ProductProps} from "@/app/catalog/data/data";
import ClickableDevice from "@/app/catalog/grid/device";
import {useVisibleRowsCount} from "@/components/searchbar/data/rowcount";

export default function GridComponent({searchInput}: { searchInput: string }) {
    const [devices, setDevices] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {devices} = await getData();
                const filteredDevices = devices.filter((device: ProductProps["devices"][0]) => {
                    if (device && device.product?.name) {
                        return device.product?.name.toLowerCase().includes(searchInput.toLowerCase());
                    }
                    return false;
                });
                setDevices(filteredDevices);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData().then();
    }, [searchInput]);

    return (
        <div>
            <table className={"gridCatalogTable"}>
                <tbody>
                {devices.map((device, index) => (
                    <tr key={index}>
                        <td tabIndex={0}>
                            <ClickableDevice device={device}/>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

// Export visibleRowsCount separately
export const GridVisibleRowsCountWrapper = ({searchInput}: { searchInput: string }) => {
    const [devices, setDevices] = useState([]);
    const visibleRowsCount = useVisibleRowsCount(devices, searchInput);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {devices} = await getData();
                setDevices(devices);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData().then();
    }, [searchInput]);

    return visibleRowsCount;
};
