'use client'

import React, {useEffect, useState} from "react";
import "./list.css";
import {getData} from "@/app/catalog/data/data";
import ClickableDevice from "@/app/catalog/list/device";
import {useVisibleRowsCount} from "@/components/searchbar/rowcount";

export default function ListComponent() {
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
        </div>
    );
}

// Export visibleRowsCount separately
export const ListVisibleRowsCountWrapper = () => {
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