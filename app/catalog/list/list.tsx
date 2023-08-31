'use client'

import React, {useEffect, useState} from "react";
import "./list.css";
import {getData, ProductProps} from "@/app/catalog/data/data";
import ClickableDevice from "@/app/catalog/list/device";
import {useVisibleRowsCount} from "@/components/searchbar/data/rowcount";

export default function ListComponent({searchInput, filters}: {
    searchInput: string,
    filters: string[]
}) {
    const [devices, setDevices] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {devices} = await getData();
                const filteredDevices = devices.filter((device: ProductProps["devices"][0]) => {
                    const deviceNameMatch = device.product?.name?.toLowerCase().includes(searchInput.toLowerCase());
                    const lineNameMatch = filters.length === 0 || filters.includes(device.line?.name || "");
                    return deviceNameMatch && lineNameMatch;
                });
                setDevices(filteredDevices);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData().then();
    }, [searchInput, filters]);


    return (
        <div className={"listTableContainer"}>
            <table className={"listTable"}>
                <thead className="fixedTableHeader">
                <tr className={"listTableHeader"}>
                    <th className={"listTableColumnOne"}></th>
                    <th className={"listTableColumnTwo"}>Product Line</th>
                    <th className={"listTableColumnThree listNameColor"}>
                        Name
                    </th>
                </tr>
                </thead>

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
export const ListVisibleRowsCountWrapper = ({searchInput}: { searchInput: string }) => {
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