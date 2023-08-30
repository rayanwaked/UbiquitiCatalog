'use client'

import React, {useEffect, useState} from "react";
import "./grid.css";
import {getData} from "@/app/catalog/data/data";
import ClickableDevice from "@/app/catalog/grid/device";

export default function GridComponent() {
    const [devices, setDevices] = useState([]);

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


//
// const visibleRowsCount = useVisibleRowsCount(devices);