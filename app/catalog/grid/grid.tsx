'use client'

import React, {useEffect, useState} from "react";
import "./grid.css";
import {getData} from "@/app/catalog/data/data";
import ClickableDevice from "@/app/catalog/grid/device";
import {useVisibleRowsCount} from "@/components/searchbar/rowcount";

export default function GridComponent() {
    const [devices, setDevices] = useState([]);
    const visibleRowsCount = useVisibleRowsCount(devices);

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
    }, []);

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
export const GridVisibleRowsCountWrapper = () => {
    const [devices, setDevices] = useState([]);
    const visibleRowsCount = useVisibleRowsCount(devices);

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
    }, []);

    return visibleRowsCount;
};